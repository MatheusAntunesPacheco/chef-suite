using Microsoft.AspNetCore.Mvc;

namespace ChefSuiteBff.Controllers;

[ApiController]
[Route("[controller]")]
public class TablesController : ControllerBase
{
    private readonly ILogger<TablesController> _logger;

    public TablesController(ILogger<TablesController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public List<Table> Get()
    {
        return new(){
            new Table { Id = 1, Size = 4},
            new Table { Id = 1, Size = 2},
            new Table { Id = 1, Size = 6},
            new Table { Id = 1, Size = 4},
            new Table { Id = 1, Size = 6},
            new Table { Id = 1, Size = 10},
            new Table { Id = 1, Size = 4},
            new Table { Id = 1, Size = 4},
            new Table { Id = 1, Size = 4},
            new Table { Id = 1, Size = 2}
        };
    }
}
