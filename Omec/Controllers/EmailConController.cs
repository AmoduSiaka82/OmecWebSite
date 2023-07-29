using Omec.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Omec.Data;

namespace Omec.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailConController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public EmailConController(IConfiguration configuration, ApplicationDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            var dr = (from s in _context.EmailCon select s).ToList();

            return new JsonResult(dr);
        }
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var dr = (from s in _context.EmailCon where (s.Id == id) select s).ToList();

            return new JsonResult(dr);
        }
        [HttpPost]

        public JsonResult Post(EmailCon cn)
        {

            _context.Add(cn);
            int i = _context.SaveChanges();
            if (i > 0)
            {
                return new JsonResult("Record Added Successfully");
            }
            else { return new JsonResult("Record Add Failed"); }
        }
        private bool EmailConExists(int id)
        {
            return _context.EmailCon.Any(e => e.Id == id);
        }
        [HttpPut("{id}")]
        public JsonResult Put(int id, EmailCon cn)
        {
            cn.Id = id;
            int i = 0;
            _context.Update(cn);
            try
            {
                i = _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmailConExists(id))
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
            var dr = _context.EmailCon.Find(id);
            _context.EmailCon.Remove(dr);
            try
            {
                i = _context.SaveChanges();
            }
            catch
            {
                if (!EmailConExists(id))
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
