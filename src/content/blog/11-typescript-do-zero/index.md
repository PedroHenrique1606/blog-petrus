---
title: "TypeScript do zero"
summary: "Da teoria a prática"
date: "Sept 02 2024"
draft: false
tags:

- Guia
- TypeScript
- JavaScript
- Front End
---
Neste guia vamos explorar o TypeScript, desde o básico a até mesmo conceitos mais avançados para por em prática no dia a dia dos seus projetos ou da sua empresa. Esse é o único guia em que precisamos que você tenha o pré-requisito de já saber sobre JavaScript, então fique atento.

### O que é TypeScript e como isso afeta o Vasco ✠ ?
TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, adicionando tipos estáticos. Isso permite que os desenvolvedores detectem erros em tempo de desenvolvimento pela sua IDE, antes mesmo de o código ser executado. Durante esse post abaixo vamos abordar tópicos desde os mais simples como mais avançados de como vamos usar em ambiente de desenvolvimento. Com relação ao Vasco, bem, não afeta em nada. 

**Tipos Primitivos**
1. `string` : Usado para representar texto.
```tsx
let nome: string = "Alice";
```

2. `number` : Representa números, sejam inteiros ou decimais (portanto, cuidado ao combinar bibliotecas pois algumas exigem transformações usando `parseFloat()`).
```tsx
let idade: number = 30;
let altura: number = 1.75;
```

3. `boolean`: Representa valores __lógicos__ (`true` ou `false`).
```tsx
let isAdmin: boolean = true;
```

4. `null` e `undefined`: `null` representa a ausência __intencional__ de valor. `undefined` significa que a variável __foi declarada,__ mas ainda não tem valor.
```tsx
let endereco: string | null = null;
let telefone: string | undefined;
```

### Tipos Complexos
1. **`Array`**: Uma coleção de elementos do mesmo tipo.
    
```tsx
let numeros: number[] = [1, 2, 3, 4, 5];
```
    
Uma alternativa para não deixar o usuário, e nem os devs, preencherem o array com qualquer coisa é tipar também o tipo de dado que o Array pode receber:

```tsx
let numeros: Array<number> = [1, 2, 3, 4, 5];
```
    
2. **`Tupla`**: Um array de tamanho fixo onde cada elemento pode ter um tipo diferente. Essa sequência se repete sempre que for adicionado algo novo.
    
```tsx
let pessoa: [string, number, boolean] = ["Alice", 30, true];
```
        
3. **`Enum`**: Um conjunto nomeado de constantes, usado para representar valores que podem ter um conjunto fixo de possibilidades.
    
```tsx
enum Cor {
    Vermelho,
    Verde,
    Azul
}
let corFavorita: Cor = Cor.Vermelho;
```

### Interfaces e Tipos Customizados
1. **`Interface`**: Define a estrutura de um objeto, especificando os tipos de dados para suas propriedades.

```tsx
interface Pessoa {
    nome: string;
    idade: number;
    isAdmin: boolean;
}
        
let usuario: Pessoa = {
    nome: "Alice",
    idade: 30,
    isAdmin: true
};
```
    
2. **`Type`**: Usado para criar tipos complexos ou *alias* para tipos já existentes.
    
```tsx
type ID = string | number;
let idUsuario: ID = 12345;
```
        
### Estruturas de Controle e Funções

1. **Funções Tipadas**: As funções em TypeScript podem ter tipos definidos para seus parâmetros e valor de retorno.
    
```tsx
function soma(a: number, b: number): number {
    return a + b;
}
    
let resultado: number = soma(5, 10);
```
    
2. **Funções Anônimas e Arrow Functions**:
    
```tsx
let multiplicar = (a: number, b: number): number => {
    return a * b;
};
```

### Classes e Herança

1. **Classes**: TypeScript suporta a criação de classes, que podem incluir propriedades e métodos.
    
```tsx
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    falar(): void {
        console.log(`${this.nome} faz algum som.`);
    }
}

let animal = new Animal("Cachorro");
animal.falar(); // "Cachorro faz algum som."
```
    
2. **Herança**: Classes podem estender outras classes, herdando suas propriedades e métodos.
    
