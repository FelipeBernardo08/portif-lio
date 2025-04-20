const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const languages = [
    {
        image: "https://camo.githubusercontent.com/426c1121b29abc64a6b1af1e3aa3091abb38e39c87054720b765af1425c74e7f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667"
    },
    {
        image: 'https://camo.githubusercontent.com/a07203131922e3fa0d6d0cd787edb5597771b30d712574bbc70a3c7aaa0161ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667'
    },
    {
        image: 'https://camo.githubusercontent.com/7ee4eb7bb93fa5c19e1c72b2171893cda9a7d621d70cde9a9353da97f531b410/68747470733a2f2f696d672e69636f6e73382e636f6d2f3f73697a653d3130302669643d3945535a4d4f6555696f4a5326666f726d61743d706e6726636f6c6f723d303030303030'
    },
    {
        image: "img/angular.png"
    },
    {
        image: "img/php.png"
    },
    {
        image: "https://camo.githubusercontent.com/619ba509e24cf1d263cd410707696f4317d48c5629f354a10c07952d5e5302dc/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6c61726176656c2d322e737667"
    },
    {
        image: "img/mysql.png"
    },
    {
        image: 'https://camo.githubusercontent.com/15166a15835f145259844be455ab5945594a70c48a3090aa83d193bd5e3e9bc5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667'
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
];

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
];

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

function createItemsNavBar() {
    for (let i = 0; i < navMenu.length; i++) {
        let lista = document.createElement('li');
        lista.classList.add('nav-item');

        let link = document.createElement('a');
        link.setAttribute('id', 'sublinhado');
        link.setAttribute('href', navMenu[i].href);
        link.classList.add('nav-link', 'glow-on-hover');
        link.textContent = navMenu[i].name;

        lista.appendChild(link);

        let listaLi = document.getElementById('listaLi');
        listaLi.appendChild(lista);
    }
}

function createAboutMe() {
    let about = document.getElementById('aboutMe');

    let title = document.createElement('h2');
    title.textContent = "Sobre Mim";

    let text = document.createElement('p');
    text.innerHTML = `
        Estudante do ultimo preíodo no curso Análise e Desenvolvimento de Sistemas - Universidade Paulista
        UNIP.<br>
        Com foco em desenvolvimento web, possuo conhecimentos sólidos como front e back-end.
        <br>
        Procuro aprender diariamente, para manter minhas aplicações atualizadas tecnicamente.<br>
        Códigos limpos e simples de interpretar, repeitando boas práticas e garantindo qualidade.<br><br>
        <strong>Stacks com as quais trabalho atualmente:</strong><br>
        Linguagens (JavaScript, TypeScript e PHP)<br>
        Frameworks (Angular, Ionic, VueJs, NestJs, Laravel)<br>
        Bibliotecas (Angular Meterials, Bootstrap, Tailwind)<br>
        Banco de dados relacionais (MySQL, MariaDB, Postgres) <br>
        Tecnologias (Controle de versionamento GIT, Docker, Testes Unitários, Ubuntu Server, Microserviços).<br><br>
        <strong>Experiências profissionais:</strong> <br>
        - AGTech Agrotecnologia, Desenvolvedor Web FullStack (7 Meses). <br>
        - JM2 Tecnologia, Desenvolvedor Web FullStack (3 Meses). <br>
        - SeteVoip, Desenvolvedor Web FullStack PJ (6 Meses). <br>
        - Irroba E-commerce, Desenvolvedor Backend (Novembro 2024 - Atualmente).
    `;

    for (let i = 0; i < languages.length; i++) {
        let button = document.createElement('button');
        button.classList.add('btn');
        button.setAttribute('type', 'button');

        let image = document.createElement('img');
        image.setAttribute('height', '50px');
        image.setAttribute('id', 'icons');
        image.src = languages[i].image;

        button.appendChild(image);

        let principalDiv = document.getElementById('linguagens');
        principalDiv.appendChild(button);
    }

    about.appendChild(title);
    about.appendChild(text);
}

function createHello() {
    let principalDiv = document.getElementById('home');

    let row = document.createElement('div');
    row.classList.add('row');

    let hello = document.createElement('div');
    hello.id = "hello";
    hello.classList.add('col-md-6');

    let h1 = document.createElement('h1');
    h1.textContent = "Olá,";

    let h3 = document.createElement('h3');
    h3.textContent = "Meu nome é Felipe.";

    let p = document.createElement('p');
    p.innerHTML = `
        Sou um Desenvolvedor Web Full Stack.<br>
        Atuando como Desenvolvedor Backend na empresa <br><a class="link-job" href="">Irroba E-commerce</a>.
        <br>
        <div class="row mt-3">
            <div class="col-4">
                <a href="https://www.linkedin.com/in/felipe-bernardo-de-oliveira-5b93a3274/">
                    <button class="btn btn-sm btn-outline-light w-75">
                        GitHub
                    </button>
                </a>
            </div>

            <div class="col-4">
                <button class="btn btn-sm btn-outline-light w-75">
                    LinkedIn
                </button>
            </div>

        </div> 
    `;

    hello.appendChild(h1);
    hello.appendChild(h3);
    hello.appendChild(p);

    let me = document.createElement('div');
    me.id = "me";
    me.classList.add('col-md-6', 'text-center');

    let img = document.createElement('img');
    img.classList.add('img-fluid');
    img.src = "img/me.png";

    me.appendChild(img);

    row.appendChild(hello);
    row.appendChild(me);

    principalDiv.appendChild(row);
}

createItemsNavBar();
createAboutMe();
createHello();

window.addEventListener('scroll', function () {
    animeScroll();
});