// Write your solution in this file!
const employee = {
    name :"Sam",
    address: ""  
  }

function updateEmployeeWithKeyAndValue(employee, key, value) {
      return {
          ...employee, 
          [key]:value   
      }
      
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
      employee.name= "Sam",
      employee.streetAddress="12 Broadway";
      return employee;
     }  
function deleteFromEmployeeByKey(employee, key){
  const newEmployee ={...employee, key};
  delete newEmployee.name;
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(newEmployee,key){
    newEmployee.name="Sam";
    delete newEmployee.name;
    return newEmployee;
}