using Omec.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Omec.Data;

namespace Omec.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _evn;
        public BlogController(IConfiguration configuration, IWebHostEnvironment evn, ApplicationDbContext context)
        {
            _configuration = configuration;
            _evn = evn;
            _context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {
            var dr = (from s in _context.Blog where (s.BlogTitle != "") select s).ToList();

            return new JsonResult(dr);
        }
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var dr = (from s in _context.Blog where (s.Id == id) select s).ToList();

            return new JsonResult(dr);
        }
        [HttpPost]

        public JsonResult Post(Blog blg)
        {
            blg.Date = DateTime.UtcNow.AddHours(1).Date;
            _context.Add(blg);
            int i = _context.SaveChanges();
            if (i > 0)
            {
                return new JsonResult("Record Added Successfully");
            }
            else { return new JsonResult("Record Add Failed"); }
        }
        private bool BlogExists(int id)
        {
            return _context.Blog.Any(e => e.Id == id);
        }
        [HttpPut("{id}")]
        public JsonResult Put(int id, Blog blg)
        {
            blg.Id = id;
            int i = 0;
            _context.Update(blg);
            try
            {
                i = _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(id))
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
            var blg = _context.Blog.Find(id);
            int i = 0;

            if (blg.Status == "Waiting")
            {
                _context.Blog.Remove(blg);
            }
            try
            {
                i = _context.SaveChanges();
            }
            catch
            {
                if (!BlogExists(id))
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
    }
}
