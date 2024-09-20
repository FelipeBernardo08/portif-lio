const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const languages = [
    {
        image: "img/html.png"
    },
    {
        image: "img/css.png"
    },
    {
        image: "img/js.jpg"
    },
    {
        image: "img/php.png"
    },
    {
        image: "img/mysql.png"
    },
    {
        image: "img/bootstrap.png"
    },
    {
        image: "img/ionic.png"
    },
    {
        image: "img/angular.png"
    }
];
const navMenu = [
    {
        name: "Início",
        href: "#home"
    },
    {
        name: "Sobre",
        href: "#about"
    },
    {
        name: "Projetos",
        href: "#projects"
    },
    {
        name: "Contato",
        href: "#contact"
    }
]

const linksFooter = [
    {
        href: "https://www.linkedin.com/in/felipe-bernardo-de-oliveira-5b93a3274",
        icon: "fa-linkedin"
    },
    {
        href: "https://github.com/FelipeBernardo08",
        icon: "fa-github"
    },
    {
        href: "https://wa.me/+5517991838456",
        icon: "fa-whatsapp"
    }
]

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

function createItemsNavBar() {
    for (let i = 0; i < navMenu.length; i++) {
        let lista = document.createElement('li')
        lista.classList.add('nav-item')

        let link = document.createElement('a')
        link.setAttribute('id', 'sublinhado');
        link.setAttribute('href', navMenu[i].href);
        link.classList.add('nav-link', 'glow-on-hover');
        link.textContent = navMenu[i].name;

        lista.appendChild(link)

        let listaLi = document.getElementById('listaLi')
        listaLi.appendChild(lista)
    }
}

function createAboutMe() {
    let about = document.getElementById('aboutMe')

    let title = document.createElement('h2')
    title.textContent = "Sobre Mim"

    let text = document.createElement('p')
    text.innerHTML = `
        Estudante do ultimo preíodo no curso Análise e Desenvolvimento de Sistemas - Universidade Paulista
        UNIP.<br>
        Com foco em desenvolvimento web, possuo conhecimentos sólidos como front e back-end.
        <br>
        Procuro aprender diariamente, para manter minhas aplicações atualizadas tecnicamente.<br>
        Códigos limpos e simples de interpretar, repeitando boas práticas e garantindo qualidade.<br><br>
        Stacks com as quais trabalho atualmente:<br>
        Linguagens (JavaScript, TypeScript e PHP)<br>
        Frameworks (Angular, Ionic, VueJs, NestJs, Laravel)<br>
        Bibliotecas (Bootstrap, Tailwind)<br>
        Banco de dados relacionais (MariaDB, Postgres) <br>
        Tecnologias (Controle de versionamento GIT, Métodologia ágil SCRUM).<br><br>
        Experiências profissionais: <br>
        - AGTech Agrotecnologia, Desenvolvedor Web (7 meses). <br>
        - JM2 Tecnologia, Desenvolvedor Web (3 meses).        
    `;

    for (let i = 0; i < languages.length; i++) {
        let button = document.createElement('button')
        button.classList.add('btn')
        button.setAttribute('type', 'button')

        let image = document.createElement('img')
        image.setAttribute('height', '50px');
        image.setAttribute('id', 'icons');
        image.src = languages[i].image

        button.appendChild(image)

        let principalDiv = document.getElementById('linguagens')
        principalDiv.appendChild(button)
    }

    about.appendChild(title)
    about.appendChild(text)
}

function createHello() {
    let principalDiv = document.getElementById('home')

    let row = document.createElement('div')
    row.classList.add('row')

    let hello = document.createElement('div')
    hello.id = "hello"
    hello.classList.add('col-md-6')

    let h1 = document.createElement('h1')
    h1.textContent = "Olá,"

    let h3 = document.createElement('h3')
    h3.textContent = "Meu nome é Felipe."

    let p = document.createElement('p')
    p.innerHTML = `
        Sou um Desenvolvedor Web Full Stack.<br>
        Atualmente trabalhando como freelancer PJ.
        <br> 
    `
    let a = document.createElement('a')
    a.classList.add('btn', 'btn-sm', 'btn-light')
    a.href = "https://wa.me/+5517991838456"
    a.textContent = "CONTATO"

    hello.appendChild(h1)
    hello.appendChild(h3)
    hello.appendChild(p)
    hello.appendChild(a)

    let me = document.createElement('div')
    me.id = "me"
    me.classList.add('col-md-6', 'text-center')

    let img = document.createElement('img')
    img.classList.add('img-fluid')
    img.src = "img/me.png"

    me.appendChild(img)

    row.appendChild(hello)
    row.appendChild(me)

    principalDiv.appendChild(row)
}

function createFooter() {
    let principalDiv = document.getElementById('contact')

    let container = document.createElement('div')
    container.classList.add('container')

    let row = document.createElement('div')
    row.classList.add('row')


    let col = document.createElement('div')
    col.classList.add('col-md-12', 'text-center')
    col.innerHTML = '<hr>'


    let h3 = document.createElement('h3')
    h3.textContent = "Visite minhas páginas ou entre em contato para maiores informações."

    col.appendChild(h3)
    for (let i = 0; i < linksFooter.length; i++) {
        let a = document.createElement('a')
        a.classList.add('icon')
        a.href = linksFooter[i].href

        let elementI = document.createElement('i')
        elementI.classList.add('fa-brands', linksFooter[i].icon)

        a.appendChild(elementI)
        col.appendChild(a)
    }

    let p = document.createElement('p')
    p.innerHTML = "© Todos os direitos reservados - 2022"

    col.appendChild(p)
    row.appendChild(col)
    container.appendChild(row)
    principalDiv.appendChild(container)

}

createItemsNavBar();
createAboutMe();
createHello();
createFooter();

window.addEventListener('scroll', function () {
    animeScroll();
})