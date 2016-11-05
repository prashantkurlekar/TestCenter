using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestCenter.Models;

namespace TestCenter.Services
{
    public interface AssessmentService
    {
        List<Assessment> Get();
    }
}
