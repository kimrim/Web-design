using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace _02.StudentsServices.Models
{
    public class Mark
    {
        [JsonProperty("subject")]
        public string Subject { get; set; }

        [JsonProperty("value")]
        public int Value { get; set; }

        public Mark(string subject, int value)
        {
            this.Subject = subject;
            this.Value = value;
        }

        public Mark()
        {
        }


    }
}