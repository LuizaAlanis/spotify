# Clone Simplificado do Spotify
![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)

![ScreenShot](https://github.com/LuizaAlanis/spotify/blob/master/src/image/readme/application.png)

*desktop*

![ScreenShot](https://github.com/LuizaAlanis/spotify/blob/master/src/image/readme/application_mobile.png)

*mobile*

Você pode acessar o protótipo e o conceito pelo figma:
[Figma link](https://www.figma.com/file/9SWaueUEExWPaTif4bUGEF/Spotify?type=design&node-id=0%3A1&mode=design&t=XuM8peV3daip1b2L-1)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

Este projeto é um clone simplificado do Spotify, implementado em React. Que inclui:

1) GRID responsivo em CSS
2) Styled Components.

## Reflexões

1) Como estou aplico os conceitos de grid para um design responsivo?

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    place-items: center;
}
```

- Declaro a opção de layout *grid*
- A função *"repeat"* repete automaticamente as colunas conforme necessário.
- O *"auto-fill"* permite que o navegador determine quantas colunas podem ser encaixadas no contêiner.
- *"minmax(280px, 1fr)"* estabelece que cada coluna terá no mínimo 280 pixels e no máximo ocupará uma fração igual do espaço disponível *("1fr")*.
- Defino o espaçamento entre as células da grade, neste caso, *20 pixels*.
- Estica os itens ao longo do eixo transversal (eixo vertical neste caso) para preencher o contêiner com *"stretch"*.
- Centralizo os itens tanto ao longo do eixo horizontal quanto do vertical na célula da grade com *center*.

2) As vantagens de implementar Styled Components

- **Encapsulação:** Cria estilos encapsulados para cada componente, evitando poluição do escopo global de estilos e reduzindo possíveis conflitos.

- **JavaScript-in-CSS:** Utiliza JavaScript para escrever estilos, permitindo a criação dinâmica de estilos com base em props ou estados do componente.

- **Facilidade de Manutenção:** Coloca estilos diretamente no componente, tornando mais fácil localizar, entender e manter os estilos relacionados a um componente específico.

- **Reutilização:** Encoraja a reutilização de estilos, pois os componentes estilizados podem ser facilmente utilizados em diferentes partes da aplicação.

- **Integração com Temas:** Permite a criação de temas globais que podem ser facilmente alterados em toda a aplicação.

- **Suporte a Server-Side Rendering (SSR):** Pode ser usado com SSR, garantindo que os estilos sejam renderizados corretamente tanto no lado do cliente quanto no servidor.

- **Dinamicamente Atualizável:** Permite a atualização dinâmica de estilos em tempo de execução, facilitando a criação de interfaces interativas.

- **Ferramentas Modernas:** Integrável com ferramentas modernas de desenvolvimento, como o VSCode, proporcionando destaque de sintaxe e autocompletar para estilos no código JavaScript.

- **Performance Otimizada:** Pode ser otimizado para melhorar o desempenho, gerando automaticamente classes únicas e removendo estilos não utilizados.

- **Composição de Estilos:** Facilita a composição de estilos, permitindo a construção de estilos complexos a partir de estilos mais simples.

```js
import styled from 'styled-components';

// Criação de um componente estilizado
const MeuComponenteEstilizado = styled.div`
    /* Estilos CSS aqui */
    font-size: 16px;
    color: #333;
    padding: 10px;
    border: 1px solid #ccc;
`;

// Componente React que utiliza o componente estilizado
const MeuComponente = () => {
    return (
        <MeuComponenteEstilizado>
            Conteúdo estilizado aqui
        </MeuComponenteEstilizado>
    );
};

export default MeuComponente;
```

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

## Como Iniciar

clone o projeto
```bash
git clone git@github.com:LuizaAlanis/spotify.git
```

rode o comando install
```bash
npm install
```

inicie a aplicação
```bash
npm start
```

## Obs

- Os dados são de um mockup pré definido mas o mesmo layout poderia ser utilizado para renderizar dados diretamente da API.
- O design foi projeto para ser completamente responsivo com o uso do Grid layout
- Como boa prática, inclui variáveis de css, uma boa arquitetura de diretórios e mantive a responsabilidade dos componentes bem isolada, o que proporciona o dinamismo.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