```tsx
class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    falar(): void {
        console.log(`${this.nome} late.`);
    }
}

let meuCachorro = new Cachorro("Rex");
meuCachorro.falar(); // "Rex late."
```

### Generics

1. **Tipos Genéricos**: Permitem criar componentes reusáveis que funcionam com qualquer tipo de dado.
    
```tsx
function identidade<T>(valor: T): T {
    return valor;
}

let meuNumero = identidade<number>(10);
let meuTexto = identidade<string>("Olá");
```
    
2. **Interfaces Genéricas**:
    
```tsx
interface Par<T, U> {
    primeiro: T;
    segundo: U;
}
    
let parNumeros: Par<number, number> = { primeiro: 1, segundo: 2 };
let parStrings: Par<string, string> = { primeiro: "um", segundo: "dois" };
```
    
---
### 1. Trabalhando com Tipos Complexos e Payloads

Em aplicações reais, você frequentemente trabalhará com dados que vêm de uma API. Veremos abaixo como modelar esses dados em TypeScript utilizando exemplos como usuários, payloads de requisições e respostas, e outras tipagens.

### 1.1. Modelando Usuários

Imagine que você está criando uma aplicação onde precisa manipular informações de usuários. Abaixo está uma interface que define a estrutura de um objeto `User`.
    
```tsx
interface Address {
    street: string;
    city: string;
    postalCode: string;
    country: string;
}
    
interface User {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
    address: Address;  // Associação com outra interface já existente no mesmo arquivo, mas que você também pode chamar de um arquivo externo
    createdAt: Date;
    updatedAt: Date;
}
        
const user: User = {
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    isActive: true,
    address: {
        street: "123 Main St",
        city: "Springfield",
        postalCode: "12345",
        country: "USA"
    },
    createdAt: new Date(),
    updatedAt: new Date(),
};
```

### 1.2. Tipando Payloads de Requisições

Em uma aplicação web, você pode ter um endpoint para criar um novo usuário. Abaixo, definimos a tipagem para o payload de envio da requisição de criação de usuário.

```tsx
interface CreateUserPayload {
    username: string;
    email: string;
    password: string;
    address?: Address;  // Campo opcional, por isso temos o "?"
}

const newUserPayload: CreateUserPayload = {
    username: "janedoe",
    email: "jane@example.com",
    password: "securePassword123",
    address: {
        street: "456 Elm St",
        city: "Springfield",
        postalCode: "54321",
        country: "USA"
    }
};
```

Aqui, usamos a palavra-chave `?` para indicar que o campo `address` é opcional. Isso é útil quando nem todos os usuários possuem um endereço na criação, facilitando para que você não crie duas interfaces diferentes que se diferenciam por causa de um único campo.

### 1.3. Tipagem de Respostas de API

Muitas vezes, a resposta de uma API inclui informações paginadas (o que é o correto), com listas de usuários, por exemplo. Vamos definir a tipagem para uma resposta paginada que retorna uma lista de usuários.

```tsx
interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    perPage: number;
}

interface UserResponse {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const usersResponse: PaginatedResponse<UserResponse> = {
    data: [
        {
            id: 1,
            username: "johndoe",
            email: "john@example.com",
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            username: "janedoe",
            email: "jane@example.com",
            isActive: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ],
    total: 2,
    page: 1,
    perPage: 10
};
```

Aqui, a interface `PaginatedResponse` é genérica e pode ser reutilizada para qualquer tipo de dados paginados. Ela aceita um tipo genérico `T`, permitindo flexibilidade. Assim, por exemplo, você pode fazer com que você use o `PaginatedResponse` em outros locais passando somente o `data: T[]` que sempre se modifica.

### 2. Utilizando `Union Types` e `Intersection Types`

### 2.1. Union Types

Às vezes, um valor pode ter mais de um tipo, seja por que você precisa trabalhar de uma forma diferente no front ou por que o back-end trata isso de mais de uma forma possível. Um exemplo comum é o ID de um usuário, que pode ser uma string ou um número.

```tsx
type UserID = string | number;

let userId: UserID;

userId = "abc123";  // válido
userId = 987654;    // válido
```

