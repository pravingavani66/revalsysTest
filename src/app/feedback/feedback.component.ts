import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedback!: FormGroup;
  isSubmitted  =  false;
  feedbackData:any ={};
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedback  =  this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z]*$")]],
      mobNo: ['',[Validators.required,Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email,,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      comment: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(200)]]
  });
   
  }
  get formControls() {
    return this.feedback.controls; 
   }
   submit(){
     localStorage.setItem('data',JSON.stringify(this.feedback.value));
     this.isSubmitted = true;
     if(this.feedback.invalid){
       return;
     }
     
   }
}
