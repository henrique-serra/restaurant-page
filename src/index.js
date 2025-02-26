import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Função para limpar o conteúdo atual
function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

// Função para atualizar o botão ativo
function setActiveButton(activeButton) {
    // Remover a classe 'active' de todos os botões
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Adicionar a classe 'active' ao botão atual
    activeButton.classList.add('active');
}

// Função para inicializar o site
function initSite() {
    // Obter referências para os botões
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');
    
    // Carregar a página inicial por padrão e definir o botão Home como ativo
    clearContent();
    loadHome();
    setActiveButton(homeBtn);
    
    // Configurar os event listeners para os botões
    homeBtn.addEventListener('click', () => {
        clearContent();
        loadHome();
        setActiveButton(homeBtn);
    });
    
    menuBtn.addEventListener('click', () => {
        clearContent();
        loadMenu();
        setActiveButton(menuBtn);
    });
    
    contactBtn.addEventListener('click', () => {
        clearContent();
        loadContact();
        setActiveButton(contactBtn);
    });
}

// Inicializar o site quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initSite);