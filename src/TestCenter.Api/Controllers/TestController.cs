using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace api.testcenter.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        [HttpGet]
        [RouteAttribute("top")]
        public IEnumerable<string> Top()
        {
            return new string[] { "value1", "value2", "value3" };
        }
    }
}