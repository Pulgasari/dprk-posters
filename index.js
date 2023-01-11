let posters = [
    { id: '1056604494', title: '', year: '' },
    { id: '1056604549', title: '', year: '2017' },
    { id: '2456547764', title: '', year: '' },
    { id: '3454533987', title: '', year: '' },
    { id: '4554645331', title: '', year: '' },
    { id: '6567883433', title: '', year: '' },
    { id: '6757863435', title: '', year: '' },
    { id: '7657873434', title: '', year: '' },
    { id: '8965534113', title: '', year: '' },
    { id: '9354695984', title: '', year: '' },
    { id: '9657456564', title: '', year: '' },
];


// Apply Posters to Document

const container = document.getElementById('posters');

posters.forEach( poster => {

    const html = `<div class='poster' id="poster_${poster.id}">
                      <img src="img/posters/${poster.id}.jpg" />
                  </div>`;
    container.insertAdjacentHTML( 'beforeend', html );

});