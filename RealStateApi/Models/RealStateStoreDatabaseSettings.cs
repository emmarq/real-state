namespace RealStateApi.Models;

public class RealStateStoreDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string RealStateCollectionName { get; set; } = null!;
}
