function loadContact() {
    const content = document.getElementById('content');
    
    // Criar container de contato
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    
    // Criar título
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Entre em Contato';
    
    // Criar descrição
    const contactDesc = document.createElement('p');
    contactDesc.textContent = 'Estamos ansiosos para atendê-lo! Entre em contato para fazer reservas ou tirar dúvidas sobre nosso restaurante.';
    
    // Criar grid para informações e formulário
    const contactGrid = document.createElement('div');
    contactGrid.classList.add('contact-grid');
    
    // Criar informações de contato
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    
    const addressTitle = document.createElement('h3');
    addressTitle.textContent = 'Nosso Endereço';
    
    const address = document.createElement('p');
    address.textContent = 'Av. das Delícias, 1234 - Centro, São Paulo, SP';
    
    const phoneTitle = document.createElement('h3');
    phoneTitle.textContent = 'Telefone';
    
    const phone = document.createElement('p');
    phone.textContent = '(11) 5555-1234';
    
    const emailTitle = document.createElement('h3');
    emailTitle.textContent = 'E-mail';
    
    const email = document.createElement('p');
    email.textContent = 'contato@restaurantedelicia.com.br';
    
    const socialTitle = document.createElement('h3');
    socialTitle.textContent = 'Redes Sociais';
    
    const social = document.createElement('p');
    social.textContent = 'Siga-nos no Instagram e Facebook: @restaurantedelicia';
    
    // Montar as informações de contato
    contactInfo.appendChild(addressTitle);
    contactInfo.appendChild(address);
    contactInfo.appendChild(phoneTitle);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(emailTitle);
    contactInfo.appendChild(email);
    contactInfo.appendChild(socialTitle);
    contactInfo.appendChild(social);
    
    // Criar formulário de contato
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-form');
    
    const formTitle = document.createElement('h3');
    formTitle.textContent = 'Envie-nos uma mensagem';
    
    const form = document.createElement('form');
    
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Nome:';
    
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.required = true;
    
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'E-mail:';
    
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.required = true;
    
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Mensagem:';
    
    const messageTextarea = document.createElement('textarea');
    messageTextarea.setAttribute('id', 'message');
    messageTextarea.setAttribute('name', 'message');
    messageTextarea.required = true;
    
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Enviar Mensagem';
    
    // Montar o formulário
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageTextarea);
    form.appendChild(submitButton);
    
    contactForm.appendChild(formTitle);
    contactForm.appendChild(form);
    
    // Montar a grid de contato
    contactGrid.appendChild(contactInfo);
    contactGrid.appendChild(contactForm);
    
    // Criar mapa (placeholder)
    const mapSection = document.createElement('div');
    mapSection.classList.add('map-section');
    
    const mapTitle = document.createElement('h3');
    mapTitle.textContent = 'Nossa Localização';
    
    const mapPlaceholder = document.createElement('div');
    mapPlaceholder.classList.add('map-placeholder');
    mapPlaceholder.textContent = 'Mapa do Restaurante';
    
    mapSection.appendChild(mapTitle);
    mapSection.appendChild(mapPlaceholder);
    
    // Montar a página
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactDesc);
    contactContainer.appendChild(contactGrid);
    contactContainer.appendChild(mapSection);
    
    // Adicionar ao conteúdo
    content.appendChild(contactContainer);
}

export default loadContact;