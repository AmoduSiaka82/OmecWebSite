using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Omec.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Omec.Data;

namespace Omec.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _evn;
        public AppointmentController(IConfiguration configuration, IWebHostEnvironment evn, ApplicationDbContext context)
        {
            _configuration = configuration;
            _evn = evn;
            _context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            var dr = (from s in _context.Appointment where (s.Status == "Waiting") select s).ToList();

            return new JsonResult(dr);
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var dr = (from s in _context.Appointment where (s.Id == id) select s).ToList();

            return new JsonResult(dr);
        }
        [HttpPost]

        public JsonResult Post(Appointment apt)
        {
            apt.Date = DateTime.UtcNow.AddHours(1).Date;
            _context.Add(apt);
            int i = _context.SaveChanges();
            if (i > 0)
            {
                return new JsonResult("Record Added Successfully");
            }
            else { return new JsonResult("Record Add Failed"); }
        }


        [HttpPut("{id}")]
        public JsonResult Put(int id, Appointment apt)
        {
            apt.Id = id;
            int i = 0;

            _context.Update(apt);
            try
            {
                i = _context.SaveChanges();

            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentExists(id))
                {
                    return new JsonResult("No record found");
                }
                else
                {
                    throw;
                }
            }
            if (i > 0)
            {
                return new JsonResult("Record Updated Successfully");
            }
            else
            {
                return new JsonResult("Record Update Failed");
            }
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            int i = 0;
            var apt = _context.Appointment.Find(id);
            if (apt.Status == "Waiting")
            {
                _context.Appointment.Remove(apt);
            }
            try
            {
                i = _context.SaveChanges();
            }
            catch
            {
                if (!AppointmentExists(id))
                {
                    return new JsonResult("No record found");
                }
                else
                {
                    throw;
                }
            }
            if (i > 0)
            {
                return new JsonResult("Record Deleted Successfully");
            }
            else
            {
                return new JsonResult("Record Deletion Failed");
            }
        }
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var HttpRequest = Request.Form;
                var postedFile = HttpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _evn.ContentRootPath + "/Photos/" + filename;
                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("Ananemus Photos.png");
            }
        }
        [Route("GetAllDRNAme")]
        [HttpGet]
        public JsonResult GetAllDRNAme()
        {
            string query = @"Select DRName from Dorctorprofiles";
            DataTable dt = new DataTable();
            string sqlDataSourcees = _configuration.GetConnectionString("omecWebAppCon");
            SqlDataReader myReader;
            using (SqlConnection con = new SqlConnection(sqlDataSourcees))
            {
                con.Open();
                using (SqlCommand cm = new SqlCommand(query, con))
                {
                    myReader = cm.ExecuteReader();
                    dt.Load(myReader);
                    myReader.Close();
                    con.Close();
                }

            }
            return new JsonResult(dt);
        }
        private bool AppointmentExists(int id)
        {
            return _context.Appointment.Any(e => e.Id == id);
        }
    }
}