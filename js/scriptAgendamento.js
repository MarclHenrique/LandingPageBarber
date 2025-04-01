// Inicializar o EmailJS
(function(){
    emailjs.init("user_your_emailjs_user_id"); // Substitua pelo seu User ID do EmailJS
  })();
  
  // Função para enviar o e-mail
  document.getElementById('agendamento-form').addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      // Obter os dados do formulário
      const cliente_email = "cliente@dominio.com"; 
      const barbeiro_email = "barbeiro@dominio.com"; 
      
      const barbeiro = document.getElementById('barbeiro').value;
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
      const servicos = Array.from(document.getElementById('servicos').selectedOptions).map(option => option.value).join(", ");
      
      // Enviar e-mail para o cliente
      emailjs.sendForm('service_id', 'template_id', this)
          .then(function(response) {
              console.log('Sucesso', response);
              alert("Agendamento realizado com sucesso! Um e-mail de confirmação foi enviado.");
          }, function(error) {
              console.log('Falha', error);
              alert("Ocorreu um erro ao tentar agendar.");
          });
          
      // Definindo os parâmetros do e-mail
      var template_params = {
          to_email: cliente_email,
          subject: "Confirmação de Agendamento de Corte",
          message: `Você agendou um corte com o barbeiro <b>${barbeiro}</b> para o dia <b>${data}</b> às <b>${hora}</b>. Serviços selecionados: <b>${servicos}</b>.`
      };
  
      // Enviar e-mail para o barbeiro
      emailjs.send('service_id', 'template_id', template_params)
          .then(function(response) {
              console.log('E-mail enviado ao barbeiro:', response);
          }, function(error) {
              console.log('Falha no envio para o barbeiro:', error);
          });
  });
  