import { Component, EventEmitter, Output } from "@angular/core";

@Component({

  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent {


  @Output()
  aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  transferir(){
    console.log('Solicitando nova tranferencia');

    //console.log('Valor: ', this.valor);
    //console.log('Destino: ', this.destino);
    const valorEmitir =  {valor: this.valor , destino: this.destino};
    this.aoTransferir.emit( valorEmitir );

    this.limparCampos();

  }

  limparCampos(){
    this.destino = 0;
    this.valor = 0;
  }
}
