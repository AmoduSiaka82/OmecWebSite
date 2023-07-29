using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Models
{
    public class Blog
    {
        [Key]
        public int Id { get; set; }
        [Display(Name = "Title")]
        [Column(TypeName = "nvarchar(500)")]
        public string BlogTitle { get; set; }
        [Display(Name = "Post")]
        [Column(TypeName = "nvarchar(2000)")]
        public string BlogPost { get; set; }

        [Display(Name = "Create Date")]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Date { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Status { get; set; }
    }
}
