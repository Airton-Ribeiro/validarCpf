function Cpf(cpf, digito) {
  this.cpf = cpf;
  this.digito = digito;
  this.cpfOriginal = Array.from(cpf.replace(/\D+/g, "") + digito);
}
Cpf.prototype.cpfLimpo = function () {
  this.cpf = this.cpf.replace(/\D+/g, "");
};

Cpf.prototype.cpfArray = function () {
  this.cpf = Array.from(cpf.cpf);
};

Cpf.prototype.primeiroMetodo = function () {
  let multiplicador = 10;
  for (let i = 0; i < 9; i++) {
    this.cpf[i] *= multiplicador;
    multiplicador--;
  }
};

Cpf.prototype.somatorio = function () {
    let somatorio = this.cpf.reduce((ac, val) => ac + Number(val), 0);
    let valor = 11 - (somatorio % 11);
    if (valor >= 10) {
      this.cpf.push(0);
    } else {
      this.cpf.push(valor);
    }
  };
Cpf.prototype.segundoMetodo = function () {
  let multiplicador = 10;
  for (let i = 0; i < 9; i++) {
    this.cpf[i] /= multiplicador;
    multiplicador--;
  }
};

Cpf.prototype.terceiroMetodo = function () {
  let multiplicador = 11;
  for (let i = 0; i < 10; i++) {
    this.cpf[i] *= multiplicador;
    multiplicador--;
  }
};

Cpf.prototype.segundaSoma = function () {
    let somatorio = this.cpf.reduce((ac, val) => ac + Number(val), 0);
    let valor = 11 - (somatorio % 11);
    if (valor >= 10) {
      this.cpf.push(0);
    } else {
      this.cpf.push(valor);
    }
  };

Cpf.prototype.checkin = function () {
  let multiplicador = 11;
  for (let i = 0; i < 10; i++) {
    this.cpf[i] /= multiplicador;
    multiplicador--;
  }
};
Cpf.prototype.number = function () {
  this.cpfOriginal = this.cpfOriginal.map(Number);
};

Cpf.prototype.verificarCpf = function () {
  return JSON.stringify(this.cpfOriginal) === JSON.stringify(this.cpf);
};

let cpf = new Cpf("110.155.072", "24");

cpf.number();
cpf.cpfLimpo();
cpf.cpfArray();
cpf.primeiroMetodo();
cpf.somatorio();
cpf.segundoMetodo(cpf);
cpf.terceiroMetodo(cpf);
cpf.segundaSoma(cpf);
cpf.checkin(cpf);
console.log(cpf.verificarCpf());

