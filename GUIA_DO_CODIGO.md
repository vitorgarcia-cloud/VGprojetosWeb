# 📘 Guia Completo do Código - VG Projetos Web

Este guia foi criado especialmente para você entender **como o site funciona por baixo dos panos**, como a arquitetura em **React** está organizada e **onde fazer cada tipo de alteração** (textos, imagens, logos, contatos, etc.) de forma simples e direta.

---

## 🏗️ 1. O que é este projeto e como ele funciona?

O site foi construído utilizando **React** com **Vite**.
Diferente de um site HTML tradicional onde cada página é um arquivo `.html` separado, no React o site é uma **Single Page Application (SPA)**:
1. Existe um único arquivo HTML inicial (`index.html`).
2. O JavaScript (React) renderiza e troca os blocos visuais na tela dinamicamente de acordo com o que o usuário clica, **sem precisar recarregar a página inteira no navegador**.
3. O código é modular, dividido em **Páginas**, **Componentes reutilizáveis** e **Arquivos de Dados** (onde ficam os textos e informações).

---

## 📁 2. Mapa das Pastas e Arquivos

Veja como o projeto está organizado dentro da pasta `src/`:

```text
VGprojetosWeb/
├── public/                     📁 Pasta para arquivos estáticos diretos (fotos, logos, etc.)
├── src/
│   ├── main.jsx                🚀 Ponto de entrada do React (inicializa tudo)
│   ├── App.jsx                 🧭 "Cérebro" de navegação (decide qual tela mostrar)
│   ├── index.css               🎨 Cores globais, fontes e variáveis do tema
│   │
│   ├── data/                   📊 ONDE VOCÊ EDITA OS TEXTOS E CONTEÚDOS (O mais importante!)
│   │   ├── companyData.js          -> Dados da empresa (nome, e-mail, telefone, slogan)
│   │   ├── servicesData.js         -> Lista dos 8 serviços oferecidos
│   │   └── clientProjectsData.js   -> Lista de clientes, projetos e antes/depois
│   │
│   ├── pages/                  📄 As Telas / Páginas principais
│   │   ├── Home.jsx (.css)         -> Página Inicial (Hero, resumo, destaques)
│   │   ├── Services.jsx (.css)     -> Página de Serviços (Catálogo completo)
│   │   ├── ClientProjects.jsx (.css) -> Estudos de caso dos clientes (Antes e Depois)
│   │   └── Contact.jsx (.css)      -> Página de Contato e formulário
│   │
│   └── components/             🧩 Peças visuais que se repetem no site
│       ├── layout/
│       │   ├── Navbar.jsx (.css)   -> Barra de menu do topo
│       │   └── Footer.jsx (.css)   -> Rodapé do site
│       ├── common/
│       │   ├── ServiceCard.jsx     -> O cartão individual de cada serviço
│       │   └── ClientsCarousel.jsx -> O carrossel com logos dos clientes
│       └── contact/
│           └── ContactForm.jsx     -> O formulário de envio de orçamento
```

---

## 🧭 3. Entendendo o Fluxo: Como a Navegação Funciona?

Abra o arquivo `src/App.jsx`:

```jsx
export default function App() {
  // 'activePage' guarda qual página está visível no momento ('inicio', 'servicos', 'projetos-clientes', 'contato')
  const [activePage, setActivePage] = useState('inicio');

  // Função chamada quando qualquer botão do menu ou do site é clicado
  const handleNavigate = (page, params = {}) => {
    setActivePage(page);
  };
  ...
```

1. Quando você clica em **"Serviços"** no Menu do topo (`Navbar.jsx`), ele chama `onNavigate('servicos')`.
2. O `App.jsx` atualiza o estado `activePage` para `'servicos'`.
3. O React instantaneamente esconde a Home e desenha a página `Services.jsx` na tela.

---

## 📝 4. Onde e Como Fazer Modificações (Passo a Passo)

