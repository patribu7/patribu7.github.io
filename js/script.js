// ---------------------dizionario da convertire in file json-------------------------//

var projects = 
    {
        "irma": {
            "header": "Irma 2.0",
            "textOverview": "Registro bookshop",
            "textDescription": `Semplice registro per tenere traccia della contabilità e del magazzino di un piccolo negozio.</br>
            Realizzato per un bookshop annesso a museo con pochi volumi di vendita. Erano richieste:</br>
            - la gratuità degli strumenti;</br>
            - la possibilità di usarlo su più dispositivi;</br>
            - il divieto di installare programmi aggiuntivi;</br>
            Ha un sistema per registrare gli articoli di una vendita con il totale e il resto dovuto, in automatico registra le entrate in cassa e quali articoli sono stati venduti con la rispettiva data e operatore di vendita. Tiene traccia delle rimanenze di magazzino e fa un report giornaliero.</br>
            Realizzato ato con Google fogli con funzioni automatiche in GoogleScript
            `,
            "image": "img/projects/irma.svg",
            "externalLink": "https://www.canva.com/design/DAFry0ZbOv0/euCyN4GbN_23j0PaDbc46A/view?utm_content=DAFry0ZbOv0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#3",
            "tags": ["Google Docs", "Google Apps Script"],
        },
    
        "button_pressed": {
            "header": "Hai premuto il bottone!",
            "textOverview": "Invia un messaggio Telegram alla pressione di un bottone",
            "textDescription": "Fatto per esercizio con Raspbarry Pi, bot di Telegram e Python",
            "image": "img/projects/button_pressed.svg",
            "externalLink": "https://www.canva.com/design/DAFrzJ-N-cA/Lx8VxqYAysXGE9Et3ZP_TQ/watch?utm_content=DAFrzJ-N-cA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
            "tags": ["python", "telegram", "raspberry Pi", "esercizi"],
    
        },
        "botChain": {
            "header": "botChain",
            "textOverview": "Report automatico sul valore delle blockchain",
            "textDescription": "Un esercizio per utilizzare le API e python per conoscere in tempo reale i dati.</br> Esercizio svolto per Start2Impact.",
            "image": "img/projects/botChain.svg",
            "externalLink": "",
            "tags": ["python", "esercizi"],
    
        },
        "spake": {
            "header": "Spake",
            "textOverview": "Un clone di Snake",
            "textDescription": "Un esercizio su pygame. Ancora in fase di completamento, ma funzionante.",
            "image": "img/projects/spake.svg",
            "externalLink": "https://github.com/patribu7/Spake",
            "tags": ["python", "pygame", "esercizi"],
    
        },
        "contatore_lua": {
            "header": "contatore di Lupi",
            "textOverview": "deathcounter per Twitch",
            "textDescription": "Un sempice contatore da implemantare facilmente in OBS Studio per tenere il conto durante le dirette Twitch",
            "image": "img/projects/contatore_lua.svg",
            "externalLink": "https://github.com/patribu7/contatore-di-LupiCattivi",
            "tags": ["lua", "Twitch", "OBS Studio"],
        },

        "this_site": {
            "header": "Questa webpage",
            "textOverview": "Webpage per mettere in vetrina i miei progetti",
            "textDescription": "Realizzato come compito per Start 2 Impact University",
            "image": "img/projects/this_site.svg",
            "externalLink": "",
            "tags": ["Inkscape", "Html-Css", "JavaScript", "Gimp"],
        },
        "this_site": {
            "header": "Counter JS",
            "textOverview": "Un counter fatto interamente con JavaScript",
            "textDescription": "Realizzato come compito per Start 2 Impact University",
            "image": "img/projects/counter_js.svg",
            "externalLink": "/counter/",
            "tags": ["Html-Css", "JavaScript"],
        }
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
        var projectMain = createElement('div', 'project-main'); /*contiene projectMainText e projectImage*/
        var projectMainText = createElement('div', 'project-text');
        var projectDescription = createElement('div', 'project-description'); /*contiene projectTextDescription*/

        var projectHeader = createElement('h3', 'project-header');
        projectHeader.innerHTML = projects[project].header;
        projectMainText.appendChild(projectHeader);
        
        var projectTextOverview = createElement('p', 'project-text-overview');
        projectTextOverview.innerHTML = projects[project].textOverview;
        projectMainText.appendChild(projectTextOverview);
        
        var projectTags = createElement('p', 'project-tags');
        projectTags.innerHTML = '🏷 ' + projects[project].tags.join(', ');
        projectMainText.appendChild(projectTags);
        
        var projectExternalLink = createElement('a', 'project-external-link');
        projectExternalLink.target = "_blank"
        projectExternalLink.href = projects[project].externalLink;
        projectExternalLink.innerHTML = 'External Link';
        projectMainText.appendChild(projectExternalLink);
        
        var projectTextDescription = createElement('p', 'project-text-description');
        projectTextDescription.innerHTML = projects[project].textDescription;
        projectDescription.appendChild(projectTextDescription);

        var projectImage = createElement('img', 'project-image');
        projectImage.src = projects[project].image;
        
        projectMain.appendChild(projectImage);
        projectMain.appendChild(projectMainText);
        projectLi.appendChild(projectMain);
        projectLi.appendChild(projectDescription);

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
let deckProgrammer = ['python', 'javascript', 'Html-Css', 'Google Apps Script', 'raspberry Pi', 'lua'];
let deckDesigner = ['gimp', 'inkscape', 'OBS Studio'];
let deckPlatform = ['telegram', 'twitch' ]
let cards = [];

function cleanCharsetToUrl(charset) {
    let urlCharset
    urlCharset = charset.toLowerCase();
    urlCharset = urlCharset.replaceAll(' ', '-');
    urlCharset = urlCharset.replaceAll('<br/>', '-');
    return urlCharset
};

function addToDeck(skill, type) {
    var card = document.createElement("div");

    // aggiungo due classi alla card
    card.classList.add('card', type);

    //definisco il numero della carta. Se la skill corrisponde ad un tag nei progetti incrementa di uno il numero fino ad arrivare al numero di progetti con tale tag
    var num = 0
    for (var project in projects) {
        for (var index_tag in projects[project].tags) {
            var tag = projects[project].tags[index_tag]
            if (cleanCharsetToUrl(skill) === cleanCharsetToUrl(tag)) {
                num++                    
            }
        }
    };
    
    firstDiv = card.appendChild(document.createElement('div'));
    firstNum = firstDiv.appendChild(document.createElement('p'));
    firstNum.innerHTML = num;
    firstImg = firstDiv.appendChild(document.createElement('img')); 
    firstImg.src = 'img/cards/' + cleanCharsetToUrl(skill)  + '.svg';
        
    //aggiungo il nome della skill
    skillName = card.appendChild(document.createElement('a'));
    skillName.innerHTML = '<p>'+ skill + '</p>';
    skillName.href = '#projects';


    lastDiv = card.appendChild(document.createElement('div'));
    lastImg = lastDiv.appendChild(document.createElement('img'));
    lastImg.src = 'img/cards/' + cleanCharsetToUrl(skill) + '.svg';
    lastNum = lastDiv.appendChild(document.createElement('p'));
    lastNum.innerHTML = num;
    

    deckDiv.appendChild(card);
    cards.push(card);

};

deckProgrammer.forEach(card => {
    addToDeck(card, 'coding');
    
});

deckDesigner.forEach(card => {
    addToDeck(card, 'design');
});

deckPlatform.forEach(card => {
    addToDeck(card, 'platform');
});

cards.forEach(card => {
    card.addEventListener('click', function() {
        inputFilter.value = card.getElementsByTagName('a')[0].innerText;
        inputFilter.dispatchEvent(new Event('input'));
    });
});

// ---------------------credits-------------------------//

let btnCredits = document.getElementById('btnCredits')
btnCredits.addEventListener('click', function() {
    if (credits.style.display === 'none') {
        credits.style.display = 'block';
        btnCredits.innerHTML = 'Credits ⩟';
        window.scrollByLines(50);

    } else if (credits.style.display === 'block') {
        window.scrollByLines(-20);
        // qui ci vorrebbe un sleep();
        credits.style.display = 'none';
        btnCredits.innerHTML = 'Credits ⩡';
    }
});