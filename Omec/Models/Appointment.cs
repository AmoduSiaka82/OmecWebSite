using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Models
{
    public class Appointment
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(500)")]
        public string Name { get; set; }
        [Display(Name = "Hospital No")]
        [Column(TypeName = "nvarchar(50)")]
        public string HospitalNo { get; set; }
        [Display(Name = "Create Date")]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Date { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime AppointDate { get; set; }
        [Display(Name = "Name Of Dr")]
        [Column(TypeName = "nvarchar(500)")]
        public string DRName { get; set; }
     
        [Display(Name = "Appointment Time")]
        [DisplayFormat(DataFormatString = "{0:HH:mm}")]
        public DateTime AppointTime { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Status { get; set; }
        [Column(TypeName = "nvarchar(2000)")]
        public string Message { get; set; }
    }
}
