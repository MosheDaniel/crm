import { Component, Input, OnInit } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit{
  customers: Customer[]=[];
  @Input() id!: string
  customer: Customer= {firstName: "", lastName: "", email: "", phone: ""}

      constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
this.cs.getCustomerById(this.id).subscribe({
      next: (customerData: Customer) => (this.customer = customerData)
    });
  }

showCardCustomer() {
    this.cs
      .updateCustomer(this.customer)
      .then(() => this.activeModal.close())
      .catch((err) => console.log(err));
  }

  
}
