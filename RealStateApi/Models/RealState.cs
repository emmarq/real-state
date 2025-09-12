using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RealStateApi.Models;

public class RealState
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]
    public string Name { get; set; }

    [BsonElement("address")]
    public string Address { get; set; }

    [BsonElement("price")]
    public decimal Price { get; set; }

    [BsonElement("codeInternal")]
    public string CodeInternal { get; set; }

    [BsonElement("year")]
    public string Year { get; set; }

    [BsonElement("image")]
    public string Image { get; set; }

    [BsonElement("owner")]
    public RealStateOwner Owner { get; set; }

    [BsonElement("trace")]
    public List<RealStateTrace> Trace { get; set; }
}
