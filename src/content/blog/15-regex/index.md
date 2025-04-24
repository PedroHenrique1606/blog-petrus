---
title: "Regex"
summary: "Como Dominar Expressões Regulares no JavaScript e TypeScript"
date: "Mar 21 2025"
draft: false
tags:

- Guia
- Regex
- TypeScript
- Front End
- JavaScript
---
###### Autor: <em><a href="https://www.linkedin.com/in/pedro-henrique-melo-a7a700231/ " target="_blank" rel="noopener noreferrer">Pedro Henrique Melo</a></em>
### **📌 O que são Expressões Regulares?**

Uma expressão regular é um padrão de busca utilizado para encontrar, validar, substituir ou manipular strings. Com uma única linha de código, podemos realizar operações que exigiriam diversas condições e loops.

As Regex são amplamente usadas em diversas linguagens, como JavaScript, Python, C#, PHP, Java, entre outras. No contexto do desenvolvimento web, elas são essenciais para validação de formulários, sanitização de dados e manipulação de strings em tempo real.

### **🎯 Para que servem as Expressões Regulares?**
Aqui estão algumas das aplicações mais comuns:

* [x] Validação de entrada → E-mails, números de telefone, CEPs, senhas, etc.
* [x] Busca e extração de padrões → Encontrar palavras, números, datas, etc.
* [x] Substituição de texto → Modificar trechos de strings rapidamente.
* [x] Parsing de logs e arquivos → Extração de dados em textos estruturados.
* [x] Divisão de strings → Separar frases e palavras de forma inteligente.

---
### 📚 Estrutura Básica de uma Regex

Antes de vermos exemplos práticos, vamos entender os principais elementos que compõem uma Regex.

1️⃣ Delimitadores
No JavaScript e no TypeScript, Regex pode ser definida de duas formas:

```js
const regex1 = /padrão/; // Usando barras (mais comum)
const regex2 = new RegExp("padrão"); // Usando objeto RegExp
```
2️⃣ Metacaracteres e Significados
Metacaracteres são símbolos especiais que possuem significados específicos dentro de uma expressão regular:

| Símbolo | Significado                     | Exemplo                                   |
| ------- | ------------------------------- | ----------------------------------------- |
| `.`     | Qualquer caractere              | `c.t` → "cat", "cut", "cot"               |
| `\d`    | Dígito (0-9)                    | `\d\d\d` → "123", "987"                   |
| `\w`    | Caracteres alfanuméricos        | `\w+` → "abc123"                          |
| `\s`    | Espaço em branco                | `\s+` → " "                               |
| `\b`    | Delimitação de palavra          | `\bcar\b` → "car", mas não "cart"         |
| `^`     | Início da string                | `^Hello` → "Hello world" ✅, "Say Hello" ❌ |
| `$`     | Fim da string                   | `world$` → "Hello world" ✅, "worldwide" ❌ |
| `*`     | Zero ou mais ocorrências        | `ab*c` → "ac", "abc", "abbc"              |
| `+`     | Uma ou mais ocorrências         | `ab+c` → "abc", "abbc" ❌ "ac"             |
| `?`     | Zero ou uma ocorrência          | `colou?r` → "color", "colour"             |
| `{n}`   | Quantidade exata de ocorrências | `\d{4}` → "2025" ✅, "25" ❌                |


---
### 💡 Exemplos Práticos de Regex
Agora que entendemos a estrutura básica, vamos aplicar Regex em casos reais dentro do JavaScript e TypeScript.

📝 Validando um E-mail em JSX/TSX
No React, podemos validar um campo de e-mail em tempo real:

```tsx
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailValidator() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(emailRegex.test(value)); // Testa a Regex
  };

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        placeholder="Digite seu e-mail"
      />
      {!isValid && <p style={{ color: "red" }}>E-mail inválido!</p>}
    </div>
  );
}
```

- 🔍 Como funciona essa Regex? 
- `^[^\s@]+` → Começa com pelo menos um caractere que não seja espaço ou @
- `@` → Obrigatoriamente deve ter um @
- `[^\s@]+\.` → Depois do @, deve haver pelo menos um caractere antes do .
- `[^\s@]+$` → Depois do . precisa ter pelo menos um caractere
---

#### 🔢 Extraindo Apenas Números de uma String
Se quisermos capturar apenas os números de uma string, podemos usar:
```js
const texto = "Pedido #1234 confirmado no valor de R$ 50,00.";
const numeros = texto.match(/\d+/g);
console.log(numeros); // ["1234", "50", "00"]
```
#### 🔄 Substituindo Palavras em uma String
Podemos usar Regex para substituir palavras específicas:

```js
const texto = "O preço do produto é de R$200.";
const novoTexto = texto.replace(/R\$\d+/g, "VALOR CONFIDENCIAL");
console.log(novoTexto); // "O preço do produto é de VALOR CONFIDENCIAL."
```
#### 📅 Validação de Datas
Existem várias formas de validar datas, vamos usar o formato dd/mm/yyyy em nosso exemplo 

```js
const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

console.log(dataRegex.test("12/05/2024")); // true
console.log(dataRegex.test("32/13/2024")); // false
```


🚀 Dicas para Usar Regex no Dia a Dia
- Use ferramentas online para testar Regex → Regex101

- Evite Regex muito complexas → Às vezes, um simples includes() pode resolver o problema.

- Use g e i para melhorar buscas → /hello/gi encontra "hello" e "HELLO".

- Prefira match() e replace() em vez de test() quando precisar de capturas.


### Considerações Finais e Referências

As Expressões Regulares são ferramentas poderosas que podem facilitar muito a manipulação de strings no dia a dia do desenvolvedor, facilitando a vida do usuário e auxiliando para que não hajam incompatibilidade de dados no back-end.

- [Documentação do Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)