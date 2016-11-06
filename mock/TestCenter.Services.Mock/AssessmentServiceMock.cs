using System;
using System.Collections.Generic;
using System.Linq;
using TestCenter.Models;

namespace TestCenter.Services.Mock
{
    public class AssessmentServiceMock : AssessmentService
    {
        private static readonly Assessment[] mockAssessments = {
            new Assessment(System.Guid.NewGuid(), "One", "qwerpoiuytasdflkjhgzxcvbmn"),
            new Assessment(System.Guid.NewGuid(), "Two", "qwerpoiuytasdflkjhgzxcvbmn"),
            new Assessment(System.Guid.NewGuid(), "Three", "qwerpoiuytasdflkjhgzxcvbmn"),
            new Assessment(System.Guid.NewGuid(), "Four", "qwerpoiuytasdflkjhgzxcvbmn"),
            new Assessment(System.Guid.NewGuid(), "Five", "qwerpoiuytasdflkjhgzxcvbmn")
        };

        public List<Assessment> Get()
        {
            return mockAssessments.ToList();
        }

        public Assessment Get(Guid id)
        {
            return mockAssessments.Where(a => a.Id == id).FirstOrDefault();
        }
    }
}
