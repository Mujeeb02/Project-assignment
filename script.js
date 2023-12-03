const butt = document.querySelectorAll('.box');
const body = document.querySelector('body');

butt.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';  // Corrected property name
        } 
        if (e.target.id == 'grey') {
            body.style.backgroundColor = 'grey';
        } 
        if (e.target.id == 'green') {
            body.style.backgroundColor = 'green';
        } 
        if(e.target.id=='yellow') {
            body.style.backgroundColor = 'yellow';
        }
    });
});
