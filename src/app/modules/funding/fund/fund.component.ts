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
    amount: new FormControl(null, [Validators.max(200), Validators.min(1), Validators.required])
  })

  async catchFundClick(event:number):Promise<void>{
    await this.firestoreService.CreateFundTimer(event)
  }


}
