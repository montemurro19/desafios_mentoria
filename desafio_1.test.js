const { formataNome } = require("./desafio_1");

test("teste base", () => {
  const nome = "Matheus Gomes";
  const nomeFormatado = formataNome(nome, false);
  expect(nomeFormatado).toBe("Matheus Gomes");
});

test("nome com acentos", () => {
  const nome = "Máthêus Gõmès";
  const nomeFormatado = formataNome(nome, false);
  expect(nomeFormatado).toBe("Máthêus Gõmès");
});

test("nome formatado pro banco", () => {
  const nome = "Máthêus@ Gõmès";
  const nomeFormatado = formataNome(nome, true);
  expect(nomeFormatado).toBe("MATHEUS GOMES");
});

test("nome com números e caracteres especiais", () => {
  const nome = "Matheus12 Gomes@";
  const nomeFormatado = formataNome(nome, false);
  expect(nomeFormatado).toBe("Matheus Gomes");
});

test("multiplos espaços", () => {
  const nome = "  Matheus     Gomes  ";
  const nomeFormatado = formataNome(nome, false);
  expect(nomeFormatado).toBe("Matheus Gomes");
});

test("caracteres esquisitos do andré", () => {
  const nome = "Matheus £ Gomes ¥";
  const nomeFormatado = formataNome(nome, false);
  expect(nomeFormatado).toBe("Matheus Gomes");
});
