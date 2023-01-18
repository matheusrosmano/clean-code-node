export function validateCpf(cpf: string) {
  if (cpf === null || cpf === undefined) throw "CPF isn't informed"
  if (cpf.length !== 11 && cpf.length !== 14) new Error("CPF length: 11 or 14")

  cpf = cpf.replace(/\.|-/g, '')

  try {
    let d1, d2;
    let dg1, dg2, rest;
    let numeroSemDigitoVerificador;
    let nDigResult;
    d1 = d2 = 0;
    dg1 = dg2 = rest = 0;

    for (let indiceCpf = 1; indiceCpf < cpf.length - 1; indiceCpf++) {

      numeroSemDigitoVerificador = parseInt(cpf.substring(indiceCpf - 1, indiceCpf));
      d1 = d1 + (11 - indiceCpf) * numeroSemDigitoVerificador;

      d2 = d2 + (12 - indiceCpf) * numeroSemDigitoVerificador;
    }

    rest = d1 % 11;

    dg1 = rest < 2 ? (dg1 = 0) : 11 - rest;
    d2 += 2 * dg1;
    rest = d2 % 11;
    if (rest < 2) dg2 = 0;
    else dg2 = 11 - rest;

    let digitosVerificadores = cpf.substring(cpf.length - 2, cpf.length);
    nDigResult = "" + dg1 + "" + dg2;
    return digitosVerificadores === nDigResult;
  } catch (e) {
    throw "Invalid cpf"
  }
}

// validateCpf("08542323629")