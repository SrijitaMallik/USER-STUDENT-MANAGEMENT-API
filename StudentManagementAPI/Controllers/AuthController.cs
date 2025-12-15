using Microsoft.AspNetCore.Mvc;
using StudentManagementAPI.Data;
using StudentManagementAPI.Models;

namespace StudentManagementAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ✅ REGISTER (NO AUTHORIZE)
        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(new { message = "User registered successfully" });
        }

        // ✅ LOGIN (NO AUTHORIZE)
        [HttpPost("login")]
        public IActionResult Login(User user)
        {
            var existingUser = _context.Users
                .FirstOrDefault(u => u.Username == user.Username && u.Password == user.Password);

            if (existingUser == null)
                return Unauthorized(new { message = "Invalid credentials" });

            return Ok(new { token = "dummy-token" });
        }
    }
}
