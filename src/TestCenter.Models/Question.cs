using System;
using System.Collections.Generic;

namespace TestCenter.Models
{
    public class Question
    {
        public Guid Id { get; set; }
        public string Value { get; set; }
        public List<string> Categories { get; set; }

        public Question(Guid id, string value = "")
        {
            this.Id = id;
            this.Value = value;
        }
    }
}
