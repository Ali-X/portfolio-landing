;(function() {
  let educationArr = [
    {
      type: 'Bachelor Degree in Software Engineering',
      place: 'National Aviation University of Ukraine',
      date: '2018'
    },
    {
      type: 'Java Development Course',
      place: 'Mate academy',
      date: '2017'
    },
    {
      type: 'Front-End Development Course',
      place: 'Mate academy',
      date: '2018'
    },
    {
      type: 'MongoDB for Java Developers',
      place: 'MongoDB University',
      date: '2017'
    }
  ];

  for (let i = 0; i < educationArr.length; i++) {
    let exp = educationArr[i];

    let parrentElem = document.getElementsByClassName('education-subsection')[0];

    let cardElem = document.createElement('div');
    cardElem.setAttribute('class', 'education-section-card experience-section-card');

    let subcardRoseElem = createRoseBlock(exp);
    let subcardWhiteElem = createWhiteBlock(exp);

    cardElem.appendChild(subcardRoseElem);
    cardElem.appendChild(subcardWhiteElem);

    parrentElem.appendChild(cardElem);
  }

  function createRoseBlock(exp) {
    let subcardRoseElem = document.createElement('div');
    subcardRoseElem.setAttribute('class', 'education-section-subcard experience-section-subcard experience-section-subcard--rose');

    let typeElem = document.createElement('div');
    typeElem.setAttribute('class', 'education-section-card-type');
    typeElem.innerText = exp['type'];

    subcardRoseElem.appendChild(typeElem);

    return subcardRoseElem;
  }

  function createWhiteBlock(exp) {
    let subcardWhiteElem = document.createElement('div');
    subcardWhiteElem.setAttribute('class', 'education-section-subcard experience-section-subcard experience-section-subcard--white');

    let placeElem = document.createElement('div');
    placeElem.setAttribute('class', 'education-section-card-place');
    placeElem.innerText = exp['place'];

    let dateElem = document.createElement('div');
    dateElem.setAttribute('class', 'experience-section-card-date');
    dateElem.innerText = exp['date'];

    subcardWhiteElem.appendChild(placeElem);
    subcardWhiteElem.appendChild(dateElem);

    return subcardWhiteElem;
  }
})();