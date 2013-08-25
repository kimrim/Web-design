using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using _02.StudentsServices.Models;
using _02.StudentsServices.Repository;

namespace _02.StudentsServices.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StudentsController : ApiController
    {
        private StudentRepository repository { get; set; }
        public StudentsController()
        {
            this.repository = new StudentRepository();
            this.repository.FillInData();
        }     
        
        public IEnumerable<Student> GetAll()
        {
            var students = this.repository.All();

            var models =
                from stud in students
                select new Student()
                {
                    Id = stud.Id,
                    FirstName = stud.FirstName,
                    LastName = stud.LastName,
                    Grade = stud.Grade,
                    Age = stud.Age,
                    Marks = stud.Marks != null ? stud.Marks : new List<Mark>()
                };

            return models;           
        }

        [ActionName("marks")]
        public IEnumerable<Mark> GetMarksById(int id)
        {
            if (id == null || id == 0)
            {
                throw new ArgumentNullException("The id of a student should be a valid positive integer");
            }
            var student = this.repository.Get(id);
            if (student.Marks == null)
            {
                return new List<Mark>();
            }
            return student.Marks;
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}