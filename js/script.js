const cats = [
    {
        name: 'Sebastian',
        icon: 'fas fa-cat',
        url: 'https://images.pexels.com/photos/5200916/pexels-photo-5200916.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        title: 'Sebastian Tigger'
    },
    {
        name: 'Smokey',
        icon: 'fas fa-paw',
        url: 'https://images.pexels.com/photos/1366996/pexels-photo-1366996.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        title: 'Smokey Cleo'
    },
    {
        name: 'Thomas',
        icon: 'fas fa-fish',
        url: 'https://images.pexels.com/photos/1457595/pexels-photo-1457595.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        title: 'Thomas Misty'
    },
    {
        name: 'Muffin',
        icon: 'fas fa-heart',
        url: 'https://images.pexels.com/photos/2870353/pexels-photo-2870353.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        title: 'Muffin Sooty'
    },
    {
        name: 'George',
        icon: 'fas fa-sun',
        url: 'https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        title: 'George Gizmo'
    }
]

const main = document.getElementById('main');
const menu = document.getElementById('menu');

const renderCats = (position) => {
    let item = cats[position];
    main.innerHTML = `
        <h1 id="title">${item.title}</h1>
        <img id="img" src=${item.url} alt=${item.name}>`;
}

const renderItem = (item, index) => {
    let block = document.createElement('li');
    block.innerHTML = `
        <a href="#" data-id="${index}">
            <span class="icon">
                <i class="${item.icon}"></i>
            </span>
            <p class="text">${item.name}</p>
        </a>
    `;
    menu.appendChild(block);
}

const removeActive = () => {
    document.querySelectorAll('li').forEach((li) => {
        li.querySelector('a').className = "";
    })
}

cats.forEach((item, index) => {
    renderItem(item, index);
})

document.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', ({target}) => {
        removeActive();
        target.className = 'active';
        renderCats(target.getAttribute("data-id"));
    });
})

renderCats(0);
document.querySelector('a').className = 'active';
