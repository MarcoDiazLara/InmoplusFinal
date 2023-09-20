import { Component } from '@angular/core';

@Component({
  selector: 'app-brokerpage1',
  templateUrl: './brokerpage1.component.html',
  styleUrls: ['./brokerpage1.component.css']
})
export class Brokerpage1Component {
  widgetsData = [
    {
      logoUrl: '../../assets/casa.png',
      numero: '5',
      informacion: 'Propiedades'
    },
    {
      logoUrl: '../../assets/ojo.png',
      numero: '100',
      informacion: 'Visitas'
    },
    {
      logoUrl: '../../assets/ventas.png',
      numero: '3',
      informacion: 'Ventas'
    },
    {
      logoUrl: '../../assets/dolar.png',
      numero: '4000000',
      informacion: 'Ingresos'
    },
  ]
}
