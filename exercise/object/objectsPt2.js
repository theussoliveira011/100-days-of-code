let bandInfo = {
  name: "Slipknot",
  natiolatity: 'North-American',
  genre: 'Rock',
  members: 5,
  formed: 1999,
  split: false,
  albums: [{
    name: "Death",
    released: 2000
  },{
    name: "CarryOn",
    released: 2015
  },{
    name: "Nightmare",
    released: 2017
  },
]
}
    const section = document.querySelector('section');
    let para1 = document.createElement('p');
    para1.textContent =bandInfo.name + ' ' + bandInfo.albums[1].name;
    section.appendChild(para1);