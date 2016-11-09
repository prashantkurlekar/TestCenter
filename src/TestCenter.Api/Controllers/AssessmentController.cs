using System;
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
        public IEnumerable<Assessment> Get()
        {
            return AssessmentService.Get();
        }

        [HttpGet("{id}")]
        public Assessment Get(Guid id)
        {
            return AssessmentService.Get(id);
        }

        [HttpGet]
        public IEnumerable<Assessment> Top()
        {
            return AssessmentService.Get();
        }
    }
}