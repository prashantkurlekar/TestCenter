using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TestCenter.Models;
using TestCenter.Services;

namespace TestCenter.Api.Controllers
{
    [Route("api/[controller]")]
    public class AssessmentController : Controller
    {
        private readonly AssessmentService AssessmentService;

        public AssessmentController(AssessmentService assessmentService)
        {
            AssessmentService = assessmentService;
        }
        
        [HttpGet]
        // [RouteAttribute("top")]
        public IEnumerable<Assessment> Get()
        {
            return AssessmentService.Get();
        }
    }
}