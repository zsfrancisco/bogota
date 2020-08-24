import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { IPatient } from '../../interfaces/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  private _patienets: IPatient[] = [];

  // pagination
  page: number = 1;
  pageSize: number = 5;
  collectionSize: number;

  constructor(
    private patientsService: PatientsService,
  ) { }

  ngOnInit(): void {
    this._patienets = this.patientsService.getPatients();
    this.collectionSize = this._patienets.length;
  }

  public get patients(): IPatient[] {
    return this._patienets
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
