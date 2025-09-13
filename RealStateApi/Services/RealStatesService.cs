using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using RealStateApi.Models;

namespace RealStateApi.Services;

public class RealStatesService
{

    private readonly IMongoCollection<RealState> _realStatesCollection;

    public RealStatesService(IOptions<RealStateStoreDatabaseSettings> realStateStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(realStateStoreDatabaseSettings.Value.ConnectionString);
        var db = mongoClient.GetDatabase(realStateStoreDatabaseSettings.Value.DatabaseName);
        _realStatesCollection = db.GetCollection<RealState>(realStateStoreDatabaseSettings.Value.RealStateCollectionName);
    }

    public async Task<PagedResult<RealState>> GetPagedAsync(PaginationParams pagination,
                                                  RealStateFilter? filter = null,
                                                  SortParams? sort = null)
    {
        var filterDefinition = BuildFilter(filter);
        var sortDefinition = BuildSort(sort);

        var totalCount = await _realStatesCollection.CountDocumentsAsync(filterDefinition);

        var items = await _realStatesCollection
            .Find(filterDefinition)
            .Sort(sortDefinition)
            .Skip((pagination.PageNumber - 1) * pagination.PageSize)
            .Limit(pagination.PageSize)
            .ToListAsync();

        return new PagedResult<RealState>
        {
            Items = items,
            TotalCount = (int)totalCount,
            PageNumber = pagination.PageNumber,
            PageSize = pagination.PageSize
        };
    }

    public async Task<List<RealState>> GetAsync() =>
            await _realStatesCollection.Find(_ => true).ToListAsync();

    public async Task<RealState?> GetAsync(string id) =>
        await _realStatesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(RealState newRealState) =>
        await _realStatesCollection.InsertOneAsync(newRealState);

    public async Task UpdateAsync(string id, RealState updatedRealState) =>
        await _realStatesCollection.ReplaceOneAsync(x => x.Id == id, updatedRealState);

    public async Task RemoveAsync(string id) =>
        await _realStatesCollection.DeleteOneAsync(x => x.Id == id);

    private FilterDefinition<RealState> BuildFilter(RealStateFilter? filter)
    {
        if (filter == null)
            return Builders<RealState>.Filter.Empty;

        var filterBuilder = Builders<RealState>.Filter;
        var filters = new List<FilterDefinition<RealState>>();

        // Name filter (case-insensitive partial match)
        if (!string.IsNullOrEmpty(filter.Name))
            filters.Add(filterBuilder.Regex(x => x.Name, new BsonRegularExpression(filter.Name, "i")));

        // Address filter (case-insensitive partial match)
        if (!string.IsNullOrEmpty(filter.Address))
            filters.Add(filterBuilder.Regex(x => x.Address, new BsonRegularExpression(filter.Address, "i")));

        // Price range filters
        if (filter.MinPrice.HasValue)
            filters.Add(filterBuilder.Gte(x => x.Price, filter.MinPrice.Value));

        if (filter.MaxPrice.HasValue)
            filters.Add(filterBuilder.Lte(x => x.Price, filter.MaxPrice.Value));

        return filters.Any() ? filterBuilder.And(filters) : filterBuilder.Empty;
    }

    private SortDefinition<RealState> BuildSort(SortParams? sort)
    {
        if (sort == null || string.IsNullOrEmpty(sort.SortBy))
            return Builders<RealState>.Sort.Descending("_id");

        var sortBuilder = Builders<RealState>.Sort;
        return sort.SortDescending
            ? sortBuilder.Descending(sort.SortBy)
            : sortBuilder.Ascending(sort.SortBy);
    }
}
