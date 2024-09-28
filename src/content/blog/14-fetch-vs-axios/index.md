---
title: "Fetch vs Axios"
summary: "Qual a melhor forma de fazer suas requisições?"
date: "Sept 28 2024"
draft: false
tags:

- Guia
- AXIOS
- Fetch
- Front End
- Back End
---
###### Autor: *[Pedro Henrique Melo](http://www.linkedin.com/in/pedro-henrique-melo-da-silva-a7a700231)*
### **Por onde começar?**

Ah, o dilema das requisições HTTP. Se você está começando um projeto em JavaScript ou TypeScript, provavelmente já se deparou com a escolha entre usar o `fetch` ou o `axios` para fazer suas requisições. É como escolher entre um café preto e um cappuccino – ambos servem o propósito, mas cada um tem seu charme especial. Então, vamos mergulhar nas diferenças e ver qual é o melhor para você!

---
### 1. **A Base do Fetch**

O `fetch` é uma API nativa dos navegadores modernos que permite fazer requisições HTTP. É como o Jake da B99 tentando resolver um caso complexo – pode parecer um pouco direto, mas tem suas peculiaridades.

**Vantagens do Fetch:**

- **✅Nativo**: Não precisa instalar nada, já está no navegador.
- **✅Promessas**: Usa `Promise`, facilitando o trabalho com `async/await`.

**Desvantagens do Fetch:**

- **Erro de Status HTTP**: Não rejeita a promessa automaticamente para códigos de status HTTP diferentes de 200-299. Você precisa verificar manualmente.
- **Sintaxe Verbose**: Para coisas mais complexas, a configuração pode ficar um pouco complicada e verbose.

```jsx
// Exemplo com fetch
fetch('https://api.exemplo.com/dados')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição!');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
```

### 2. **Axios**

Axios é como o Capitão Holt de  **Brooklyn Nine-Nine** – eficiente, direto ao ponto, e com algumas ferramentas extras para facilitar a vida. É uma biblioteca que você precisa instalar, mas oferece uma série de funcionalidades que tornam o trabalho com requisições muito mais fácil.

**Vantagens do Axios:**

- **✅Manipulação de Erros**: Lida com códigos de status HTTP fora da faixa 200-299 e rejeita a promisses automaticamente. Mais uma vez, como o Holt resolvendo casos difíceis sem complicação.
- **Cancelamento de Requisições**: Permite cancelar requisições, se necessário.
- **✅Interceptadores**: Adiciona interceptadores para requisições e respostas, o que é ótimo para lidar com autenticação e outras funcionalidades.
- **✅Transformação de Dados**: Facilita a transformação de dados de requisição e resposta.

**Desvantagens do Axios:**

- **Tamanho da Biblioteca**: Adiciona um pouco mais ao tamanho do pacote do seu projeto, ao contrário do `fetch` que é nativo. Mas não muda em muita coisa.

```jsx
// Exemplo com axios
axios.get('https://api.exemplo.com/dados')
  .then(response => console.log(response.data))
  .catch(error => console.error('Erro:', error));
```

### 3. **Comparando os Dois**

Imaginemos que `fetch` e `axios` são os detetives da 99ª delegacia de polícia de Brooklyn. `fetch` é o Jake – bom para resolver casos por conta própria, mas pode acabar precisando de uma ajuda extra para lidar com detalhes complicados. Já `axios` é o Capitão Holt – direto, confiável, e vem com todas as ferramentas necessárias para fazer o trabalho de forma mais eficiente.

Se você precisa de algo direto ao ponto e não se importa em fazer um pouco mais de trabalho manual, `fetch` pode ser a sua escolha. Mas se você quer um ajudante que já vem com uma série de funcionalidades prontas para usar e pode lidar com casos mais complexos, principalmente em projetos grandes, sem você precisar se preocupar com detalhes, `axios` é o caminho a seguir.

A escolha entre `fetch` e `axios` pode depender do que você precisa para o seu projeto. Se a simplicidade e a ausência de dependências adicionais são importantes, `fetch` é uma excelente opção. Mas se você valoriza uma solução mais robusta e pronta para lidar com casos mais complexos, `axios` pode ser a melhor escolha.

### Considerações Finais e Referências

No final, tanto `fetch` quanto `axios` têm suas vantagens e desvantagens – e a escolha certa pode depender tanto do seu estilo de codificação quanto das necessidades específicas do seu projeto. Fique abaixo com a documentação de ambos para consulta: 

- [Documentação do Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [Documentação do Axios](https://axios-http.com/ptbr/docs/intro)
