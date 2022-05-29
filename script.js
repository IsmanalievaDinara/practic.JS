const magentaP = document.querySelector('#magenta')
magentaP.style.color = 'magenta'
magentaP.style.fontSize = '20px'

const yellowP = document.querySelector('#yellow')
yellowP.style.backgroundColor = 'yellow'

const pinkP = document.querySelector('#pink')
pinkP.style.backgroundColor = 'pink'

const blueP = document.querySelector('#blue')
blueP.style.backgroundColor = 'blue'

const blackP = document.querySelector('#black')
blackP.style.backgroundColor = 'black'

const orangeP = document.querySelector('#orange')
orangeP.style.backgroundColor = 'orange'
// orangeP.style.fontSize = '30px'

const allPara = document.querySelectorAll('.font-size')
console.log(allPara,'this is all para')

for(let i = 0; i< allPara.length; i++){
  allPara[i].style.fontSize = '30px'
  allPara[i].style.padding = '10px 15px'
}




