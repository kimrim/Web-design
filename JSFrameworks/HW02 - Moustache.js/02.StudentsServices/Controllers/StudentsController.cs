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
                
        // GET api/values
        public IEnumerable<Student> GetAll()
        {
            var students = this.repository.All();
            return students;           
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
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