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
    return this.http.get('https://backbd.herokuapp.com/clientes/mayorTicketsCreados');
  }

  getclientesTodosLosPlanes(){
    return this.http.get('https://backbd.herokuapp.com/clientes/clientesTodosLosPlanes');
  }

  
  getclientesMasCuatroTickets(){
    return this.http.get('https://backbd.herokuapp.com/clientes/clientesMasCuatroTickets');
  }

  getsinContratarPackFull(){
    return this.http.get('https://backbd.herokuapp.com/clientes/sinContratarPackFull');
  }

  getsoloPackFull(){
    return this.http.get('https://backbd.herokuapp.com/clientes/soloPackFull');
  }

  getmasDeCuota(){
    return this.http.get('https://backbd.herokuapp.com/clientes/masDeCuota');
  }

  getmenosDeCuota(){
    return this.http.get('https://backbd.herokuapp.com/clientes/menosDeCuota');
  }

  getbuscarClienteNombreApellido(){
    return this.http.get('https://backbd.herokuapp.com/clientes/buscarClienteNombreApellido');
  }

  //EMPLEADO

  getmayorTicketsAtendidos(){
    return this.http.get('https://backbd.herokuapp.com/empleados/mayorTicketsAtendidos');
  }

  getempleadosMasCuatroTickets(){
    return this.http.get('https://backbd.herokuapp.com/empleados/empleadosMasCuatroTickets');
  }

  getsectorVentas(){
    return this.http.get('https://backbd.herokuapp.com/empleados/sectorVentas');
  }

  getempleadoMasCercano(){
    return this.http.get('https://backbd.herokuapp.com/empleados/empleadoMasCercano');
  }

  //PLANES

  getconOnceCanales(){
    return this.http.get('https://backbd.herokuapp.com/planes/conOnceCanales');
  }

  gettieneCanales(){
    return this.http.get('https://backbd.herokuapp.com/planes/tieneCanales');
  }

  //TICKET

  getticketSinResolver(){
    return this.http.get('https://backbd.herokuapp.com/tickets/ticketSinResolver');
  }

  getclienteYEmpleado(){
    return this.http.get('https://backbd.herokuapp.com/tickets/clienteYEmpleado');
  }

  getticketsNoResueltos(){
    return this.http.get('https://backbd.herokuapp.com/tickets/ticketsNoResueltos');
  }

  getatencionOficinas(){
    return this.http.get('https://backbd.herokuapp.com/tickets/atencionOficinas');
  }

  getticketsPorOficina(){
    return this.http.get('https://backbd.herokuapp.com/tickets/ticketsPorOficina');
  }

  getbuscarNombre(){
    return this.http.get('https://backbd.herokuapp.com/tickets/buscarNombre');
  }

  getbuscarDesperfecto(){
    return this.http.get('https://backbd.herokuapp.com/tickets/buscarDesperfecto');
  }

  getbuscarResueltosUnPaso(){
    return this.http.get('https://backbd.herokuapp.com/tickets/buscarResueltosUnPaso');
  }

  getbuscarBarrio(){
    return this.http.get('https://backbd.herokuapp.com/tickets/buscarBarrio');
  }

  //LOCALIDAD

  getBuscarLocalidad(){
    return this.http.get('https://backbd.herokuapp.com/localidades/buscarLocalidad');
  }

  getbuscarLocalidadCerca(){
    return this.http.get('https://backbd.herokuapp.com/localidades/buscarLocalidadCerca');
  }

  buscarLocalidadPoligono(){
    return this.http.get('https://backbd.herokuapp.com/localidades/buscarLocalidadPoligono');
  }

}
