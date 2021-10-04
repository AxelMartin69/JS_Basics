let val;

const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode('Study JS'));

const a = document.createElement('a');
a.className = 'secondary-element';
a.appendChild(document.createTextNode('idk'));
li.appendChild(a);

const ul = document.querySelector('ul');
ul.appendChild(li);