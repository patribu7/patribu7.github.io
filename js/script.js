// ---------------------da convertire in file json-------------------------//

var projects = 
    {
        "irma": {
            "header": "Irma 2.0",
            "textOverview": "Registro bookshop",
            "textDescription": `Semplice registro per tenere traccia della contabilità e del magazzino di un piccolo negozio.\n
            Realizzato per un bookshop annesso a museo con pochi volumi di vendita. Erano richieste:\n
            - la gratuità degli strumenti;\n
            - la possibilità di usarlo su più dispositivi;\n
            - il divieto di installare programmi aggiuntivi;\n
            Ha un sistema per registrare gli articoli di una vendita con il totale e il resto dovuto, in automatico registra le entrate in cassa e quali articoli sono stati venduti con la rispettiva data e operatore di vendita. Tiene traccia delle rimanenze di magazzino e fa un report giornaliero.\n
            Realizzato ato con Google fogli con funzioni automatiche in GoogleScript
            `,
            "image": "img/projects/irma.svg",
            "externalLink": "",
            "tags": ["Google Docs", "GoogleAppsScript"],
        },
    
        "button_pressed": {
            "header": "Hai premuto il bottone!",
            "textOverview": "Invia un messaggio Telegram alla pressione di un bottone",
            "textDescription": "Fatto per esercizio con Raspbarry, bot di Telegram e Python",
            "image": "img/projects/button_pressed.svg",
            "externalLink": "",
            "tags": ["python", "telegram", "raspbarry", "esercizi"],
    
        },
        "botChain": {
            "header": "botChain",
            "textOverview": "Report automatico sul valore delle blockchain",
            "textDescription": "Un esercizio per utilizzare le API e python per conoscere in tempo reale i dati.\n Esercizio svolto per Start2Impact.",
            "image": "img/projects/botChain.svg",
            "externalLink": "",
            "tags": ["python", "esercizi"],
    
        },
        "spake": {
            "header": "Spake",
            "textOverview": "Un clone di Snake",
            "textDescription": "Un esercizio su pygame. Ancora in fase di completamento, ma funzionante.",
            "image": "img/projects/spake.svg",
            "externalLink": "",
            "tags": ["python", "pygame", "esercizi"],
    
        },
    };

// ---------------------create list projects-------------------------//
    
var projectsInplace = document.getElementById('list-projects');

function createElement(type, className) {
    var element = document.createElement(type);
    element.className = className;
    return element;
};

function create(list) {
    for (var project in list) {
        var projectLi = createElement('li', 'project');

        var projectText = createElement('div', 'project-text');

        var projectHeader = createElement('h3', 'project-header');
        projectHeader.innerHTML = projects[project].header;
        projectText.appendChild(projectHeader);
        
        var projectTextOverview = createElement('p', 'project-text-overview');
        projectTextOverview.innerHTML = projects[project].textOverview;
        projectText.appendChild(projectTextOverview);

        var projectTextDescription = createElement('p', 'project-text-description');
        projectTextDescription.innerHTML = projects[project].textDescription;
        projectText.appendChild(projectTextDescription);
        
        var projectTags = createElement('p', 'project-tags');
        projectTags.innerHTML = '🏷 ' + projects[project].tags.join(', ');
        projectText.appendChild(projectTags);
        
        var projectExternalLink = createElement('a', 'project-external-link');
        projectExternalLink.href = projects[project].externalLink;
        projectExternalLink.innerHTML = 'External Link';
        projectText.appendChild(projectExternalLink);

        var projectImage = createElement('img', 'project-image');
        projectImage.src = projects[project].image;
        projectLi.appendChild(projectImage);

        projectLi.appendChild(projectText);

        projectsInplace.appendChild(projectLi);
    }
};


create(projects);

//-----------------------Filter-----------------------//

function getInputs(inputs) {
    inputs = inputs.value.toLowerCase();
    
    return inputs
    
}

var viewAllProjs = document.getElementById('viewAllProjs');
var inputFilter = document.getElementById('input-filter-projects');
var projectsLi = document.getElementsByClassName('project');
var report = document.getElementById('report');
var numberOfVisibleProjects = projectsLi.length;
report.innerHTML = numberOfVisibleProjects;

inputFilter.addEventListener('input', function() {
    
    var inputs = getInputs(inputFilter);
    numberOfVisibleProjects = 0;
    for (var i = 0; i < projectsLi.length; i++) {
        var projectLi = projectsLi[i];
        var projectTags = projectLi.getElementsByClassName('project-tags')[0].innerHTML.toLowerCase();
        var projectHeader = projectLi.getElementsByClassName('project-header')[0].innerHTML.toLowerCase();
        
        if (projectTags.indexOf(inputs) > -1 || projectHeader.indexOf(inputs) > -1) {
            projectLi.style.display = '';
            numberOfVisibleProjects++;
            
        } else {
            projectLi.style.display = 'none';
        }
    }
    // ---------------------report-------------------------//
    report.innerHTML = numberOfVisibleProjects;

});

viewAllProjs.addEventListener('click', function() {

    inputFilter.value = '';
    numberOfVisibleProjects = projectsLi.length

    for (var i = 0; i < projectsLi.length; i++) {
        var projectLi = projectsLi[i];
        projectLi.style.display = '';
}
    report.innerHTML = numberOfVisibleProjects;

});

// ---------------------skills card-------------------------//

deckDiv = document.getElementById("deck");
deckProgrammer = ['python', 'javascript', 'html5', 'css3'];
deckDesigner = ['photoshop', 'inkscape', 'procreate'];
cards = [];

function addToDeck(skill, type, num = 1) {
    var card = document.createElement("div");
    // aggiungi due classi alla card
    card.classList.add('card', type);

    firstDiv = card.appendChild(document.createElement('div'));
    firstNum = firstDiv.appendChild(document.createElement('p'));
    firstNum.innerHTML = num;
    firstImg = firstDiv.appendChild(document.createElement('img'));
    firstImg.src = 'img/cards/' + skill + '.svg';
        
    //aggiungo il nome della skill
    skillName = card.appendChild(document.createElement('a'));
    skillName.innerHTML = '<p>'+ skill + '</p>';
    skillName.href = '#projects';


    lastDiv = card.appendChild(document.createElement('div'));
    lastImg = lastDiv.appendChild(document.createElement('img'));
    lastImg.src = 'img/cards/' + skill + '.svg';
    lastNum = lastDiv.appendChild(document.createElement('p'));
    lastNum.innerHTML = num;
    

    deckDiv.appendChild(card);
    cards.push(card);

};

deckProgrammer.forEach(card => {
    addToDeck(card, 'programmazione');
    
});

deckDesigner.forEach(card => {
    addToDeck(card, 'design');
});

cards.forEach(card => {
    card.addEventListener('click', function() {
        inputFilter.value = card.getElementsByTagName('a')[0].innerText;
        inputFilter.dispatchEvent(new Event('input'));
    });
})