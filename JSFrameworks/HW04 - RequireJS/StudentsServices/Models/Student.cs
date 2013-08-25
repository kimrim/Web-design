using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace _02.StudentsServices.Models
{
    public class Student
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("firstName")]
        public string FirstName { get; set; }

        [JsonProperty("lastName")]
        public string LastName { get; set; }

        [JsonProperty("grade")]
        public int Grade { get; set; }

        [JsonProperty("age")]
        public int Age { get; set; }

        [JsonProperty("marks")]
        public IEnumerable<Mark> Marks { get; set; }
    }

    public class StudentFullModel : Student
    {
        public StudentFullModel(int id, string firstName, string lastName, int grade, int age, IEnumerable<Mark> marks = null)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Grade = grade;
            this.Age = age;
            this.Marks = marks;
        }

        public StudentFullModel()
        {
        }

    }
      
}