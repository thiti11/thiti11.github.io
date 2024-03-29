import { Component, OnInit, TemplateRef } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.sercice';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  currentUser: any;
  //currentOrder: any;
  item: any;
  No_ID:any;
  itemmm:any;
  itemmm1:any;
  itemmm2:any;
  modalRef?: BsModalRef;
 
   
  formoorderequ: any ={
    no:null,
    list:null,
    Quantity:null,
    Remark:null,
    Request_By:null
  }

  

  constructor(    private formBuilder:FormBuilder,
    private  StorageService: StorageService,
    private ApiService:ApiService,
    private Route:Router,
    private toastr:ToastrService,
    private router:ActivatedRoute,
    private modalService: BsModalService) { 
      this.formoorderequ = this.formBuilder.group({
        list: ['', Validators.required],
        Quantity: ['', Validators.required],
        Remark: ['', Validators.required],
        Request_By: this.currentUser = this.StorageService.getUser().Firstname, 
    }); }

  ngOnInit(): void {
    this.currentUser = this.StorageService.getUser();
   
    
    this.Get_itemm() ;
   // this.Get_Updateorder();
  
    this.Get_Orderid();
 

   
  }

  logout(): void {
    this.StorageService.signOut();
    this.Route.navigate(['/login']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  Get_Orderid(){
    this.No_ID = this.router.snapshot.params['No_ID'];
    console.log(this.No_ID);
    
    let data = {
      mod: 'Get_Orderid',  
      Employee_ID:this.StorageService.getUser().Employee_ID,
      No_ID : this.router.snapshot.params['No_ID'],
      
    };
    this.ApiService.read(data).subscribe(resposne => {
     // console.log(resposne);
     this.itemmm = resposne[0]['List'];
     this.itemmm1 = resposne[0]['Quantity'];
     this.itemmm2= resposne[0]['Remark'];
    // console.log(this.itemmm);
        
    });
    
 
  }

  Get_Updateorder(){
    console.log(this.formoorderequ.value)
    
    let data = {
      mod: 'Get_Updateorder', 
      data:this.router.snapshot.params['No_ID'],
      list: this.formoorderequ.value.list,
      Quantity: this.formoorderequ.value.Quantity,
      Remark: this.formoorderequ.value.Remark,
      Request_By: this.currentUser = this.StorageService.getUser().Firstname, 
    };
   if(this.formoorderequ.valid){
    this.ApiService.read(data).subscribe(data =>{
      console.log(data);
   
      this.toastr.info('แก้ไขรายการสำเร็จ');
      this.Route.navigate(['/order']);
   
    
   
        
    });
  }else{
  //  console.log(this.currentUser);
    this.toastr.error('แก้ไขรายการไม่สำเร็จ');
  }
  
  }
 
    Get_itemm(){
 
      let data = {
        mod: 'Get_itemm',  
      };
      this.ApiService.read(data).subscribe((resposne: any) => {
        console.log(resposne);
       this.item = resposne
     //  this.List = resposne[this.List]['List'];
      
         
          
      });
    }

}
