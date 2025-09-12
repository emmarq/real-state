using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RealStateApi.Models;

public class RealStateTrace
{
    public DateTime DateSale { get; set; }

    public string Name { get; set; }

    public decimal Value { get; set; }

    public string Tax { get; set; }
}
