using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BinaryTree.Models
{
    public class DataContext : DbContext
    {
        public  DataContext()
        {

        }

        public DbSet<Person> Persons { get; set; }
    }
}