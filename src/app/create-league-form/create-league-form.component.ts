import { Component } from '@angular/core';

@Component({
  selector: 'app-create-league-form',
  templateUrl: './create-league-form.component.html',
  styleUrls: ['./create-league-form.component.css']
})
    
export class CreateLeagueFormComponent {
  
  public teamRows = new Array(10);

  constructor() {
                    
  }
  
  public amendTeamRows($event){
    console.log("shabba console : " + $event);
    
    if($event < this.teamRows.length){
      this.teamRows.pop();
    }
    else{
      this.teamRows.push(1);
    }    
    
  }
  

}
