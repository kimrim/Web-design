using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _02.StudentsServices.Models;

namespace _02.StudentsServices.Repository
{
    public class StudentRepository
    {
        public ICollection<StudentFullModel> StudentsDB { get; set; }

        public StudentRepository()
        {
            this.StudentsDB = new List<StudentFullModel>();
            
        }

        public void Add(params StudentFullModel[] newStudents)
        {
            foreach (var stud in newStudents)
            {
                this.StudentsDB.Add(stud);
            }
        }

        public void FillInData()
        {
            this.Add(
                new StudentFullModel(1, "Gosho", "Petrov", 6, 12, new List<Mark>() { new Mark("Math", 4), new Mark("Biology", 6) }),
                new StudentFullModel(2, "Pesho", "Goshev", 8, 15, new List<Mark>() { new Mark("C#", 5), new Mark("ASP.NET", 3) }),
                new StudentFullModel(3, "Kumur", "Shishev", 11, 18, new List<Mark>() { new Mark("Geography", 5), new Mark("Ziganology", 5) }),
                new StudentFullModel(4, "Bai", "Stavri", 12, 18)
                );
        }

        public IEnumerable<StudentFullModel> All()
        {
            return this.StudentsDB;
        }

        public Student Get(int id)
        {
            return this.StudentsDB.FirstOrDefault(s => s.Id == id);
        }
    }
}