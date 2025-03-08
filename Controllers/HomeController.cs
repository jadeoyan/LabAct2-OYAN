using Microsoft.AspNetCore.Mvc;

namespace LabAct2_OYAN.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
