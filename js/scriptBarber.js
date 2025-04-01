// Exemplo de como carregar os barbeiros na página
const carregarBarbeiros = async () => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      window.location.href = '/login.html';  // Redireciona para o login caso não esteja autenticado
    }
    
    const response = await fetch('/api/barbeiros', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    const barbeiros = await response.json();
    
    // Aqui você pode adicionar os barbeiros na página dinamicamente
    const barbeirosContainer = document.querySelector('.barbeiros-list');
    barbeiros.forEach(barbeiro => {
      const card = document.createElement('div');
      card.classList.add('barbeiro-card');
      card.innerHTML = `
        <img src="${barbeiro.foto}" alt="${barbeiro.nome}" class="barbeiro-img">
        <h3>${barbeiro.nome}</h3>
        <p>Especialidade: ${barbeiro.especialidades.join(', ')}</p>
        <p>Atende a Domicílio: ${barbeiro.atende_domicilio ? 'Sim' : 'Não'}</p>
        <p>Avaliação: ${barbeiro.avaliacao}</p>
        <p>Serviços: ${barbeiro.servicos_oferecidos.join(', ')}</p>
        <p>Localização: ${barbeiro.localizacao}</p>
        <a href="#agendar" class="btn-cta">Agendar Corte</a>
      `;
      barbeirosContainer.appendChild(card);
    });
  };
  
  carregarBarbeiros();
  