Isso é útil em cenários onde os dados podem vir de diferentes fontes (por exemplo, um banco de dados pode retornar o ID como número, enquanto uma API pode retornar como string).

### 2.2. Intersection Types

Intersection Types permitem combinar múltiplas interfaces em uma. Isso é útil quando você deseja criar um tipo que combina as propriedades de várias interfaces.

```tsx
interface Admin {
    adminLevel: number;
    permissions: string[];
}

type AdminUser = User & Admin;

const adminUser: AdminUser = {
    id: 1,
    username: "adminuser",
    email: "admin@example.com",
    isActive: true,
    address: {
        street: "789 Oak St",
        city: "Springfield",
        postalCode: "67890",
        country: "USA"
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    adminLevel: 5,
    permissions: ["read", "write", "delete"]
};
```

Nesse exemplo, `AdminUser` combina as propriedades de `User` e `Admin`, criando um tipo que inclui todas as propriedades de ambos.

### 3. Classes e Métodos Tipados

TypeScript também permite que você crie classes com tipagem forte. Vamos criar uma classe `UserService` que manipula objetos de usuários.

```tsx
class UserService {
    private users: User[] = [];

    createUser(payload: CreateUserPayload): User {
        const newUser: User = {
            id: this.users.length + 1,
            ...payload,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.users.push(newUser);
        return newUser;
    }

    getUserById(userId: number): User | undefined {
        return this.users.find(user => user.id === userId);
    }

    updateUser(userId: number, updatePayload: Partial<CreateUserPayload>): User | undefined {
        const user = this.getUserById(userId);
        if (user) {
            Object.assign(user, updatePayload, { updatedAt: new Date() });
            return user;
        }
        return undefined;
    }

    deleteUser(userId: number): boolean {
        const index = this.users.findIndex(user => user.id === userId);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}
```

Nessa classe:

- `createUser` cria e retorna um novo usuário.
- `getUserById` retorna um usuário com base no ID ou `undefined` se não for encontrado.
- `updateUser` atualiza informações de um usuário específico.
- `deleteUser` remove um usuário da lista.

---

## Tópicos Importantes

Com o uso de Typescript é muito comum a cultura do copiar e colar e só modificar alguns trechos que precisam de alteração. Entretanto, quando estamos trabalhando com Typescript (e com qualquer outra linguagem) o famoso <kbd>CTRL + C</kbd> e <kbd>CTRL + V</kbd> pode causar confusão a longo prazo ou em próximas modificações no seu código. Por isso saiba tratar bem e manter uma comunicação flúida com os outros devs do seu time, ou , se só tiver você, mantenha uma comunicação efetiva com você mesmo. Os dados que tratamos no Typescript no front devem possuir a mesma tipagem que o back do seu projeto está usando e muitas vezes o famoso copiar e colar resolve problemas por alguns momentos mas pode causar dores de cabeça futuramente. 

É como uma analgésico que pode ou não sanar a sua dor, depende do seu repouso físico e atenção com o medicamento. No livro “O programador pragmático” de  Andrew Hunt, David Thomas eles tratam sobre os tipos de duplicação e todos eles se encaixam em qualquer projeto, principalmente quando tratamos de Typescript. 

💡 “O que você está tentando fazer é cultivar um ambiente em que seja mais
fácil encontrar e reutilizar coisas existentes em vez de criá-las novamente.
Se não for fácil, as pessoas não o farão. E se você não conseguir encorajar a reutilização, pode duplicar informações.”

_-Hunt, Andrew. O programador pragmático._    

---

### Referências

- [Documentação do Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- Abaixo terão também alguns vídeos sobre TypeScript
[![](https://markdown-videos-api.jorgenkh.no/youtube/lCemyQeSCV8?si=O7sWiW9PzchHA4Ff)](https://youtu.be/lCemyQeSCV8?si=O7sWiW9PzchHA4Ff)
[![](https://markdown-videos-api.jorgenkh.no/youtube/M57zuClvRbM?si=qk85E_FyBG2FZebU)](https://youtu.be/M57zuClvRbM?si=qk85E_FyBG2FZebU)
