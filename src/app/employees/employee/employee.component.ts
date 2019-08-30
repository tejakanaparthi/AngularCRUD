import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit() {
    //this.employeeService.getData();

    this.resetForm();
  }

  onSubmit(employeeForm:NgForm){
    if(employeeForm.value.$key == null){
     
      this.employeeService.insertEmployee(employeeForm.value);
    }
   
    else{
      this.employeeService.updateEmployee(employeeForm.value);
    }
      this.resetForm(employeeForm);
  }

  resetForm(employeeForm?:NgForm){
    if(employeeForm != null)
      employeeForm.reset();

    
   
   this.employeeService.selectedEmployee={
    $key:null,
     name:'',
     position:'',
     office:'',
     salary:0
   }
  }

}
