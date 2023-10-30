<div id="top"></div>

<br />
<div align="center">
  <a href="https://reactnative.dev/">
    <img src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" alt="Logo React Native" width="80" height="80">
  </a>

<h3 align="center">Serratec Classes</h3>

  <p align="center">
    Projeto feito para aulas em React Native, o mesmo aplicativo foi feito no Expo e no Cli. Um slide para acompanhamento foi criado.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabela de Conteúdos</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Feito com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Iniciando o Projeto</a>
      <ul>
        <li><a href="#prerequisites">Prerequisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Uso</a></li>
    <ul>
      <li><a href="#content">Conteúdo</a></li>
      <ul>
        <li><a href="#exercicio1">Exercicio 1</a></li>
        <li><a href="#exercicio2">Exercicio 2</a></li>
        <li><a href="#exercicio3">Exercicio 3</a></li>
        <li><a href="#exercicio4">Exercicio 4</a></li>
        <li><a href="#exercicio5">Exercicio 5</a></li>
        <li><a href="#exercicio6">Exercicio 6</a></li>
      </ul>
    </ul>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

<div style={{ display: flex, flex-direction: row }}>
  <p>Projeto em react native, usando typescript, onde foi realizado, uma tela que lista os sonhos em cards ordenandos por data e mostra as fases da lua através de uma api, um modal para cadastro de novos sonhos, uma tela que mostra detalhes sonhos, e uma tela mostrando apenas os Sonhos favoritados. Cada card contém um botão de favoritar.</p>

  <!-- TODO: Ter screenshots maneiros -->
  <img src="https://github.com/BragaMPedro/ReactNative_2023-2/blob/main/images/Splashscreen.png?raw=true" alt="Tela Placeholder" width="200" height="500">
 </div>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-  [ReactNative](https://reactnative.dev/)
-  React Native Cli
-  [Expo](https://docs.expo.dev/)
-  JavaScript
-  TypeScript
-  [Axios](https://github.com/axios/axios)
-  [react-navigation](https://reactnavigation.org/docs/getting-started/)
-  [Moon Phases API](http://www.wdisseny.com/lluna/?lang=en)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Iniciando o projeto

Para conseguir rodar o projeto são nescessário alguns pre-requisitos e a instalação do projeto.

### Prerequisites

Todos os pre-requisitos são explicados em aula e o passo a passo também. Seguindo a documentação https://reactnative.dev/docs/environment-setup.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/BragaMPedro/ReactNative_2023-2/
   ```
2. Vá para pasta do exercício que deseja fazer
   ```sh
   cd Exercicio_1
   ```
3. Instale os pacotes
   ```sh
   npm install;
   ```
   ou
   ```sh
   yarn install;
   ```
4. Inicie o projeto
   ```sh
   npx expo start;
   ```
   ou (caso de emuladores)
   ```sh
   yarn android;
   ```
   ou
   ```sh
   npm android;
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Uso

Esse é um projeto de ensino e feito para isso. Criado para ensinar a criação de componentes, estilização, utilização de contextos, utilização de banco de dados embarcado, utilização de requisições para API e navegação, utilizando typescrypt para todas as etapas.
Cada pasta contém a etapa anterior completa, e dever ser utilizada para continuar o desenvolvimento do app de acordo com a seção "Conteúdo" deste material.

### Conteúdo

#### Exercicio 1
<div style={{ display: flex, flex-direction: row }}>
  <p>
    No Exercício 1 o objetivo é criar o projeto e fazer um clone visual da tela abaixo. Nãao é necessário que existam funções atreladas aos botões e aos Input
  </p>

  <img src="https://github.com/BragaMPedro/ReactNative_2023-2/blob/main/images/Splashscreen.png?raw=true" alt="Tela Placeholder" width="200" height="500">
 </div>

#### Exercicio 2
<div style={{ display: flex, flex-direction: row }}>
  <p>
    No Exercício 2 o objetivo será componentizar a tela anteriormente criada, agora dando funções às partes necessárias. Sendo possível cadastrar e adicionar um sonho a uma lista que será mostrada na página inicial.
  </p>

  <img src="https://github.com/BragaMPedro/ReactNative_2023-2/blob/main/images/Splashscreen.png?raw=true" alt="Tela Placeholder" width="200" height="500">
 </div>

#### Exercicio 3
<div style={{ display: flex, flex-direction: row }}>
  <p>
    No Exercício 3 deverá ser feita possível uma navegação até uma segunda página onde posteriormente serão inseridos a lista de sonhos "favoritados".
  </p>

  <img src="https://github.com/BragaMPedro/ReactNative_2023-2/blob/main/images/Splashscreen.png?raw=true" alt="Tela Placeholder" width="200" height="500">
 </div>

#### Exercicio 4
<div style={{ display: flex, flex-direction: row }}>
  <p>
    No Exercício 4 deverá ser criado um service para requisições utilizando a <a href="http://www.wdisseny.com/lluna/?lang=en">MoonPhaseAPI</a>. na tela inicial, acima do botão "Adicionar Sonho" deverá ser exibida fase da lua do dia atual, juntamente com o ano, mês, dia do mês e da semana.
  </p>

  <img src="https://github.com/BragaMPedro/ReactNative_2023-2/blob/main/images/Splashscreen.png?raw=true" alt="Tela Placeholder" width="200" height="500">
 </div>

#### Exercicio 5
<div style={{ display: flex, flex-direction: row }}>
  <p>
    No Exercício 5 deverá ser criado um Contexto que contenha os métodos necessários para "favoritar" um sonho. O botão "favoritar" deverá ser adicionado ao componente Card de sonho e implementar os métodos do contexto.
    Os sonhos favoritados deverão ser exibidos na tela anteriormente criada para eles.(<a href="#exercicio-3"> ver Exercício 3 </a>)
  </p>

  <img src="https://github.com/BragaMPedro/ReactNative_2023-2/blob/main/images/Splashscreen.png?raw=true" alt="Tela Placeholder" width="200" height="500">
 </div>

#### Exercicio 6
<div style={{ display: flex, flex-direction: row }}>
  <p>
    Por fim Exercício 6 será feita a integração com o banco de dados embarcado. Deverá ser utilizado o AsyncStorage para guardar sonhos criados.
  </p>

  <img src="https://github.com/BragaMPedro/ReactNative_2023-2/blob/main/images/Splashscreen.png?raw=true" alt="Tela Placeholder" width="200" height="500">
 </div>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contato

Frederico Henrichs Sheremetieff - frederico.shere@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
