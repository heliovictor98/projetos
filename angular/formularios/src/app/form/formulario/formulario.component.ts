import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/clientes/shared/cliente';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formCliente!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente){
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      obs: new FormControl(cliente.obs),
      ativo: new FormControl(cliente.ativo),
    })
  }

  onSubmit(){
    console.log(this.formCliente.value);

  }
}
