using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RealStateApi.Models;

public class RealStateOwner
{
    [BsonElement("name")]
    public string Name { get; set; }

    [BsonElement("address")]
    public string Address { get; set; }

    [BsonElement("photo")]
    public string Photo { get; set; }

    [BsonElement("birthday")]
    public DateTime Birthday { get; set; }
}
