using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RealStateApi.Models;

public class RealState
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string Name { get; set; }

    public string Address { get; set; }

    public decimal Price { get; set; }

    public string CodeInternal { get; set; }

    public string Year { get; set; }


}
