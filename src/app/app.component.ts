import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from './data.service';
// import { Pet } from "./Pet.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


constructor (private dataService: DataService){}



ngOnInit(){
  this.dataService.getData().subscribe((res)=>{
    console.log(res);
  })
}








  // profileFormGrp = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // })

  // onSubmit(){
  //   console.log(this.profileFormGrp.value)
  // }

// :::::::::::::::::::::::::::::::::::::

  // nameFormctrl = new FormControl('');
  
  // update (){
  //   this.nameFormctrl.setValue('Mohamed Sarr')
  // } 
// :::::::::::::::::::::::::::::::::::::

  // title = 'angular-videos-series';
  // species=["fish","cat","dog"];
  // model = new Pet(1,"Goldie",this.species[0]);
  // submited=false;

  // onSubmit(){
  //   this.submited = true;
  // }
}
