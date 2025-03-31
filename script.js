const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: false,
  parallax: true,
  speed: 800,

  // Navegação
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Paginação
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsividade
  breakpoints: {
    320: { // Telas pequenas
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: { // Telas médias
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: { // Telas grandes
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  // Autoplay
  autoplay: {
    delay: 5000, // Muda de slide a cada 5 segundos
    disableOnInteraction: false, 
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true, 
  },
});

// Envia o formulário
document.getElementById('form-contato').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Desabilita o botão de envio
  const submitButton = event.target.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  // Validação dos campos
  const nome = event.target.nome.value.trim();
  const email = event.target.email.value.trim();
  const mensagem = event.target.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar';
    return;
  }

  // Envia o formulário usando o EmailJS
  emailjs.sendForm('service_l2qdt5f', 'template_2gtpc15', this)
    .then(function (response) {
      // Feedback visual de sucesso
      const feedback = document.createElement('div');
      feedback.textContent = 'Mensagem enviada com sucesso!';
      feedback.classList.add('feedback-success');
      event.target.appendChild(feedback);

      // Limpa o formulário
      event.target.reset();

      // Remove o feedback após 3 segundos
      setTimeout(() => feedback.remove(), 3000);
    }, function (error) {
      // Feedback visual de erro
      const feedback = document.createElement('div');
      feedback.textContent = 'Erro ao enviar a mensagem. Tente novamente.';
      feedback.classList.add('feedback-error');
      event.target.appendChild(feedback);

      // Remove o feedback após 3 segundos
      setTimeout(() => feedback.remove(), 3000);
    })
    .finally(() => {
      // Reabilita o botão de envio
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar';
    });
});

// Inicializa a AOS (Animation On Scroll)
AOS.init({
  duration: 1000, // Duração da animação em milissegundos
  once: false, // A animação ocorre sempre
});