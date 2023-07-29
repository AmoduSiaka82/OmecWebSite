using AutoMapper.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Omec.Data;
using Omec.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public ContactController(IConfiguration configuration, ApplicationDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            var dr = (from s in _context.Contact where (s.Name != "") select s).ToList();

            return new JsonResult(dr);
        }
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var dr = (from s in _context.Contact where (s.Id == id) select s).ToList();

            return new JsonResult(dr);
        }
        [HttpPost]

        public JsonResult Post(Contact cnt)
        {
            cnt.Date = DateTime.UtcNow.AddHours(1).Date;
            _context.Add(cnt);
            int i = _context.SaveChanges();
            if (i > 0)
            {
                return new JsonResult("Record Added Successfully");
            }
            else { return new JsonResult("Record Add Failed"); }
        }
        private bool ContactExists(int id)
        {
            return _context.Contact.Any(e => e.Id == id);
        }
        [HttpPut("{id}")]
        public JsonResult Put(int id, Contact cnt)
        {
            cnt.Id = id;
            int i = 0;
            _context.Update(cnt);
            try
            {
                i = _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
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
            var dr = _context.Contact.Find(id);
            _context.Contact.Remove(dr);
            try
            {
                i = _context.SaveChanges();
            }
            catch
            {
                if (!ContactExists(id))
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
