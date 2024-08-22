import { Component, OnInit ,NgModule} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {
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

          this.router.navigate(['/register']);

  }

  onSubmit(): void {
    const { username, password } = this.form;
    console.log(username);
    console.log(password);
    this.authService.login(username, password).subscribe(
      data => {
        console.log(data);
        if(username=="admin"){
          this.router.navigate(['/add-employee']);
        }else{
          this.router.navigate(['/home']);
        }
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
