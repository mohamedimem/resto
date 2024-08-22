import { Component, OnInit ,NgModule} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponenet implements OnInit {
  registrationForm!: FormGroup; // Use the definite assignment assertion
  submitted = false;
  isLoggedIn=false;
  errorMessage = '';
  isLoginFailed=true;
  form: any = {
    username: null,
    password: null
  };


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private tokenStorage :TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  goToRegister(): void {

          this.router.navigate(['/login']);

  }

  onSubmit(): void {
    const { username, password } = this.form;
    console.log(username);
    console.log(password);
    this.authService.register(username, password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login']);
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        // if(err.error.message=="True"){
        //   this.router.navigate(['/add-employee']);
        // }
        this.isLoginFailed = true;
      }
    );
  }

}
