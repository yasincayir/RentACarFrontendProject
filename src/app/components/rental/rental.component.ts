import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  currentRental:Rental;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail(){  
    this.rentalService.getRentalDetail().subscribe(response=>{
      this.rentals=response.data
    })
  }

  setCurrentRental(rental:Rental){
    this.currentRental=rental;
  }

  getCurrentRentalClass(rental:Rental){
    if (rental==this.currentRental) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
