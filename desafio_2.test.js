const { validaCpf } = require("./desafio_2");

test("cpf válido com pontos e traço", () => {
  const input = "997.890.890-07";

  const cpfValidado = validaCpf(input);

  const output = {
    input: "997.890.890-07",
    type: "CPF",
    isValid: true,
    formated: "997.890.890-07",
    raw: "99789089007",
  };

  expect(cpfValidado).toStrictEqual(output);
});

test("cpf válido só números", () => {
  const input = "99789089007";

  const cpfValidado = validaCpf(input);

  const output = {
    input: "99789089007",
    type: "CPF",
    isValid: true,
    formated: "997.890.890-07",
    raw: "99789089007",
  };

  expect(cpfValidado).toStrictEqual(output);
});

test("cpf válido input number", () => {
  const input = 1929784031;

  const cpfValidado = validaCpf(input);

  const output = {
    input: 1929784031,
    type: "CPF",
    isValid: true,
    formated: "019.297.840-31",
    raw: "01929784031",
  };
  expect(cpfValidado).toStrictEqual(output);
});

test("cpf válido input number com zeros no começo", () => {
  const input = 191;

  const cpfValidado = validaCpf(input);

  const output = {
    input: 191,
    type: "CPF",
    isValid: true,
    formated: "000.000.001-91",
    raw: "00000000191",
  };
  expect(cpfValidado).toStrictEqual(output);
});

test("cpf inválido", () => {
  const input = "33033033030";

  const cpfValidado = validaCpf(input);

  const output = {
    input: "33033033030",
    type: "CPF",
    isValid: false,
  };
  expect(cpfValidado).toStrictEqual(output);
});

test("input inválido", () => {
  const input = "xablau";

  const cpfValidado = validaCpf(input);

  const output = {
    input: "xablau",
    type: null,
    isValid: false,
  };
  expect(cpfValidado).toStrictEqual(output);
});
