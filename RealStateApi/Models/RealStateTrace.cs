using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RealStateApi.Models;

public class RealStateTrace
{
    [BsonElement("dateSale")]
    public DateTime DateSale { get; set; }

    [BsonElement("name")]
    public string Name { get; set; }

    [BsonElement("value")]
    public decimal Value { get; set; }

    [BsonElement("tax")]
    public double Tax { get; set; }
}
