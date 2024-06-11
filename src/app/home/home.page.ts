import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // como o typescript é fortemente tipado, para eu conseguir
  // receber qualquer valor e dps tratar ele melhor
  //eu posso fazer isso
  public precoAlcool: any;
  public precoGasolina: any;
  public resultado: String=''
  calcular(){
      // verificar se foi preenchido 
      if(this.precoAlcool && this.precoGasolina){
        let alcool = parseFloat(this.precoAlcool)
        let gasolina= parseFloat(this.precoGasolina)
        if(alcool/gasolina >=0.7){
          this.resultado = 'melhor utilizar gasolina'
        }else{
          this.resultado='melhor utilizar o álcool'
        }
      }else{
        this.resultado="não preenchido"
      }
  }
  constructor() {}

}
