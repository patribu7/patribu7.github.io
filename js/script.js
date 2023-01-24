deck = ['python', 'javascript', 'html5', 'css3', 'qualche altra cosa']


function addToDeck(skill) {
    var card = document.createElement("div");
    card.className = "card";

    //aggiungo la prima immagine
    img = card.appendChild(document.createElement('img'));
    img.src = 'img/cards/' + skill + '.svg';

    //aggiungo il nome della skill
    card.appendChild(document.createElement('p')).innerHTML = skill;

    // aggiungo la seconda immagine
    img = card.appendChild(document.createElement('img'));
    img.src = 'img/cards/' + skill + '.svg';


    document.getElementById("deck").appendChild(card);

}

deck.forEach(card => {
    addToDeck(card);
    
});
