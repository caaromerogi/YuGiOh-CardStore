import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent {
  constructor(private firestoreService: FirestoreService, private router:Router){}
  fundForm:FormGroup = new FormGroup({
    amount: new FormControl(null, [Validators.max(200), Validators.min(1)])
  })

  async catchFundClick(event:number):Promise<void>{
    await this.firestoreService.CreateFundTimer(event)
    // await this.firestoreService.fundCustomerAccount(event).then(
    //   data=>{
    //     Swal.fire({
    //       customClass:{
    //       },
    //       title:'successful transaction!',
    //       icon:'success',
    //       background: '#222222',
    //       showConfirmButton:false,
    //       timer:2000
    //     })
    //     this.router.navigateByUrl('/cards')
    //   }
    // );
  }


}
