using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CRUDAPIWithoutDatabase.Models;
using CRUDAPIWithoutDatabase.Repositories;

namespace CRUDAPIWithoutDatabase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        //inject repository
        private readonly EmployeeRepocs _employeeRepository;

        public EmployeesController()
        {
            _employeeRepository = new EmployeeRepocs();
        }

        //create GetEmployees method
        [HttpGet]
        public IActionResult GetEmployees()
        {
            return Ok(_employeeRepository.GetEmployees());
        }
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetEmployee(int id)
        {
            return Ok(_employeeRepository.GetEmployee(id));
        }
        [HttpPost]
        public IActionResult AddEmployee([FromBody] EmployeeDB employee)
        {
            return Ok(_employeeRepository.AddEmployee(employee));
        }
        [HttpPut]
        public IActionResult UpdateEmployee([FromBody] EmployeeDB employee)
        {
            return Ok(_employeeRepository.UpdateEmployee(employee));
        }
        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
                return Ok(_employeeRepository.DeleteEmployee(id));
        }
    }
}
