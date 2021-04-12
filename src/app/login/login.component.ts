import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserToken } from '../models/user-token.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
  });
  }

  get formControls() {
     return this.loginForm.controls; 
    }
    login(){
      this.isSubmitted = true;
      if(this.loginForm.invalid){
        return;
      }
      this.authService.login(this.loginForm.value);
      this.authService.storeUserData(this.loginForm.value);
        this.router.navigate(['/list'], { queryParams: { sortType: 'hightolow' } });
        this.changeDetectorRef.markForCheck();
      }
    }

