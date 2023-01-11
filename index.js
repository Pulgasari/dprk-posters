let posters = [
    { id: '4554645331', title: 'test 1' },
    { id: '8965534113', title: 'test 2' },
];


// Apply Posters to Document

const container = document.getElementById('posters');

posters.forEach( poster => {

    const html = 
    `<div class='poster' id="poster_${poster.id}">
        <img src="img/posters/${poster.id}.jpg" />
    </div>`;
    container.insertAdjacentHTML( 'beforeend', html );

});