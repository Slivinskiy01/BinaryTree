using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using BinaryTree.Models;

namespace BinaryTree.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        private DataContext db = new DataContext();

        // GET: People
        public async Task<ActionResult> Index()
        {
            return View(await db.Persons.ToListAsync());
        }

        public ActionResult ApiInfo()
        {
            return View();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}