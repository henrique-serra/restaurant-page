function loadHome() {
    const content = document.getElementById('content');
    
    // Criar o container principal
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    
    // Criar imagem
    const homeImage = document.createElement('img');
    homeImage.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=450&q=80';
    homeImage.alt = 'Restaurante Delícia';
    homeImage.classList.add('home-image');
    
    // Criar div para conteúdo textual
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    
    // Criar título
    const homeTitle = document.createElement('h2');
    homeTitle.textContent = 'Bem-vindo ao Restaurante Delícia';
    
    // Criar descrição
    const homeDesc = document.createElement('p');
    homeDesc.textContent = 'O Restaurante Delícia oferece uma experiência gastronômica única com pratos autênticos preparados com ingredientes frescos e de alta qualidade. Nossa cozinha combina tradição e inovação para criar sabores inesquecíveis.';
    
    // Criar parágrafo sobre o chef
    const chefDesc = document.createElement('p');
    chefDesc.textContent = 'Nosso chef premiado traz mais de 15 anos de experiência culinária internacional, criando pratos exclusivos que encantam todos os paladares. Cada refeição no Restaurante Delícia é uma jornada de descobertas culinárias que vai além de uma simples refeição.';
    
    // Criar parágrafo sobre a experiência
    const expDesc = document.createElement('p');
    expDesc.textContent = 'Venha nos visitar e descobrir por que somos o restaurante mais falado da cidade! Proporcionamos um ambiente acolhedor, serviço impecável e sabores que vão encantar todos os sentidos.';
    
    // Criar seção de horários
    const hoursSection = document.createElement('div');
    hoursSection.classList.add('hours-section');
    
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Horário de Funcionamento';
    
    const hoursList = document.createElement('ul');
    
    const hours = [
        'Segunda a Quinta: 11h às 22h',
        'Sexta e Sábado: 11h às 23h',
        'Domingo: 11h às 20h'
    ];
    
    hours.forEach(hour => {
        const hourItem = document.createElement('li');
        hourItem.textContent = hour;
        hoursList.appendChild(hourItem);
    });
    
    // Montar a seção de horários
    hoursSection.appendChild(hoursTitle);
    hoursSection.appendChild(hoursList);
    
    // Montar o conteúdo textual
    homeContent.appendChild(homeTitle);
    homeContent.appendChild(homeDesc);
    homeContent.appendChild(chefDesc);
    homeContent.appendChild(expDesc);
    homeContent.appendChild(hoursSection);
    
    // Montar a página
    homeContainer.appendChild(homeImage);
    homeContainer.appendChild(homeContent);
    
    // Adicionar ao conteúdo
    content.appendChild(homeContainer);
}

export default loadHome;