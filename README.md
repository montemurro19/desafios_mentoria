# Desafios

Serão três exercícios diferentes. O código de cada um deles deve estar separado em seu respectivo arquivo .js seguindo o exemplo de nomenclatura: **desafio_1.js**. E todos os arquivos devem estar dentro do mesmo projeto.

As funções necessárias para rodar o código deverão estar sendo exportadas.

Assim que terminar um dos desafios, deverá ser feito um commit na branch do projeto. Sendo assim, cada desafio completo terá seu próprio commit.

**Importante: Criar um repositório no GitHub para subir o código**

## Desafio 1

Criar uma função que receba uma string de um nome de uma pessoa e retorne a string limpa, removendo todos os caracteres inválidos para o nome de uma pessoa.

**Bônus:** A função poderá aceitar um parâmetro adicional booleano dizendo se a string deverá ser normalizada. Caso o parâmetro seja true, todos os acentos e cedilhas deverão ser removidos e a string deverá ser retornada toda em letras maiúsculas.

- Remover espaços duplicados
- Remover espaços do começo/final da string
- Remover caracteres especiais
- Remover números
- Capitalizar os nomes (primeira letra em maiúsculo e o resto em minúsculo)

## Desafio 2

Criar uma função que receba uma string ou um number que represente um CPF. A função deverá validar se o valor fornecido é um CPF válido.

A função deve ser capaz de receber strings em diferentes formatos, conforme exemplos:

- "997.890.890-07" é um CPF válido
- "99789089007" é um CPF válido
- 1929784031 é um CPF válido

**Obs:** CPFs podem começar com 0 mas se o valor informado for do tipo _number_, o 0 da frente não existirá.

A função deverá retornar um objeto com até 5 propriedades, conforme exemplos a seguir:

```
Exemplo 1:
{
  "input": "33033033030",
  "type": "CPF"
  "isValid": false,
}

Exemplo 2:
{
  "input": "997890890-07",
  "type": "CPF"
  "isValid": true,
  "formated": "997.890.890-07",
  "raw": "99789089007"
}

Exemplo 3:
{
  "input": "xablau",
  "type": null,
  "isValid": false
}
```

**Bônus:** A função poderá validar CNPJs também. Neste caso, a função deverá identificar sozinha se o valor digitado é um CPF ou um CNPJ, sem que seja especificado pelo usuário.

## Desafio 3

Criar uma função que receba uma string de um CEP. A função deverá consumir a API https://viacep.com.br/ para buscar os dados do endereço e retornar o endereço completo em formato de string.

**Exemplo:**

```
Rua Comendador Carlo Mário Gardano, Centro
09720-470 São Bernardo do Campo, SP
```
