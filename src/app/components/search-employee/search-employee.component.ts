import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
employee: Employee[]=[]
firstName: string=""
lastName: string=""
email: string=""
phone: string=""

  constructor(private employeesService: EmployeesService) { }


  ngOnInit(): void {
        this.employeesService.getEmployees().subscribe({
      next: (employees: Employee[])=>
      {this.employee= employees}
       })
  }
}
