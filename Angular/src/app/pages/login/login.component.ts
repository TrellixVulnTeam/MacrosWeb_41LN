import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LegalizacionService } from 'src/app/services/legalizacion.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorText: any;

  constructor(
    private _legalizacionService: LegalizacionService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        user: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }

  login() {
    let userName = this.form.controls['user'].value;
    let password = this.form.controls['password'].value;

    AppComponent.displayLoading = true;
    this._legalizacionService.login(userName, password)
      .subscribe(
        (responde: any) => {
          console.log('responde', responde);
          if (responde.code == '0') {
            localStorage.setItem('token', responde.data);
            var decoded: any = jwt_decode(responde.data);
            localStorage.setItem('role', decoded.role);
            this._router.navigate(['/dashboard']);
          } else {
            this.errorText = "Credenciales incorrectas";
          }
          AppComponent.displayLoading = false;
        }, error => {
          console.log('error', error);
          this.errorText = "Credenciales incorrectas";
          AppComponent.displayLoading = false;
        }
      )
  }

}
