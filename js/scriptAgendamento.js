// Função para preencher o select com barbeiros
async function loadBarbeiros() {
    try {
        const response = await fetch('/api/barbeiros'); // URL da sua rota backend
        const barbeiros = await response.json();

        const barbeiroSelect = document.getElementById('barbeiro');

        // Limpa as opções anteriores
        barbeiroSelect.innerHTML = '';

        // Adiciona a opção "Escolha o Barbeiro"
        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Escolha o Barbeiro';
        defaultOption.value = '';
        barbeiroSelect.appendChild(defaultOption);

        // Adiciona cada barbeiro no select
        barbeiros.forEach(barbeiro => {
            const option = document.createElement('option');
            option.value = barbeiro.id;
            option.textContent = barbeiro.usuario.nome; // Assuming the name is in "usuario.nome"
            barbeiroSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar barbeiros:', error);
    }
}

// Chama a função para carregar os barbeiros ao carregar a página
document.addEventListener('DOMContentLoaded', loadBarbeiros);
