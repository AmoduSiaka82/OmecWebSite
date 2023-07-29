using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        [Display(Name = "Name Of Dr")]
        [Column(TypeName = "nvarchar(500)")]
        public string Name { get; set; }
        [Required]
        [Phone]
        [Display(Name = "Phone No")]
        public string PhoneNumber { get; set; }

        [Display(Name = "Email Address")]
        [Required]
        [EmailAddress]
        
        public string Email { get; set; }

        [Display(Name = "Create Date")]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Date { get; set; }
        
    }
}
