using CRUDAPIWithoutDatabase.Models;
namespace CRUDAPIWithoutDatabase.Repositories
{
    public class EmployeeRepocs
    {
        //create EmployeeDB List
        public static List<EmployeeDB> employees = null;

        public EmployeeRepocs()
        {
            employees = new List<EmployeeDB>()
            {
                new EmployeeDB { EmployeeId = 1, Name = "John", Email = "john@hyland.com", Department = "CPE", MobileNumber = 7894561230 },
                new EmployeeDB { EmployeeId = 2, Name = "Kaushik", Email = "kaushik@hyland.com", Department = "RDES", MobileNumber = 8894591230 },
                new EmployeeDB { EmployeeId = 3, Name = "Raj", Email = "raj@hyland.com", Department = "RDES", MobileNumber = 6664561230 }
            };
        }

            //create GetEmployees method
            public List<EmployeeDB> GetEmployees()
            {
                return employees.ToList();
            }

            //create GetEmployee method
            public EmployeeDB GetEmployee(int id)
            {
                return employees.FirstOrDefault(e => e.EmployeeId == id);
            }

        //create AddEmployee method
        public EmployeeDB AddEmployee(EmployeeDB employee)
        {
            employees.Add(employee);
            return employee;
        }

        //create UpdateEmployee method
        public EmployeeDB UpdateEmployee(EmployeeDB employee)
        {
            EmployeeDB existingEmployee = employees.FirstOrDefault(e => e.EmployeeId == employee.EmployeeId);
            existingEmployee.Name = employee.Name;
            existingEmployee.Email = employee.Email;
            existingEmployee.Department = employee.Department;
            existingEmployee.MobileNumber = employee.MobileNumber;
            return existingEmployee;
        }

        //create DeleteEmployee method
        public EmployeeDB DeleteEmployee(int id)
        {
            EmployeeDB existingEmployee = employees.FirstOrDefault(e => e.EmployeeId == id);
            employees.Remove(existingEmployee);
            return existingEmployee;
        }



    }
}
