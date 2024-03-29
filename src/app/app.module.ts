import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './register/register.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OrderComponent } from './order/order.component';
import { OrderEquComponent } from './order-equ/order-equ.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { UpdateOrderComponent } from './update-order/update-order.component';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './admin/admin.component';
import { ApprovalComponent } from './approval/approval.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IssuedComponent } from './issued/issued.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CancelComponent } from './cancel/cancel.component';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    OrderEquComponent,
    UpdateOrderComponent,
    AdminComponent,
    ApprovalComponent,
    IssuedComponent,
    CancelComponent,


 
  
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatIconModule,
    ModalModule.forRoot(),
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
