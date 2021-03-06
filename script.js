var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You can have any brew you want... as long as it\'s a Corona.',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  var randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainTitle = document.getElementById('main-title');
  mainTitle.innerHTML = 'Welcome to my hompage'
  
  // Part 2
  document.getElementsByTagName('BODY')[0].style.backgroundColor = '#26293B'

  // Part 3
  let listNodes = document.getElementById('favoriteThings');
  listNodes.removeChild(listNodes.childNodes[11]);
  
  // Part 4
  let groupOfSpecialItemClass = document.querySelectorAll('.special-title');
  console.log('groupOfSpecialItemClass >>>>', groupOfSpecialItemClass);

  for (let node of groupOfSpecialItemClass) {
    node.style.fontSize = '2rem';
  }

  // Part 5
  let pastRaceListNodes = document.getElementById('pastRace');
  pastRaceListNodes.removeChild(pastRaceListNodes.childNodes[7])

  // Part 6
  const grabIdOfPastRace = document.getElementById('pastRace');
  const newRaceEl = document.createElement('li');
  const newRaceTextNode = document.createTextNode('East Harlem');
  const appendBoth = newRaceEl.appendChild(newRaceTextNode); 
  
  grabIdOfPastRace.appendChild(appendBoth);

  // Part 7
  let newDiv = document.createElement('div')
  newDiv.classList.add('blog-post', 'purple');
  console.log('newDiv >>>', newDiv);

  let newHeaderTwo = document.createElement('h1');
  newHeaderTwo.innerHTML = 'Harlem'
  console.log('newHeaderTwo >>>', newHeaderTwo);

  let newParaGraphNode = document.createElement('p');
  newParaGraphNode.innerHTML = 'Dipset all day'

  let item = document.querySelector('.main');
  console.log('item >>>', item);

  newDiv.appendChild(newHeaderTwo)
  newDiv.appendChild(newParaGraphNode)
  item.appendChild(newDiv)

  // Part 8

  let quoteTitle = document.getElementById('quote-title')
  quoteTitle.addEventListener('click', randomQuote);

  // Part 9
  let blogPosts = document.getElementsByClassName('blog-post');
  console.log('blogPosts >>>', blogPosts);  

  for (let el of blogPosts) {
    console.log('el >>>', el);
    let turnRed = () => el.classList.toggle('red');
    let turnPurple = () => el.classList.toggle('purple');

    el.addEventListener('mouseenter', turnRed)
    el.addEventListener('mouseout', turnPurple);
  }
});
