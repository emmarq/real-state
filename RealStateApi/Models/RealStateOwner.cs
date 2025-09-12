using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RealStateApi.Models;

public class RealStateOwner
{
    public string Name { get; set; }

    public string Address { get; set; }

    public string Photo { get; set; }

    public DateTime Birthday { get; set; }
}
