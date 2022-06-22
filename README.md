# Agenda de contatos
Aplicativo de agenda de contatos, feito com React pondo na pratica a instrução e orientação da Toti na Turma 15 de "Programador Full-Stack".

## Conteudo

- [Visão geral](#visao-geral)
  - [Rascunho](#rascunho)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Feito com](#feito-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Recursos úteis](#recursos-uteis)
- [Autor](#autor)

## Visão geral

### Rascunho

<!-- ![](/src/imagens/Portofolio.png)
<div> 
  <img align="center" height="150em" src="/src/imagens/Contato.png" />
  <img align="center" height="150em" src="/src/imagens/Sobre.png" />
  <img align="center" height="150em" src="/src/imagens/Habilidades.png" />
</div> -->

### Links

- Codigo na web URL: [GitHub](https://github.com/Akherox/contact-list)
<!-- - Site ao vivo URL: [Vercel Pages](https://portofolio-akherox.vercel.app/) -->

## Meu processo

### Feito com

- React e o JSON-Server.

### O que eu aprendi (até agora)

Trabalhar com "react-router-dom" as rotas e o comportamento delas.
Ocultar e mostrar conteudo na tela com os states.
Tirar a decoração dos links do CSS.

```jsx
<Routes>
    <Route exact path="/" element={<Contacts />}/>
    <Route exact path='/add' element={<AddContact/>}/>
</Routes>
```
```jsx
<div className="media-content" style={{ overflow: "hidden" }}>
    <p className="title is-4 is-capitalized">
        {name.first}{" "}
        {name.last}
        <span className={c} onClick={this.showContactHandler} />
    </p>
    <p className="subtitle is-6 is-capitalized">
        {email}
    </p>
</div>
```
```css
.link {
    text-decoration: none !important;
    margin-right: 10px;
}
```

### Desenvolvimento contínuo

Tenho dificuldades com os props e os states quando passam informações, vou estudar mais isso.

### Recursos úteis

- [Recurso das aulas react](https://github.com/toti-br/react-aula-1-turma-15)
- [Recurso do CSS usado](https://bulma.io/)
- [Recurso de icones](https://fontawesome.com/v5/search)
- Estes são os recursos que usei no desenvolvimento desda "APP".

## Autor

- Website - [Bryan Bravo](https://www.linkedin.com/in/alex-bravo-008-mk)