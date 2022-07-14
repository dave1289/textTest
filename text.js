const header = document.querySelector('h1');
const body = document.querySelector('body');

setInterval(function() {
    if (header.classList.contains('big')){
        header.classList.remove('big');
        header.classList.add('small')
        body.style.backgroundColor = 'red'
        header.textContent = "WELL DEN!"
    }
    else if (header.classList.contains('small')){
        header.classList.remove('small');
        header.classList.add('big');
        body.style.backgroundColor = 'blue'
        header.textContent = "HEY DERR!"
    }
},1000)