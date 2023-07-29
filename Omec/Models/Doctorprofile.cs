using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Models
{
    public class Doctorprofile
    {
        [Key]
        public int Id { get; set; }
        [Display(Name = "Name Of Dr")]
        [Column(TypeName = "nvarchar(500)")]
        public string DRName { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        [Required]
        [Phone]
        [Display(Name = "Phone No")]
        public string PhoneNumber { get; set; }
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }
        [Column(TypeName = "nvarchar(2000)")]
        [Display(Name = "About the Dr")]
        public string AboutDr { get; set; }
        
        [Display(Name = "Create Date")]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Date { get; set; }
     
    }
}
