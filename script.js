var blink_speed = 500;
var counter = 0
var txt = ''
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var t = setInterval(function () {
    var ele = document.getElementById('tudo');
    counter = getRandomInt(61)
    console.log(counter)
    if (counter > 0 && counter < 11){txt = 'estudante'; ele.style.color = '#2fff00'}
    else if (counter > 10  && counter< 21){txt = 'skatista'; ele.style.color = '#6e0000'}
    else if (counter > 20 && counter < 31){txt = 'usuário de linux'; ele.style.color = '#edca1c'}
    else if (counter > 30 && counter < 41){txt = 'fã de linkin park'; ele.style.color = '#ffffff'}
    else if (counter > 40 && counter < 51){txt = 'apreciador de jogos fps'; ele.style.color = '#ff0000'}
    else if (counter > 50){txt = 'programador'; ele.style.color='#8745f7'}
    else{txt = 'solteiro :('; ele.style.color = '#696969'}
    ele.innerHTML = txt;
}, blink_speed);