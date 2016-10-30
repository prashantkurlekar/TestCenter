using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestCenter.Models
{
    public class Assessment
    {
        public Assessment()
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public List<string> Labels { get; set; }
        }
    }
}
