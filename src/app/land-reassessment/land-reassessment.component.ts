import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-land-reassessment',
  templateUrl: './land-reassessment.component.html',
  styleUrls: ['./land-reassessment.component.sass']
})
export class LandReassessmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('auth')) {
      this.router.navigate(['/login'])
    }
  }

}

export default LandReassessmentComponent
