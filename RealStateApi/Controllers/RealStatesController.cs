using RealStateApi.Models;
using RealStateApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace RealStateApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RealStatesController : ControllerBase
{
    private readonly RealStatesService _realStatesService;

    public RealStatesController(RealStatesService realStatesService) =>
        _realStatesService = realStatesService;

    [HttpGet]
    public async Task<ActionResult<PagedResult<RealState>>> Get(
         [FromQuery] int pageNumber = 1,
         [FromQuery] int pageSize = 10,
         [FromQuery] string? sortBy = null,
         [FromQuery] bool sortDescending = false,
         [FromQuery] RealStateFilter? filters = null)
    {
        var pagination = new PaginationParams
        {
            PageNumber = pageNumber,
            PageSize = pageSize
        };

        var sortParams = new SortParams
        {
            SortBy = sortBy,
            SortDescending = sortDescending
        };

        var result = await _realStatesService.GetPagedAsync(pagination, filters, sortParams);

        return Ok(result);
    }

    [HttpGet("price-range")]
    public async Task<ActionResult<RealStatePriceRange>> Get()
    {
        var RealStatePriceRange = await _realStatesService.GetPriceLimitsAsync();

        if (RealStatePriceRange is null)
        {
            return NotFound();
        }

        return RealStatePriceRange;
    }

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<RealState>> Get(string id)
    {
        var realState = await _realStatesService.GetAsync(id);

        if (realState is null)
        {
            return NotFound();
        }

        return realState;
    }

    [HttpPost]
    public async Task<IActionResult> Post(RealState newRealState)
    {
        await _realStatesService.CreateAsync(newRealState);

        return CreatedAtAction(nameof(Get), new { id = newRealState.Id }, newRealState);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, RealState updatedRealState)
    {
        var realState = await _realStatesService.GetAsync(id);

        if (realState is null)
        {
            return NotFound();
        }

        updatedRealState.Id = realState.Id;

        await _realStatesService.UpdateAsync(id, updatedRealState);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var realState = await _realStatesService.GetAsync(id);

        if (realState is null)
        {
            return NotFound();
        }

        await _realStatesService.RemoveAsync(id);

        return NoContent();
    }
}
