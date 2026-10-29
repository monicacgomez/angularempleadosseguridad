import { Component, signal, computed, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {
  // Recuperamos el servicio, utilizando INJECT para que sea SINGLETON
  private _serviceSignal: ServiceSignal=
  inject(ServiceSignal);

  // Esta variable apunta al contador del service
  public contador = this._serviceSignal.contador;
  public doble = this._serviceSignal.doble;

  reiniciarContador(): void { 
    this._serviceSignal.reiniciarContador() 
  } 

  incrementarContador(): void { 
    this._serviceSignal.incrementarContador() 
  } 
} 

