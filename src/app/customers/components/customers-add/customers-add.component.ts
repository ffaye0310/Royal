import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/models/customer.model';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-customers-add',
  templateUrl: './customers-add.component.html',
  styleUrls: ['./customers-add.component.css']
})
export class CustomersAddComponent implements OnInit {

  customerForm !: FormGroup
  customer !: Customer
  file !: File
  message !: string 
  constructor(private fb : FormBuilder, 
    private cs : CustomersService,
    private router : Router
  ) { }

  ngOnInit(): void {
    // this.customer = new Customer
    this.customerForm =  this.fb.group({
      name : [null,[Validators.required]],
      // code : [null,[Validators.maxLength(3)]],
      logo : [null]
    })

    this.customerForm.valueChanges.subscribe(
      () => console.log(this.customerForm) 
    )

  }

 
  onFileChange = (e : any) => {

    if (e.target.files[0]) {
      this.file = e.target.files[0]
    }
  }
  // getFile = (event : any ) => {
  //   this.file = event.target.file[0]
  // }
  onSubmit = () =>{
    
    const body  = new FormData()
    body.append("data", JSON.stringify({ name : this.customerForm.value.name }))
    body.append("files.logo", this.file, this.file.name)
    
    this.cs.addCustomer(body).subscribe(
      result => {
        if (result) {
          this.message = "success"
          this.router.navigateByUrl("/customers")

        }
        else {
          this.message = "error"
        }
      }
    )
  }
}
