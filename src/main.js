export default class App {

  sumarParesFor() {
    let suma = 0;

    for(let i = 0; i<=20; i = i + 2) {
        suma = suma + i;
    }
    
    return suma;
  }

  contarImpares
}

let app = new App();

console.log(app.sumarParesFor());

