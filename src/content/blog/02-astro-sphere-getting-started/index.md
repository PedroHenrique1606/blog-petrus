---
title: "Introdução ao HTML: Como Iniciar e Principais Conceitos"
summary: "Tutorial fresquinho e pronto para você iniciar."
date: "May 19 2024"
draft: false
tags:
- Tutorial
- HTML
---

HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar páginas web. Ele fornece a estrutura básica de uma página web, que é aprimorada e modificada por outras tecnologias como CSS e JavaScript. Neste artigo, exploraremos como você pode começar a usar HTML, cobrindo os conceitos principais e recomendando as melhores ferramentas para desenvolver suas habilidades.

### O que é HTML?
HTML é uma linguagem de marcação que utiliza elementos ou tags para estruturar o conteúdo na web. Cada elemento é representado por uma tag, que pode conter texto, links, imagens, listas, e outras mídias. HTML é a espinha dorsal de qualquer página web e é fundamental para o desenvolvimento web.

### Como iniciar no HTML

1. **Escolha um editor de código**
- Visual Studio Code (VSCode): Um editor gratuito e de código aberto, popular entre desenvolvedores web devido à sua flexibilidade e vasta coleção de extensões. [Baixe o VSCode aqui](https://code.visualstudio.com/);
- Sublime Text:Um editor leve e rápido, conhecido por sua interface amigável e personalização. [Baixe o Sublime por aqui](https://www.sublimetext.com/);
- Reptli: Esse é um editor de código online fácil e intuitivo para quem possue um pc com menos potência ou, quem sabe, para quem possue um Chormebook. [Acesse o Repli por aqui](https://replit.com/).
  
 2. **Estrutura Básica de um Documento HTML**
 
A estrutura básica de um documento HTML consiste em um conjunto de elementos organizados de forma hierárquica. Aqui está um exemplo de um documento HTML simples: 
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Documento HTML</title>
</head>
<body>
    <h1>Bem-vindo ao HTML</h1>
    <p>Este é o meu primeiro documento HTML.</p>
</body>
</html>
```

### Principais Conceitos do HTML

1. **Elementos e Tags**

Os elementos HTML são definidos usando tags, que geralmente vêm em pares: uma tag de abertura `<tag>` e uma tag de fechamento `</tag>`. Alguns elementos comuns incluem:
- `<h1>` a `<h6>`: Cabeçalhos, sendo `<h1>` o mais importante e `<h6>` o menos importante.
- `<p>`: Parágrafo.
- `<a>`: Link, usado para criar hyperlinks.
- `<img>`: Imagem, usado para incorporar imagens.
- `<ul>`, `<ol>` e `<li>`: Listas, sendo `<ul>` para listas não ordenadas, `<ol>` para listas ordenadas e `<li>` para itens de lista.

2. **Atributos**
  
Os atributos fornecem informações adicionais sobre os elementos HTML. Eles são sempre especificados na tag de abertura e geralmente vêm em pares nome/valor, como id, class, src, href, etc.

```html
<a href="https://www.exemplo.com" target="_blank">Visite o Exemplo</a>
<img src="imagem.jpg" alt="Descrição da imagem">
```
3. **Estrutura e Layout** 

A estrutura de um documento HTML pode ser organizada usando elementos como `<div>` e `<span>`. Enquanto `<div>` é um contêiner de bloco usado para agrupar elementos, `<span>` é um contêiner inline usado para aplicar estilos a uma parte de um texto.

```html
<div class="container">
    <h2>Título da Seção</h2>
    <p>Parágrafo dentro do contêiner.</p>
</div>
<span class="highlight">Texto destacado</span>
```
4. **Formulários**

Formulários são essenciais para interações de usuário, permitindo a entrada de dados que podem ser enviados para um servidor.

```html
<form action="/enviar-dados" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    <input type="submit" value="Enviar">
</form>
```

| Tech        | Tipo        | Descrição                                                              |
| :---------- | :---------- | :--------------------------------------------------------------------- |
| HMLT        | Marcação    | Marcação e tags gerais do site                                         |
| CSS         | Estilização | Adicionar cores, animações, responsividade e toda a parte do desgin    |
| JAVASCRIPT  | Programação | Linguagem de programação usada para interações com o usuário           |

### Melhores Práticas de HTML

- Semântica: Use tags HTML de forma semântica para melhorar a acessibilidade e SEO. Por exemplo, use `<header>`, `<footer>`, `<article>`, e `<section>` em vez de `<div>` para descrever a estrutura do documento.
- Acessibilidade: Certifique-se de que seu HTML seja acessível, usando atributos como `alt` em imagens e `aria` em elementos interativos.

### Quer aprender mais?

Fique ligado aqui no blog e confira alguns vídeos e playlists que eu indico para você iniciar seus estudos com HTML

[![](https://markdown-videos-api.jorgenkh.no/youtube/sj0p9O85AIg?si=BfEW0j0rDgk1Hx4k)](https://www.youtube.com/playlist?list=PL2Fdisxwzt_cajoGVWTx44wM6Ht09QJ3A)
[![](https://markdown-videos-api.jorgenkh.no/youtube/Ejkb_YpuHWs?si=yVOXbqGl11fna60G)](https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n)
[![](https://markdown-videos-api.jorgenkh.no/youtube/3oSIqIqzN3M?si=Z5Hsnnk5IfwHu8BJ)](https://youtu.be/3oSIqIqzN3M?si=Z5Hsnnk5IfwHu8BJ)
[![](https://markdown-videos-api.jorgenkh.no/youtube/SV7TL0hxmIQ?si=KwXfaeNcUr_3WERG)](https://youtu.be/SV7TL0hxmIQ?si=KwXfaeNcUr_3WERG)