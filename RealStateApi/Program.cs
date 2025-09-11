using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var mongoClient = new MongoClient("mongodb://localhost:27017");
var db = mongoClient.GetDatabase("local");

app.MapGet("/", () =>
{
    return db.ListCollectionNames().ToList();
});

app.Run();
