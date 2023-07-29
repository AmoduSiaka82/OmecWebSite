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
using Microsoft.EntityFrameworkCore;
using Omec.Data;

namespace Omec.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorprofileController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;
        public DoctorprofileController(IConfiguration configuration, ApplicationDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            var dr = (from s in _context.Doctorprofile where (s.AboutDr != "") select s).ToList();

            return new JsonResult(dr);
        }
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var dr = (from s in _context.Doctorprofile where (s.Id == id) select s).ToList();

            return new JsonResult(dr);
        }
        [HttpPost]

        public JsonResult Post(Doctorprofile dr)
        {
            dr.Date = DateTime.UtcNow.AddHours(1).Date;
            _context.Add(dr);
            int i = _context.SaveChanges();
            if (i > 0)
            {
                return new JsonResult("Record Added Successfully");
            }
            else { return new JsonResult("Record Add Failed"); }
        }
        private bool DoctorprofileExists(int id)
        {
            return _context.Doctorprofile.Any(e => e.Id == id);
        }
        [HttpPut("{id}")]
        public JsonResult Put(int id, Doctorprofile dr)
        {
            dr.Id = id;
            int i = 0;
            _context.Update(dr);
            try
            {
                i = _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoctorprofileExists(id))
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
            var dr = _context.Doctorprofile.Find(id);
            _context.Doctorprofile.Remove(dr);
            try
            {
                i = _context.SaveChanges();
            }
            catch
            {
                if (!DoctorprofileExists(id))
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
    }
}