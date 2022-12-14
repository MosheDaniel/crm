import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit{
  @Input() id!: string
  customer: Customer= {firstName: "", lastName: "", email: "", phone: ""}

      constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
this.cs.getCustomerById(this.id).subscribe({
      next: (customerData: Customer) => (this.customer = customerData)
    });
  }

  // updateCustomer() {
  //   this.cs
  //     .cardCustomer(this.customer)
  //     .then(() => this.activeModal.close())
  //     .catch((err) => console.log(err));
  // }

}
