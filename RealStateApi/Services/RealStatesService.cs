using Microsoft.Extensions.Options;
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
}
