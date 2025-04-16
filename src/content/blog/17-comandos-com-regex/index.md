---
title: "Formatações com REGEX"
summary: "Guia Completo de Regex para Validação de Dados no JavaScript e TypeScript"
date: "Apr 17 2025"
draft: false
tags: 
- JavaScript
- Regex
- Typescript
- React
---
###### Autor: *[Pedro Henrique Melo](http://www.linkedin.com/in/pedro-henrique-melo-da-silva-a7a700231)*

Se você trabalha com desenvolvimento web, provavelmente já precisou validar ou extrair informações como **números de telefone, CPF, CNPJ, CEP, e-mails, datas, senhas** e muito mais.

A maneira mais eficiente de fazer isso é com **Expressões Regulares (Regex)**! 🚀

Neste post, você verá um guia completo com **Regex prontas para validação** de diversos formatos comuns no Brasil e no mundo. Vamos nessa?
---

## **📞 1. Validação de Número de Telefone (Brasil)**

### 📌 Formato esperado: **(XX) 9XXXX-XXXX**

```jsx

const telefoneRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;

console.log(telefoneRegex.test("(11) 98765-4321")); // true
console.log(telefoneRegex.test("11 98765-4321"));   // false
```

🔹 **Explicação:**

- `^\(` → Começa com um parêntese **(XX)**
- `\d{2}` → Dois dígitos do DDD
- `\) 9` → Fecha o parêntese e inclui o "9" fixo
- `\d{4}-\d{4}$` → Quatro dígitos + hífen + quatro dígitos

---

## **🆔 2. Validação de CPF**

### 📌 Formato esperado: **XXX.XXX.XXX-XX**

```jsx
 
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

console.log(cpfRegex.test("123.456.789-09")); // true
console.log(cpfRegex.test("12345678909"));    // false

```

🔹 **Explicação:**

- `\d{3}` → Três números
- `\.` → Ponto obrigatório
- `\d{3}` → Mais três números
- → Hífen obrigatório
- `\d{2}` → Dois números finais

✅ **Atenção**: Essa Regex **não valida** a autenticidade do CPF, apenas o formato. Para validar de fato, é necessário aplicar a lógica do dígito verificador.

---

## **🏢 3. Validação de CNPJ**

### 📌 Formato esperado: **XX.XXX.XXX/XXXX-XX**

```jsx
 
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

console.log(cnpjRegex.test("12.345.678/0001-95")); // true
console.log(cnpjRegex.test("12345678000195"));     // false

```

🔹 **Diferença do CPF:**

- `\d{2}\.` → Dois números seguidos de ponto
- `\d{3}\.` → Três números e outro ponto
- `\d{3}/` → Três números e uma barra `/`
- `\d{4}-\d{2}` → Quatro números, hífen e dois números finais

✅ **Assim como no CPF, essa Regex não valida o CNPJ matematicamente.**

---

## **📮 4. Validação de CEP (Brasil)**

### 📌 Formato esperado: **XXXXX-XXX**

```jsx
 
const cepRegex = /^\d{5}-\d{3}$/;

console.log(cepRegex.test("12345-678")); // true
console.log(cepRegex.test("12345678"));  // false

```

🔹 **Explicação:**

- `\d{5}` → Cinco números
- → Hífen obrigatório
- `\d{3}` → Três números finais

---

## **📧 5. Validação de E-mail**

```jsx
 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test("meu.email@gmail.com")); // true
console.log(emailRegex.test("email@com"));          // false

```

🔹 **Explicação:**

- `[^\s@]+` → Qualquer caractere **exceto** espaço e `@` antes do `@`
- `@` → Obrigatório
- `[^\s@]+` → Algo entre o `@` e o `.`
- `\.` → Ponto obrigatório
- `[^\s@]+$` → Algo depois do ponto

---

## **📆 6. Validação de Datas (dd/mm/yyyy)**

```jsx
 
const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

console.log(dataRegex.test("12/05/2024")); // true
console.log(dataRegex.test("32/13/2024")); // false

```

---

## **🔑 7. Validação de Senha Forte**

### 📌 Critérios:

- Pelo menos **8 caracteres**
- Pelo menos **uma letra maiúscula**
- Pelo menos **um número**
- Pelo menos **um caractere especial**

```jsx
 
const senhaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

console.log(senhaRegex.test("Teste@123")); // true
console.log(senhaRegex.test("teste123"));  // false

```

---

## **💳 8. Validação de Cartão de Crédito**

```jsx
 
const cartaoRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

console.log(cartaoRegex.test("1234-5678-9012-3456")); // true
console.log(cartaoRegex.test("1234567890123456"));    // false

```

---

## **🌍 9. Validação de Endereço IP (IPv4)**

```jsx
 
const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/;

console.log(ipRegex.test("192.168.1.1")); // true
console.log(ipRegex.test("999.999.999.999")); // false

```

---

## **💰 10. Validação de Moedas (BRL - R$)**

```jsx
 
const moedaRegex = /^R\$\s?\d{1,3}(\.\d{3})*,\d{2}$/;

console.log(moedaRegex.test("R$ 1.234,56")); // true
console.log(moedaRegex.test("R$1234.56"));   // false

```

---

## **⏰ 11. Validação de Horário (HH:MM)**

```jsx
 
const horarioRegex = /^([01]\d|2[0-3]):[0-5]\d$/;

console.log(horarioRegex.test("23:59")); // true
console.log(horarioRegex.test("25:00")); // false

```

---

## **📦 12. Números de Rastreamento (Correios - Brasil)**

```jsx
 
const rastreioRegex = /^[A-Z]{2}\d{9}[A-Z]{2}$/;

console.log(rastreioRegex.test("AB123456789BR")); // true
console.log(rastreioRegex.test("123456789BR"));  // false

```

---

## **🚀 Conclusão**

As **Expressões Regulares** são ferramentas poderosas que facilitam a validação de dados. Com essas Regex, você pode tornar seu sistema mais seguro e eficiente!