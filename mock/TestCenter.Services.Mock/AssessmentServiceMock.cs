using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestCenter.Models;

namespace TestCenter.Services.Mock
{
    public class AssessmentServiceMock : AssessmentService
    {
        public List<Assessment> Get()
        {
            return new Assessment[]
            {
                new Assessment(System.Guid.NewGuid(), "One", "qwerpoiuytasdflkjhgzxcvbmn"),
                new Assessment(System.Guid.NewGuid(), "Two", "qwerpoiuytasdflkjhgzxcvbmn"),
                new Assessment(System.Guid.NewGuid(), "Three", "qwerpoiuytasdflkjhgzxcvbmn"),
                new Assessment(System.Guid.NewGuid(), "Four", "qwerpoiuytasdflkjhgzxcvbmn"),
                new Assessment(System.Guid.NewGuid(), "Five", "qwerpoiuytasdflkjhgzxcvbmn")
            }.ToList();
        }
    }
}
