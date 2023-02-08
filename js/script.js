deckDiv = document.getElementById("deck");
deckProgrammer = ['python', 'javascript', 'html5', 'css3'];
deckDesigner = ['photoshop', 'inkscape', 'procreate'];

function addToDeck(skill, type, num = 0) {
    var card = document.createElement("div");
    // aggiungi due classi alla card
    card.classList.add('card', type);

    firstDiv = card.appendChild(document.createElement('div'));
    firstNum = firstDiv.appendChild(document.createElement('p'));
    firstNum.innerHTML = num;
    firstImg = firstDiv.appendChild(document.createElement('img'));
    firstImg.src = 'img/cards/' + skill + '.svg';
        
    //aggiungo il nome della skill
    card.appendChild(document.createElement('p')).innerHTML = skill;

    lastDiv = card.appendChild(document.createElement('div'));
    lastNum = lastDiv.appendChild(document.createElement('p'));
    lastNum.innerHTML = num;    
    lastImg = lastDiv.appendChild(document.createElement('img'));
    lastImg.src = 'img/cards/' + skill + '.svg';


    deckDiv.appendChild(card);

};

deckProgrammer.forEach(card => {
    addToDeck(card, 'programmazione');
    
});

deckDesigner.forEach(card => {
    addToDeck(card, 'design');
});