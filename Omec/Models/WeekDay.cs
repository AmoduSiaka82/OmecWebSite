using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Models
{
    public class WeekDay
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string DayName { get; set; }
       
        [DisplayFormat(DataFormatString = "{0:HH:mm:ss}")]
        public DateTime StartTime { get; set; }

        [DisplayFormat(DataFormatString = "{0:HH:mm:ss}")]
        public DateTime EndTime { get; set; }
    }
}
