using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestCenter.Services.Mock
{
    public class AssessmentServiceMock : AssessmentService
    {
        public List<object> GetTop()
        {
            return new List<object> {
                "one",
                "two",
                "three"
            };
        }
    }
}
