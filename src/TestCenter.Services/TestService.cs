using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestCenter.Services
{
    public interface TestService
    {
        IList<Test> GetTop();
    }
}
