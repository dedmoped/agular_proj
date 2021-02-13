import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit   {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService :AuthService,
  private toastr: ToastrService
  ) { }
  
  ngOnInit() {
  this.loginForm = this.formBuilder.group({
  email: ['', [Validators.required,Validators.email]],
  password: ['', Validators.required]
  });
  
  }
  
  // for accessing to form fields
  get fval() { return this.loginForm.controls; }
  
  onFormSubmit() {
  this.submitted = true;
  if (this.loginForm.invalid) {
  return;
  }
  
  this.loading = true;
  this.authenticationService.login(this.fval.email.value, this.fval.password.value)
  .subscribe(
  data => {
  this.router.navigate(['/']);
  },
  error => {
  this.toastr.error(error.error.message, 'Error');
  this.loading = false;
  });
}
}
