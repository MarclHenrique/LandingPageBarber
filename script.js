  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    parallax: true,
    speed: 800,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
  
    
  });

 // Inicializa o EmailJS com seu User ID
 (function() {
    emailjs.init("YvEFHdD7cwdwYiPsm"); // Substitua pelo seu User ID
  })();

  // Envia o formulário
  document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Envia o formulário usando o EmailJS
    emailjs.sendForm('service_l2qdt5f', 'template_2gtpc15', this) // Substitua pelos seus IDs
      .then(function(response) {
        alert('Agendamento enviado com sucesso!');
        document.getElementById('form-agendamento').reset(); // Limpa o formulário
      }, function(error) {
        alert('Erro ao enviar o agendamento. Tente novamente.');
      });
  });