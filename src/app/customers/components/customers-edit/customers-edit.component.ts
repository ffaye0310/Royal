import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Entry } from 'src/app/core/interfaces/entry';
import { Customer } from 'src/app/core/models/customer.model';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {

  customer$ !:  Observable<any>
  customerForm !: FormGroup
  customer !: Customer
  file !: File
  message !: string 
  newImg !: File

  constructor(private fb : FormBuilder, 
    private cs : CustomersService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.customerForm =  this.fb.group({
      name : [[Validators.required]],
      logo : [null]
    })

    const id = parseInt(location.href.split("/")[5])

    this.customer = new Customer()

    this.customer$ = this.cs.getCustomerById(id).pipe(
      map( data => data.data)
    )
    this.customer$.subscribe(
      x => {
        // console.log(x)
        this.customer.name = x.attributes.name
        this.customer.logo = x.attributes.logo
        this.customerForm.setValue({"name" : x.attributes.name,"logo":null})
      }
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
  onSubmit = () => {
    
    const body  = new FormData()
    const id = parseInt(location.href.split("/")[5])

    body.append("data", JSON.stringify({ name : this.customerForm.value.name }))

    if (this.file) {
      body.append("files.logo", this.file, this.file.name)

    }else{
      body.append("files.logo", this.file)

    }
    
    this.cs.update(id,body).subscribe(
      result => {
        if (result) {
          this.message = "success"
          setTimeout(() => {
            this.router.navigateByUrl("/customers")
          }, 3000);

        }
        else {
          this.message = "error"
        }
      }
    )
  }

}
