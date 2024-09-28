---
title: "Padronização de Commits: Conventional Commits"
summary: "Mantendo a ordem no seu projeto"
date: "July 21 2024"
draft: false
tags:

- Guia
- Git
- Programação
---
###### Autor: *[Pedro Henrique Melo](https://youtu.be/P5ZqFZKG4uE?si=OXqNtUg2lwQtD3jU)*
A padronização de commits é essencial para manter um histórico de commits claro e organizado. Um dos padrões mais populares é o Conventional Commits, que fornece um conjunto de regras leves para criar um histórico explícito de commits. Essa convenção é especialmente útil para automação de ferramentas e se alinha bem com o versionamento semântico (SemVer).

### Estrutura de um Commit
Um commit seguindo a especificação Conventional Commits deve ser estruturado da seguinte maneira:

```yaml
<type>[opcional scope]: <descrição>

[opcional corpo]

[opcional rodapé(s)]
```

**Vamos detalhar cada elemento:**

1. **Tipo**: O tipo do commit comunica a intenção principal da mudança. Exemplos de tipos comuns incluem:

- *feat*: Introdução de uma nova funcionalidade.
- *fix*: Correção de um bug.
- *docs*: Alterações apenas na documentação.
- *style*: Alterações que não afetam a lógica do código (espaços em branco, formatação, ponto e vírgula ausente, etc.).
- *refactor*: Alterações no código que não corrigem bugs nem adicionam funcionalidades.
- *perf*: Melhorias de desempenho.
- *test*: Adição ou correção de testes.
- *build*: Mudanças que afetam o sistema de build ou dependências externas.
- *ci*: Mudanças nos arquivos e scripts de configuração de CI (Integração Contínua).
- *chore*: Atualizações de tarefas de manutenção.
- *revert*: Reversão de um commit anterior.
- *escopo*: (opcional) Um escopo pode ser fornecido para contextualizar a mudança, geralmente indicado entre parênteses após o tipo. Exemplo: feat(api).

2. **Descrição**: Uma breve descrição do que foi alterado.

3. **Corpo**: (opcional) Pode conter informações adicionais sobre a mudança, separado por uma linha em branco da descrição.

4. **Rodapé(s)**: (opcional) Pode incluir informações adicionais, como o rodapé BREAKING CHANGE para indicar mudanças que quebram a compatibilidade com versões anteriores.

### Exemplos de Mensagens de Commit
**Commit com descrição e rodapé de breaking change**

```yaml
feat: permitir que o objeto de configuração fornecido estenda outras configurações

BREAKING CHANGE: a chave `extends` no arquivo de configuração agora é usada para estender outros arquivos de configuração.
```

**Commit com `!` para indicar breaking change**

```yaml
feat!: enviar um e-mail para o cliente quando um produto for enviado
```

**Commit com escopo e `!` para indicar breaking change**

```yaml
feat(api)!: enviar um e-mail para o cliente quando um produto for enviado
```

**Commit com `!` e rodapé de breaking change**

```yaml
chore!: remover suporte para Node 6

BREAKING CHANGE: usar recursos de JavaScript não disponíveis no Node 6.
```

**Commit sem corpo**

```yaml
docs: corrigir a ortografia do CHANGELOG
```

**Commit com corpo**

```yaml
feat(lang): adicionar suporte ao idioma polonês
```

### O que é o Breaking Change?
Um "breaking change" (mudança quebradora) refere-se a uma alteração no código que quebra a compatibilidade com versões anteriores. Isso significa que uma parte do código que funcionava em uma versão anterior deixará de funcionar corretamente ou exigirá ajustes significativos após a mudança. Em outras palavras, usuários que dependem da versão anterior do código precisarão fazer mudanças em seus próprios projetos para se adaptar à nova versão.

### Benefícios da Padronização de Commits
1. Histórico Claro e Organizado: Facilita a compreensão das mudanças feitas no projeto.
2. Automação e CI: Permite a geração automática de CHANGELOGs e facilita a automação de processos de build e lançamento.
3. Comunicação Eficiente: Melhora a comunicação entre membros da equipe e stakeholders, esclarecendo o que foi alterado, corrigido ou adicionado.
4. Versionamento Semântico: Alinha-se com o versionamento semântico (SemVer), permitindo que mudanças de versão sejam determinadas automaticamente com base nos tipos de commits.

### Perguntas Frequentes

- **Como lidar com commits na fase inicial de desenvolvimento?**

Proceda como se o produto já estivesse sendo usado por alguém, mesmo que sejam apenas seus colegas desenvolvedores. Eles vão querer saber o que foi corrigido, o que quebra, etc.

- **Os tipos no título do commit devem ser em maiúsculas ou minúsculas?**

Qualquer capitalização pode ser usada, mas é melhor ser consistente.

- **O que fazer se o commit se conforma a mais de um tipo de commit?**

Sempre que possível, faça múltiplos commits. Parte do benefício dos Conventional Commits é nos levar a fazer commits e PRs mais organizados.

- **Isso não desencoraja o desenvolvimento rápido e a iteração rápida?**

Desencoraja mover-se rapidamente de forma desorganizada. Ajuda a mover-se rapidamente a longo prazo em múltiplos projetos com diversos contribuidores.

- **Como isso se relaciona com o SemVer?**

Commits do tipo fix devem ser traduzidos para lançamentos PATCH. Commits do tipo feat devem ser traduzidos para lançamentos MINOR. Commits com BREAKING CHANGE devem ser traduzidos para lançamentos MAJOR.

### Conclusão
A adoção da padronização de commits pode transformar a maneira como sua equipe lida com commits, builds e lançamentos, tornando o processo mais claro, organizado e eficiente para todos os envolvidos, sejam eles desenvolvedores ou não. 

- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/)
