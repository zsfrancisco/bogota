import { Injectable } from '@angular/core';
import { IPatient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private _patients: IPatient[] = [
    { id: '1', identification: '11', name: 'Francisco', surname: 'Zambrano', registerDate: '13 / 07 / 2020' },
    { id: '2', identification: '22', name: 'Javier', surname: 'Santacruz', registerDate: '13 / 07 / 2020' },
    { id: '3', identification: '33', name: 'Jennifer', surname: 'Ruiz', registerDate: '13 / 07 / 2020' },
    { id: '4', identification: '44', name: 'Pahola', surname: 'Erazo', registerDate: '13 / 07 / 2020' },
    { id: '5', identification: '55', name: 'Carlos', surname: 'Coral', registerDate: '13 / 07 / 2020' },
    { id: '6', identification: '66', name: 'Mario', surname: 'Cabrera', registerDate: '13 / 07 / 2020' },
    { id: '7', identification: '77', name: 'Claudia', surname: 'Santacruz', registerDate: '13 / 07 / 2020' },
    { id: '8', identification: '88', name: 'Lorena', surname: 'Muñoz', registerDate: '13 / 07 / 2020' },
  ]

  getPatients(): IPatient[] {
    return this._patients;
  }

}
