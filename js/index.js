function informationAboutJohn() {
    fetch('John-inforntion.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name;
            document.querySelector('.colection').innerText = clientData.colection;
            document.querySelector('.price_consultation').innerText = clientData.price_consultation;
            document.querySelector('.personal__work').innerText = clientData.personal__work;
        } );
}

function informationAboutSiella() {
    fetch('Siella-inforntion.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name;
            document.querySelector('.colection').innerText = clientData.colection;
            document.querySelector('.price_consultation').innerText = clientData.price_consultation;
            document.querySelector('.personal__work').innerText = clientData.personal__work;
        } );
}

function informationAboutMorela() {
    fetch('Morena-inforntion.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name;
            document.querySelector('.colection').innerText = clientData.colection;
            document.querySelector('.price_consultation').innerText = clientData.price_consultation;
            document.querySelector('.personal__work').innerText = clientData.personal__work;
        } );
}

function informationAboutAturro() {
    fetch('Aturro-inforntion.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name;
            document.querySelector('.colection').innerText = clientData.colection;
            document.querySelector('.price_consultation').innerText = clientData.price_consultation;
            document.querySelector('.personal__work').innerText = clientData.personal__work;
        } );
}
document.querySelector('#bth-John').addEventListener('click', informationAboutJohn);
document.querySelector('#bth-Siella').addEventListener('click', informationAboutSiella);
document.querySelector('#bth-Morena').addEventListener('click', informationAboutMorela);
document.querySelector('#bth-Aturro').addEventListener('click', informationAboutAturro);

$(document).ready(function(){
    $('.slider').slick({
        prevArrow: "<img src='https://svgshare.com/i/6Ei.svg' class='prev' alt='1'>",
        nextArrow: "<img src='https://svgshare.com/i/6Gf.svg' class='next' alt='2'>",
    });
});
