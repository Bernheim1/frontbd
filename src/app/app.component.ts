import { Component } from '@angular/core';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendBD';

  clientes : any[] = []
  empleados : any[] = []
  planes : any[] = []
  tickets : any[] = []
  localidades : any

  mostrarClientes : boolean = false;
  mostrarEmpleados : boolean = false;
  mostrarPlanes : boolean = false;
  mostrarTickets : boolean = false;
  mostrarLocalidades : boolean = false;

  constructor(public api: ApiServiceService) { }

  ngOnInit(){
  }

  //CLIENTE

  public getmayorTicketsCreados(){
    this.api.getmayorTicketsCreados().subscribe((res : any) =>{
      this.clientes = res;
      this.mostrarClientes = true;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.clientes);
    });
  }

  public getclientesTodosLosPlanes(){
    this.api.getclientesTodosLosPlanes().subscribe((res : any) =>{
      this.clientes = res;
      this.mostrarClientes = true;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.clientes);
    });
  }

  public getclientesMasCuatroTickets(){
    this.api.getclientesMasCuatroTickets().subscribe((res : any) =>{
      this.clientes = res;
      this.mostrarClientes = true;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.clientes);
    });
  }

  public getsinContratarPackFull(){
    this.api.getsinContratarPackFull().subscribe((res : any) =>{
      this.clientes = res;
      this.mostrarClientes = true;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.clientes);
    });
  }

  public getsoloPackFull(){
    this.api.getsoloPackFull().subscribe((res : any) =>{
      this.clientes = res;
      this.mostrarClientes = true;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.clientes);
    });
  }

  public getmasDeCuota(){
    this.api.getmasDeCuota().subscribe((res : any) =>{
      this.clientes = res;
      this.mostrarClientes = true;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.clientes);
    });
  }

  public getmenosDeCuota(){
    this.api.getmenosDeCuota().subscribe((res : any) =>{
      this.clientes = res;
      this.mostrarClientes = true;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.clientes);
    });
  }

  public getbuscarClienteNombreApellido(){
    this.api.getbuscarClienteNombreApellido().subscribe((res : any) =>{
      this.clientes = res;
      this.mostrarClientes = true;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.clientes);
    });
  }

  //EMPLEADO

  public getmayorTicketsAtendidos(){
    this.api.getmayorTicketsAtendidos().subscribe((res : any) =>{
      this.empleados = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = true;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.empleados);
    });
  }

  public getempleadosMasCuatroTickets(){
    this.api.getempleadosMasCuatroTickets().subscribe((res : any) =>{
      this.empleados = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = true;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.empleados);
    });
  }

  public getsectorVentas(){
    this.api.getsectorVentas().subscribe((res : any) =>{
      this.empleados = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = true;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.empleados);
    });
  }

  public getempleadoMasCercano(){
    this.api.getempleadoMasCercano().subscribe((res : any) =>{
      this.empleados = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = true;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.empleados);
    });
  }

  //PLANES
  public getconOnceCanales(){
    this.api.getconOnceCanales().subscribe((res : any) =>{
      this.planes = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = true;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.planes);
    });
  }

  public gettieneCanales(){
    this.api.gettieneCanales().subscribe((res : any) =>{
      this.planes = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = true;
      this.mostrarTickets = false;
      this.mostrarLocalidades = false;
      console.log(this.planes);
    });
  }

  //TICKET

  public getticketSinResolver(){
    this.api.getticketSinResolver().subscribe((res : any) =>{
      this.tickets = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }

  public getclienteYEmpleado(){
    this.api.getclienteYEmpleado().subscribe((res : any) =>{
      this.tickets = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }

  public getticketsNoResueltos(){
    this.api.getticketsNoResueltos().subscribe((res : any) =>{
      this.tickets = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }

  public getatencionOficinas(){
    this.api.getatencionOficinas().subscribe((res : any) =>{
      this.tickets = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }

  public getticketsPorOficina(){
    this.api.getticketsPorOficina().subscribe((res : any) =>{
      this.tickets = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }

  public getbuscarNombre(){
    this.api.getbuscarNombre().subscribe((res : any) =>{
      this.tickets = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }

  public getbuscarDesperfecto(){
    this.api.getbuscarDesperfecto().subscribe((res : any) =>{
      this.tickets = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }

  public getbuscarResueltosUnPaso(){
    this.api.getbuscarResueltosUnPaso().subscribe((res : any) =>{
      this.tickets = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }

  public getbuscarBarrio(){
    this.api.getbuscarBarrio().subscribe((res : any) =>{
      console.log(res);
      this.tickets = [{"_id": "Resultado por consola"}]
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = true;
      this.mostrarLocalidades = false;
      console.log(this.tickets);
    });
  }


  //LOCALIDADES

  public getBuscarLocalidad(){
    this.api.getBuscarLocalidad().subscribe((res : any) =>{
      this.localidades = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = true;
      console.log(this.localidades);
    });
  }

  public getbuscarLocalidadCerca(){
    this.api.getbuscarLocalidadCerca().subscribe((res : any) =>{
      this.localidades = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = true;
      console.log(this.localidades);
    });
  }

  public buscarLocalidadPoligono(){
    this.api.buscarLocalidadPoligono().subscribe((res : any) =>{
      this.localidades = res;
      this.mostrarClientes = false;
      this.mostrarEmpleados = false;
      this.mostrarPlanes = false;
      this.mostrarTickets = false;
      this.mostrarLocalidades = true;
      console.log(this.localidades);
    });
  }






}
