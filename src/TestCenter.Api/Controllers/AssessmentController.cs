using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TestCenter.Models;
using TestCenter.Services;

namespace TestCenter.Api.Controllers
{
    [Route("api/[controller]")]
    public class AssessmentController : Controller
    {
        AssessmentService Service;

        public AssessmentController(AssessmentService assessmentService)
        {
            Service = assessmentService;
        }
        
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