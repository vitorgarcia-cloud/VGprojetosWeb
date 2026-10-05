# ⚙️ VG Projetos Web — Modelagem 3D & Detalhamento Técnico

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-4.4-FF6C37?style=for-the-badge&logo=mailgun&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-00C853?style=for-the-badge)

Website institucional e plataforma de portfólio para a **VG Projetos**, escritório especializado em engenharia CAD, modelagem 3D paramétrica em SolidWorks, detalhamento técnico 2D executivo (ABNT/ISO), caldeiraria, engenharia reversa e compatibilização dimensional para fabricação industrial.

---

##  Sumário
- [Demonstração & Recursos](#-demonstração--recursos)
- [Arquitetura & Tecnologias](#-arquitetura--tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Manutenção e Atualização de Conteúdos](#-manutenção-e-atualização-de-conteúdos)
- [Licença](#-licença)

---

##  Demonstração & Recursos

###  Destaques do Site:
* **Página Inicial (Home):** Hero banner moderno com estatísticas corporativas, chamada para ação imediata e catálogo resumido de especialidades técnicas.
* **Catálogo Completo de Serviços:** Apresentação detalhada dos 8 principais serviços oferecidos (Modelagem Paramétrica, Detalhamento 2D, Caldeiraria, Renderização 3D, Engenharia Reversa, USINAGEM CNC/Laser, Compatibilização e Projetos Especiais).
* **Estudos de Caso & Portfólio (Antes / Depois):** Galeria interativa de projetos por cliente com metodologia estruturada (Desafio Inicial &rarr; Solução Técnica &rarr; Resultado Alcançado) e comparativo visual das peças/conjuntos.
* **Carrossel Infinito de Clientes:** Slider contínuo com logos das empresas atendidas com navegação rápida para o estudo de caso correspondente.
* **Formulário de Orçamento Integrado:** Envio direto de propostas e memoriais para o e-mail corporativo utilizando a API do **EmailJS**, com gerador automático de mensagem pré-formatada para **WhatsApp** como canal rápido.
* **Design System Industrial Dark:** Interface corporativa escura com tons grafite (`#0b0c10`), acabamento metálico, tipografia de alta legibilidade (`Plus Jakarta Sans` e `Inter`) e layout 100% responsivo para desktop, tablets e smartphones.

---

##  Arquitetura & Tecnologias

O projeto é uma **Single Page Application (SPA)** construída com tecnologias web modernas focado em altíssimo desempenho e tempo de carregamento instantâneo.

| Categoria | Tecnologia | Utilização |
| :--- | :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) | Construção da interface baseada em componentes reativos |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) | Server de desenvolvimento super rápido e build otimizado |
| **Integração de E-mail** | [@emailjs/browser](https://www.emailjs.com/) | Disparo de e-mails direto pelo navegador sem necessidade de backend |
| **Estilização** | CSS3 Nativo & CSS Variables | Design system modular com variáveis de cor, animações sutis e resets |
| **Linting & Qualidade** | ESLint 10 + Babel | Validação de sintaxe e padrão de código em tempo de desenvolvimento |

---

##  Estrutura do Projeto

```text
VGprojetosWeb/
├── public/                     # Arquivos estáticos (Logos, imagens de projetos e favicon)
│   ├── vgLogo.png
│   ├── vgModelagem.jpg
│   ├── vgEngReversa.jpg
│   └── ...
├── src/
│   ├── components/             # Componentes modulares reutilizáveis
│   │   ├── common/             # Cards, Carrossel de Clientes e Botão WhatsApp
│   │   ├── contact/            # Formulário de Orçamento (EmailJS)
│   │   └── layout/             # Navbar com menu mobile e Footer
│   ├── data/                   # Centralização de dados (Edição rápida de textos e imagens)
│   │   ├── companyData.js      # Informações de contato, telefone, e-mail e slogan
│   │   ├── servicesData.js     # Catálogo e detalhes dos serviços fornecidos
│   │   └── clientProjectsData.js # Clientes, metodologia e imagens Antes/Depois
│   ├── pages/                  # Telas da aplicação (Home, Services, ClientProjects, Contact)
│   ├── styles/                 # index.css (Variáveis globais, tema e reset)
│   ├── App.jsx                 # Gerenciamento de estado de navegação e layout global
│   └── main.jsx                # Ponto de entrada da aplicação React
├── .env.example                # Exemplo das variáveis de ambiente necessárias
├── GUIA_DO_CODIGO.md           # Documentação detalhada para o proprietário editar dados
├── package.json                # Dependências e scripts do projeto
├── README.md                   # Documentação principal do repositório
└── vite.config.js              # Configurações do Vite
```

---

##  Como Executar o Projeto

### Pré-requisitos
* Node.js (versão 18.0.0 ou superior)
* npm (versão 9.0.0 ou superior)

### Passo a Passo

1. **Clonar o repositório ou acessar a pasta:**
   ```bash
   cd C:\DevNinja\VGprojetosweb\VGprojetosWeb
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a URL exibida no terminal (geralmente `http://localhost:5173`).

4. **Gerar a compilação para produção:**
   ```bash
   npm run build
   ```
   Os arquivos finais otimizados serão gerados na pasta `/dist`.

5. **Executar a verificação de linter:**
   ```bash
   npm run lint
   ```

---

##  Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

*Nota: Caso as variáveis não estejam preenchidas no `.env`, o sistema possui um fallback pré-configurado no `ContactForm.jsx` para testes imediatos.*

---

##  Manutenção e Atualização de Conteúdos

Para alterar telefones, e-mail de contato, adicionar novos serviços ou atualizar imagens dos projetos realizados:

1. Abra a pasta `src/data/`.
2. Edite os arquivos JS correspondentes (`companyData.js`, `servicesData.js`, `clientProjectsData.js`).
3. Para mais orientações, consulte o guia passo a passo em [GUIA_DO_CODIGO.md](GUIA_DO_CODIGO.md).

---

##  Licença

Este projeto é de uso exclusivo da empresa **VG Projetos**. Todos os direitos reservados.
