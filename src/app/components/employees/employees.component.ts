import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
employee: Employee[]=[]


  constructor(private es: EmployeesService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.es.getEmployees().subscribe({
      next: (employeesData: Employee[]) => (this.employee = employeesData),
    }); 
  }

}