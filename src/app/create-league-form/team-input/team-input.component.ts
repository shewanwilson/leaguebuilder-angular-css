import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team-input',
  templateUrl: './team-input.component.html',
  styleUrls: ['./team-input.component.css']
})

export class TeamInputComponent implements OnInit {

  public teamNumber: number;
  public noOfTeams: number;
  public lastTeamId: number;

  constructor() {
    //this.teamNumber = teamNumber;
  }

  private addInput(){

  }
  
  private addTeamIdNumber() {
    this.teamNumber++
  }

  ngOnInit(): void {
    //this.addTeamInputs();
  }

  

}