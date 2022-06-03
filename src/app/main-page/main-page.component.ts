import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
  valoresCalculo: any = {
    primeiroValor: 0,
    segundoValor: 0,
    resultado: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  calcular() {
    this.valoresCalculo.resultado =
      this.valoresCalculo.primeiroValor + this.valoresCalculo.segundoValor;
  }

  // validaCampos() {
  //   if (this.isValid()) {
  //     alert(`Você quer calcular ${this.primeiroValor} + ${this.segundoValor}`);
  //   }
  // }

  isValid() {
    if (
      this.valoresCalculo.primeiroValor == 0 ||
      this.valoresCalculo.primeiroValor == null ||
      this.valoresCalculo.segundoValor == 0 ||
      this.valoresCalculo.segundoValor == null
    ) {
      return false;
    }
    return true;
  }

  limpar(){
    this.valoresCalculo.primeiroValor = 0;
    this.valoresCalculo.segundoValor = 0;
    this.valoresCalculo.resultado = 0;
  }
}
