// Inicializar EmailJS
emailjs.init('SEU_USER_ID'); // Insira o User ID gerado pelo EmailJS

const form = document.getElementById('form-agendamento');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const serviceID = 'seu_service_id';
  const templateID = 'seu_template_id';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => alert('Agendamento enviado com sucesso!'),
    (err) => alert('Erro ao enviar agendamento. Tente novamente.')
  );
});

// Inicialização do Swiper.js
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  