A maior vantagem desta estrutura é que **você quase não precisa mexer em lógica complexa de JS para mudar conteúdos**. A maioria das alterações é feita diretamente na pasta `src/data/`.

---

### A Alterar Dados da Empresa, Telefone, WhatsApp e E-mail
* **Arquivo:** `src/data/companyData.js`
* **O que você encontra lá:**
  ```javascript
  export const companyData = {
    name: 'VG Projetos',
    phone: '(19) 99999-9999',     // Altere seu telefone aqui
    email: 'contato@vgprojetos.com.br', // Altere seu e-mail aqui
    location: 'São Paulo - SP',
    // ...
  };
  ```

---

### B Alterar a Lista de Serviços ou Imagens de Fundo dos Cards
* **Arquivo:** `src/data/servicesData.js`
* **O que você encontra lá:**
  ```javascript
  {
    id: 'modelagem-3d',
    title: 'Modelagem 3D Paramétrica',
    category: 'Engenharia CAD',
    description: 'Criação de peças...',
    image: 'https://images.unsplash.com/photo-...' // Link da imagem do card
  }
  ```
  *Para usar uma imagem local sua:*
  1. Salve sua foto em `public/images/servico1.jpg`.
  2. Mude o campo para: `image: '/images/servico1.jpg'`.

---

### C Alterar Textos dos Projetos e Imagens de Antes/Depois
* **Arquivo:** `src/data/clientProjectsData.js`
* **Estrutura de cada projeto:**
  ```javascript
  {
    id: 'techmach',
    name: 'TechMach Indústria & Automação',
    description: 'Fabricante de células...',
    projects: [
      {
        title: 'Redesenho Paramétrico de Braço...',
        problem: 'O modelo original apresentava...',
        technicalSolution: 'Remodelagem 3D...',
        result: 'Redução de 32% no peso...',
        images: {
          before: {
            title: 'Antes: Modelo Geométrico Pesado',
            description: 'Explicação do problema...',
            url: '/images/antes-1.jpg' // <-- URL ou caminho da foto
          },
          after: {
            title: 'Depois: Montagem Otimizada',
            description: 'Explicação da solução...',
            url: '/images/depois-1.jpg' // <-- URL ou caminho da foto
          }
        }
      }
    ]
  }
  ```

---

### D Alterar as Logos dos Clientes
* **Arquivo:** `src/components/common/ClientsCarousel.jsx`
* Atualmente as logos são ícones SVG gerados por código dentro do componente `ClientLogo`.
* Se você quiser usar **imagens PNG ou SVG normais**:
  Você pode simplesmente colocar o arquivo na pasta `public/logos/cliente1.png` e alterar a renderização para uma tag `<img src="/logos/cliente1.png" alt="Cliente" />`.

---

## 💡 5. Como o React funciona (Conceitos Essenciais para Iniciantes)

| Conceito | O que significa na prática? | Exemplo no projeto |
| :--- | :--- | :--- |
| **Componente (JSX)** | Uma função JavaScript que retorna "HTML com superpoderes". Começa sempre com letra maiúscula. | `function ServiceCard(...) { return <div className="...">...</div>; }` |
| **Props (Propriedades)** | Parâmetros passados para um componente (como atributos HTML). | `<ServiceCard service={item} />` (`service` é a prop). |
| **State (`useState`)** | A "memória" do componente. Quando o valor muda, a tela se atualiza sozinha. | `const [activePage, setActivePage] = useState('inicio');` |
| **Array `.map()`** | Forma padrão do JS para percorrer uma lista de itens e transformar em elementos na tela. | `{servicesData.map(service => <ServiceCard key={service.id} ... />)}` |

---

## 🛠️ 6. Como testar suas mudanças no computador?

No terminal (PowerShell ou Prompt de Comando) dentro da pasta do projeto:
1. Iniciar o servidor local:
   ```bash
   npm run dev
   ```
2. Abra o link que aparecer (normalmente `http://localhost:5173`).
3. Toda vez que você salvar um arquivo (`Ctrl + S`), o navegador atualiza instantaneamente!
