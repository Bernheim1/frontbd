import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  //CLIENTE

  getmayorTicketsCreados(){
    return this.http.get('http://localhost:8080/clientes/mayorTicketsCreados');
  }

  getclientesTodosLosPlanes(){
    return this.http.get('http://localhost:8080/clientes/clientesTodosLosPlanes');
  }

  
  getclientesMasCuatroTickets(){
    return this.http.get('http://localhost:8080/clientes/clientesMasCuatroTickets');
  }

  getsinContratarPackFull(){
    return this.http.get('http://localhost:8080/clientes/sinContratarPackFull');
  }

  getsoloPackFull(){
    return this.http.get('http://localhost:8080/clientes/soloPackFull');
  }

  getmasDeCuota(){
    return this.http.get('http://localhost:8080/clientes/masDeCuota');
  }

  getmenosDeCuota(){
    return this.http.get('http://localhost:8080/clientes/menosDeCuota');
  }

  getbuscarClienteNombreApellido(){
    return this.http.get('http://localhost:8080/clientes/buscarClienteNombreApellido');
  }

  //EMPLEADO

  getmayorTicketsAtendidos(){
    return this.http.get('http://localhost:8080/empleados/mayorTicketsAtendidos');
  }

  getempleadosMasCuatroTickets(){
    return this.http.get('http://localhost:8080/empleados/empleadosMasCuatroTickets');
  }

  getsectorVentas(){
    return this.http.get('http://localhost:8080/empleados/sectorVentas');
  }

  getempleadoMasCercano(){
    return this.http.get('http://localhost:8080/empleados/empleadoMasCercano');
  }

  //PLANES

  getconOnceCanales(){
    return this.http.get('http://localhost:8080/planes/conOnceCanales');
  }

  gettieneCanales(){
    return this.http.get('http://localhost:8080/planes/tieneCanales');
  }

  //TICKET

  getticketSinResolver(){
    return this.http.get('http://localhost:8080/tickets/ticketSinResolver');
  }

  getclienteYEmpleado(){
    return this.http.get('http://localhost:8080/tickets/clienteYEmpleado');
  }

  getticketsNoResueltos(){
    return this.http.get('http://localhost:8080/tickets/ticketsNoResueltos');
  }

  getatencionOficinas(){
    return this.http.get('http://localhost:8080/tickets/atencionOficinas');
  }

  getticketsPorOficina(){
    return this.http.get('http://localhost:8080/tickets/ticketsPorOficina');
  }

  getbuscarNombre(){
    return this.http.get('http://localhost:8080/tickets/buscarNombre');
  }

  getbuscarDesperfecto(){
    return this.http.get('http://localhost:8080/tickets/buscarDesperfecto');
  }

  getbuscarResueltosUnPaso(){
    return this.http.get('http://localhost:8080/tickets/buscarResueltosUnPaso');
  }

  getbuscarBarrio(){
    return this.http.get('http://localhost:8080/tickets/buscarBarrio');
  }

  //LOCALIDAD

  getBuscarLocalidad(){
    return this.http.get('http://localhost:8080/localidades/buscarLocalidad');
  }

  getbuscarLocalidadCerca(){
    return this.http.get('http://localhost:8080/localidades/buscarLocalidadCerca');
  }

  buscarLocalidadPoligono(){
    return this.http.get('http://localhost:8080/localidades/buscarLocalidadPoligono');
  }

}
