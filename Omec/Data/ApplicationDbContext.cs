using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Omec.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Omec.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        public DbSet<Omec.Models.Doctorprofile> Doctorprofile { get; set; }
        public DbSet<Omec.Models.Appointment> Appointment { get; set; }
        public DbSet<Omec.Models.Blog> Blog { get; set; }
        public DbSet<Omec.Models.Contact> Contact { get; set; }
        public DbSet<Omec.Models.EmailCon> EmailCon { get; set; }
        public DbSet<Omec.Models.DrPeriod> DrPeriod { get; set; }
        public DbSet<Omec.Models.Reviews> Reviews { get; set; }
        public DbSet<Omec.Models.UserAccount> UserAccount { get; set; }
        public DbSet<Omec.Models.WeekDay> WeekDay { get; set; }
    }
}
