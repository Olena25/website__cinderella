document.querySelector('#bth-John').addEventListener('click', informationAboutJohn);
document.querySelector('#bth-Siella').addEventListener('click', informationAboutSiella);

function informationAboutJohn() {
    fetch('client-data.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name;
            document.querySelector('.colection').innerText = clientData.colection;
        } );
}

function informationAboutSiella() {
    fetch('client-data.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name2;
            document.querySelector('.colection').innerText = clientData.colection2;
        } );
}