import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customers';
import { CustomersService } from 'src/app/services/customers.service';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit{
  customers: Customer[]=[];

  constructor(private cs: CustomersService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.cs.getCustomers().subscribe({
      next: (customersData: Customer[]) => (this.customers = customersData),
    }); 
   }

   deleteCustomer(customer: Customer) {
  if(confirm("Are you sure?")){
    this.cs
      .deleteCustomer(customer)
      .then(() => console.log('Customer was deleted'))
      .catch((err) => console.log(err));
  }
}

updateCustomer(customer: Customer){
let modalRef = this.modal.open(EditCustomerComponent, {
  size: "lg",
  centered: true,
  windowClass: "dark-modal"
})
modalRef.componentInstance.id  = customer.id
}
}
