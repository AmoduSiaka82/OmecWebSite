using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Models
{
    public class DrPeriod
    {
        [Key]
        public int DrPeriodId { get; set; }
        [Display(Name = "Start Time")]
        [DisplayFormat(DataFormatString = "{0:HH:mm}")]
        public DateTime StartTime{ get; set; }
        [Display(Name = "Start Time")]
        [DisplayFormat(DataFormatString = "{0:HH:mm}")]
        public DateTime EndTime { get; set; }
        [Display(Name = "Date")]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Date { get; set; }
        public int Id { get; set; }
        public Doctorprofile Drp { get; set; }
    }
}
