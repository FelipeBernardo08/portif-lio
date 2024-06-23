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
const projects = [
    {
        name: 'Bernavet Saúde Animal',
        text: `Web site feito para uma loja agropecuária.<br>Abra no desktop para ver a responsividade.`,
        href: "https://bernavet-saude-animal.netlify.app/"
    },
    {
        name: "Delícias da Cheiloca",
        text: `Web site para um restaurante, Delícias da Cheiloca <br>Abra no desktop para ver aresponsividade.`,
        href: "https://deliciasdacheiloca.netlify.app/"
    },
    {
        name: "Diego Vidalli Advogado",
        text: `Website para um advogado.<br>Abra no desktop para ver a responsividade.`,
        href: "https://diegovidalliadv.netlify.app/"
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
         Estudante do curso Análise e Desenvolvimento de Sistemas pela Universidade Paulista
                            UNIP.<br>
                            Com foco em desenvolvimento, possuo conhecimentos sólidos como front e back-end.
                            <br>
                            Procuro aprender diariamente novas tecnicas para oferecer um design inovador para minhas
                            aplicações e sites.<br>
                            Códigos limpos e simples de interpretar, repeitando boas práticas e garantindo
                            qualidade.<br>
                            Minhas linguagens (HTML5, CSS3, PHP, JavaScript, MySQL, C) Bibliotecas (jQuery, Bootstrap)
                            Frameworks(Ionic, Angular).<br><br>
                            
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
        Sou um Web Developer Full Stack.<br>
                        Atualmente trabalhando com framework Angular com TypeScript e Laravel com PHP.<br>
    `
    let a = document.createElement('a')
    a.classList.add('btn', 'btn-sm', 'btn-light')
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

    let container
}



createItemsNavBar();
createAboutMe();
createHello();

window.addEventListener('scroll', function () {
    animeScroll();
})