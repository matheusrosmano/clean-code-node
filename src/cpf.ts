export class CPF {
  private cpf: string

  constructor(cpf: string) {
      if (cpf === null || cpf === undefined) new Error("CPF isn't informed")
      if (cpf.length !== 11 && cpf.length !== 14) new Error("CPF length: 11 or 14")
      this.cpf = cpf
  }

  isValid(): boolean {
      const cpf: string = this.cpf.replace(/\.|-/g, '')

      try {
          let d1, d2;
          let primeiroDigitoVerificador, segundoDigitoVerificador, rest;
          let numeroSemDigitoVerificador;
          d1 = d2 = 0;
          primeiroDigitoVerificador = segundoDigitoVerificador = rest = 0;

          for (let indiceCpf = 1; indiceCpf < cpf.length - 1; indiceCpf++) {

          numeroSemDigitoVerificador = parseInt(cpf.substring(indiceCpf - 1, indiceCpf));
          d1 = d1 + (11 - indiceCpf) * numeroSemDigitoVerificador;

          d2 = d2 + (12 - indiceCpf) * numeroSemDigitoVerificador;
          }

          rest = d1 % 11;

          primeiroDigitoVerificador = rest < 2 ? (primeiroDigitoVerificador = 0) : 11 - rest;
          d2 += 2 * primeiroDigitoVerificador;
          rest = d2 % 11;
          if (rest < 2) segundoDigitoVerificador = 0;
          else segundoDigitoVerificador = 11 - rest;

          let digitosVerificadores = cpf.substring(cpf.length - 2, cpf.length);
          const concatenaDigitosVerificadores: string = `${primeiroDigitoVerificador}${segundoDigitoVerificador}`
          if (digitosVerificadores !== concatenaDigitosVerificadores) new Error()
      } catch (e) {
          throw "Invalid cpf"
      }
      return true
  }
}