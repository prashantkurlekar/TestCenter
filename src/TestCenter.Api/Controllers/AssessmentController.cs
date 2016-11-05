using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TestCenter.Api.Controllers
{
    [Route("api/[controller]")]
    public class AssessmentController : Controller
    {
        [HttpGet]
        // [RouteAttribute("top")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2", "value3" };
        }
    }
}