# Barbearia Estilo

Este é um projeto de uma landing page moderna para uma barbearia, com funcionalidades como agendamento online, galeria de imagens interativa e animações durante a rolagem da página.

## 🚀 Como Visualizar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina:

### Pré-requisitos
- Um navegador moderno (Google Chrome, Firefox, Edge, etc.).
- Um editor de código (VS Code, Sublime Text, etc.).
- Node.js (opcional, apenas se quiser rodar um servidor local).

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/barbearia-estilo.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd barbearia-estilo
   ```

3. **Abra o projeto no navegador:**
   Abra o arquivo `index.html` no seu navegador.

   Ou, se preferir, use um servidor local. Se você tem o Node.js instalado, pode usar o live-server:
   ```bash
   npx live-server
   ```

   Pronto! O projeto estará rodando localmente no seu navegador.

## 🌐 APIs Utilizadas
O projeto utiliza as seguintes APIs:

1. **EmailJS**  
   **Função:** Envio de e-mails diretamente do formulário de agendamento.

   **Como é usada:** Quando o usuário preenche o formulário de agendamento, os dados são enviados para o EmailJS, que dispara um e-mail para o proprietário da barbearia.

   **Documentação:** [EmailJS Docs](https://www.emailjs.com/docs/)

2. **Swiper**  
   **Função:** Criação de um carrossel de imagens interativo.

   **Como é usada:** Exibe imagens da barbearia em um slider responsivo.

   **Documentação:** [Swiper Docs](https://swiperjs.com/)

## 📑 Bibliotecas Externas
O projeto utiliza as seguintes bibliotecas externas:

1. **AOS (Animate On Scroll)**  
   **Função:** Adiciona animações aos elementos da página à medida que o usuário rola a tela.

   **Como é usada:** Animações de fade, zoom e slide são aplicadas nas seções da página.

   **Documentação:** [AOS Docs](https://michalsnik.github.io/aos/)

2. **Swiper**  
   **Função:** Criação de sliders e carrosséis responsivos.

   **Como é usada:** Exibe imagens da barbearia em um carrossel interativo.

   **Documentação:** [Swiper Docs](https://swiperjs.com/)

3. **EmailJS**  
   **Função:** Envio de e-mails diretamente do formulário de agendamento.

   **Como é usada:** Integração com o formulário de agendamento para enviar os dados do cliente.

   **Documentação:** [EmailJS Docs](https://www.emailjs.com/docs/)

## 🛠️ Estrutura do Projeto
O projeto está organizado da seguinte forma:

```
barbearia-estilo/
│
├── assets/               # Pasta de imagens e recursos
│   ├── barba.jpg         # Imagem de exemplo
│   ├── corte.jpg         # Imagem de exemplo
│   └── corte2.jpg        # Imagem de exemplo
│
├── index.html            # Arquivo principal HTML
├── styles.css            # Arquivo de estilos CSS
├── script.js             # Arquivo de scripts JavaScript
└── README.md             # Este arquivo
```

## 🧠️ Como Contribuir
1. Faça um fork do projeto.

2. **Crie uma branch para sua feature:**
   ```bash
   git checkout -b minha-feature
   ```

3. **Commit suas mudanças:**
   ```bash
   git commit -m 'Adicionei uma nova feature'
   ```

4. **Push para a branch:**
   ```bash
   git push origin minha-feature
   ```

5. **Abra um Pull Request.**

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
