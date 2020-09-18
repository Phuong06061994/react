using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace react_crud.Models
{
    public class TaskDto
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public int Status { get; set; }
    }
}
