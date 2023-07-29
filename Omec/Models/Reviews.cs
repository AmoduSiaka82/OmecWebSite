using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Models
{
    public class Reviews
    {
        [Key]
        public int ReviewsId { get; set; }
        [Display(Name = "Reviews")]
        [Column(TypeName = "varchar(2000)")]
        public string Review { get; set; }
        [Display(Name = "Date")]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Date { get; set; }
        public int Id { get; set; }
        public Doctorprofile Drp { get; set; }
    }
}
