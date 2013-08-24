using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _02.StudentsServices.Models;

namespace _02.StudentsServices.Repository
{
    public class StudentRepository
    {
        public ICollection<Student> StudentsDB { get; set; }

        public StudentRepository()
        {
            this.StudentsDB = new List<Student>();
            
        }

        public void Add(params Student[] newStudents)
        {
            foreach (var stud in newStudents)
            {
                this.StudentsDB.Add(stud);
            }
        }

        public void FillInData()
        {
            this.Add(
                new Student("Gosho", "Petrov", 6, 12, new List<Mark>() { new Mark("Math", 4), new Mark("Biology", 6) }),
                new Student("Pesho", "Goshev", 8, 15, new List<Mark>() { new Mark("C#", 5), new Mark("ASP.NET", 3) }),
                new Student("Kumur", "Shishev", 11, 18, new List<Mark>() { new Mark("Geography", 5), new Mark("Ziganology", 5) })
                );
        }

        public IEnumerable<Student> All()
        {
            return this.StudentsDB;
        }
    }
}