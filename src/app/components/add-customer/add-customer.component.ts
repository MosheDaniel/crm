import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
customer : Customer = {firstName: "", lastName: "", email: "", phone: ""}
  constructor(private bs: CustomersService) { }

  ngOnInit(): void {
  }
addNewCustomer() {
    this.bs
      .addCustomer(this.customer)
      .then(() => {
        console.log('Book was added');
        this.reset();
      })
      .catch((err) => console.log(err));
  }


  reset(){
    this.customer = {firstName: "", lastName: "", email: "", phone: ""}
  }

}

