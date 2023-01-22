export class CPF {
  private cpf: string;

  constructor(cpf: string) {
    if (cpf === null || cpf === undefined) new Error("CPF isn't informed");
    if (cpf.length !== 11 && cpf.length !== 14) new Error("CPF length: 11 or 14");
    if (cpf.split("").every(c => c === cpf[0])) new Error("Invalid cpf")
    this.cpf = cpf;
  }

  isValid(): boolean {
    const cpf: string = this.cpf.replace(/\D/g, "");

    let d1 = 0
    let d2 = 0

    for (let indiceCpf = 1; indiceCpf < cpf.length - 1; indiceCpf++) {
      let numeroSemDigitoVerificador: number = parseInt(cpf.substring(indiceCpf - 1, indiceCpf));
      d1 = d1 + (11 - indiceCpf) * numeroSemDigitoVerificador;
      d2 = d2 + (12 - indiceCpf) * numeroSemDigitoVerificador;
    }

    let restoDivisao = d1 % 11;

    let primeiroDigitoVerificador: number = restoDivisao < 2 ? 0 : 11 - restoDivisao;
    d2 += 2 * primeiroDigitoVerificador;
    restoDivisao = d2 % 11;
    let segundoDigitoVerificador: number = (restoDivisao < 2) ? 0 : 11 - restoDivisao;

    let digitosVerificadores = cpf.substring(cpf.length - 2, cpf.length);
    const concatenaDigitosVerificadores: string = `${primeiroDigitoVerificador}${segundoDigitoVerificador}`;
    if (digitosVerificadores !== concatenaDigitosVerificadores) new Error();

    return true;
  }
}
