function loadMenu() {
    const content = document.getElementById('content');
    
    // Criar container do menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    
    // Criar título
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Nosso Menu';
    
    // Criar descrição
    const menuDesc = document.createElement('p');
    menuDesc.textContent = 'Confira nossa seleção de pratos cuidadosamente elaborados pelo nosso chef premiado. Todos os pratos são preparados com ingredientes frescos e de alta qualidade.';
    
    // Criar grid para os itens do menu
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');
    
    // Array com os itens do menu
    const menuItems = [
        {
            name: 'Risoto de Cogumelos',
            description: 'Risoto cremoso com mix de cogumelos frescos, finalizado com parmesão italiano e azeite trufado.',
            price: 'R$ 48,00'
        },
        {
            name: 'Filé ao Molho Madeira',
            description: 'Medalhão de filé mignon grelhado, coberto com molho madeira e acompanhado de batatas rústicas.',
            price: 'R$ 62,00'
        },
        {
            name: 'Salmão Grelhado',
            description: 'Filé de salmão grelhado com ervas finas, servido com purê de batata doce e legumes da estação.',
            price: 'R$ 58,00'
        },
        {
            name: 'Fettuccine aos Frutos do Mar',
            description: 'Massa fresca com camarões, lulas, mexilhões e polvo ao molho de tomate fresco e ervas.',
            price: 'R$ 65,00'
        },
        {
            name: 'Bife à Parmegiana',
            description: 'Filé empanado coberto com molho de tomate caseiro, presunto e queijo gratinado. Acompanha arroz e fritas.',
            price: 'R$ 54,00'
        },
        {
            name: 'Tiramisù',
            description: 'Clássica sobremesa italiana com camadas de biscoito, café, creme de mascarpone e cacau em pó.',
            price: 'R$ 28,00'
        }
    ];
    
    // Criar os elementos para cada item do menu
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        
        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;
        
        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.classList.add('price');
        
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDesc);
        menuItem.appendChild(itemPrice);
        
        menuGrid.appendChild(menuItem);
    });
    
    // Montar a página
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuDesc);
    menuContainer.appendChild(menuGrid);
    
    // Adicionar ao conteúdo
    content.appendChild(menuContainer);
}

export default loadMenu;