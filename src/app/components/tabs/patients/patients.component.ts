import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IPatient } from '../../../interfaces/patient';
import { PatientsService } from '../../../services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  private _patients: IPatient[] = [];

  displayedColumns: string[] = ['identification', 'name', 'registerDate', 'id'];
  dataSource = new MatTableDataSource<IPatient>(this._patients);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private patientsService: PatientsService,
  ) { }

  ngOnInit(): void {
    this._patients = this.patientsService.getPatients();
    this.dataSource = new MatTableDataSource<IPatient>(this._patients);
    this.dataSource.paginator = this.paginator;
    this.paginator.pageIndex = 0;
  }

  public get patients(): IPatient[] {
    return this._patients;
  }

}
