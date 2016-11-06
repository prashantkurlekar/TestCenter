using System;
using System.Collections.Generic;
using TestCenter.Models;

namespace TestCenter.Services
{
    public interface AssessmentService
    {
        List<Assessment> Get();
        Assessment Get(Guid id);
    }
}
