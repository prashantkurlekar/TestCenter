using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TestCenter.Models;

namespace TestCenter.Api.Controllers
{
    [Route("api/[controller]")]
    public class AssessmentController : Controller
    {
        [HttpGet]
        // [RouteAttribute("top")]
        public IEnumerable<Assessment> Get()
        {
            return new Assessment[]
            {
                new Assessment(System.Guid.NewGuid(), "One", "qwerpoiuytasdflkjhgzxcvbmn"),
                new Assessment(System.Guid.NewGuid(), "Two", "qwerpoiuytasdflkjhgzxcvbmn"),
                new Assessment(System.Guid.NewGuid(), "Three", "qwerpoiuytasdflkjhgzxcvbmn")
            };
        }
    }
}