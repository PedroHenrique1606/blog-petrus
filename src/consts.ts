import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Petrus Blog",
  DESCRIPTION: "Bem vindo ao meu Blog desenvolvido com Astro.",
  AUTHOR: "Pedro Henrique",
}

// Work Page
export const WORK: Page = {
  TITLE: "Trabalhos",
  DESCRIPTION: "Trabalhos e formações",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projetos",
  DESCRIPTION: "Projetos que venho trabalhando recentemente.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Pesquisar",
  DESCRIPTION: "Pesquise usando palavras chaves...",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Trabalhos",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projetos",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "pedromelo.dev.contato@gmail.com",
    HREF: "mailto:pedromelo.dev.contato@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "PedroHenrique1606",
    HREF: "https://github.com/markhorn-dev/astro-sphere"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Pedro Henrique",
    HREF: "https://www.linkedin.com/in/pedro-henrique-melo-da-silva-a7a700231/",
  },
  {
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "pedrohenrique.trc",
    HREF: "https://www.instagram.com/pedrohenrique.trc/"
  },
]

