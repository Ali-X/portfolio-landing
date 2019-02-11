;(function() {
  let experienceArr = [
    {
      position: 'Java Developer',
      place: 'Scalors GmbH',
      date: 'Jan 2018 - present',
      responsibilities: ['Development of libraries for site crawling', 'Manual testing and fixing already existing crawlers', 'Finding non-standard solutions for creating libraries for particularly complex web sites', 'Managing and training novice developers'],
      tech: ['Spring boot, JSoup, Thymeleaf, HtmlUnit', 'MongoDB, PostgreSQL', 'Kibana, Graylog, RabbitMQ, Jenkins'],
      achievements: ['Had implemented tool to facilitate and automate starting and testing of already developed libraries']
    }
  ];

  for (let i = 0; i < experienceArr.length; i++) {
    let exp = experienceArr[i];

    let parrentElem = document.getElementsByClassName('experience-section')[0];

    let cardElem = document.createElement('div');
    cardElem.setAttribute('class', 'experience-section__card card');

    let subcardRoseElem = createRoseBlock(exp);
    let subcardWhiteElem = createWhiteBlock(exp);

    cardElem.appendChild(subcardRoseElem);
    cardElem.appendChild(subcardWhiteElem);

    parrentElem.appendChild(cardElem);
  }

  function createList(arr) {
    let ulElem = document.createElement('ul');

    for (let j = 0; j < arr.length; j++) {
      let liElem = document.createElement('li');
      liElem.setAttribute('class', 'experience-section__item');
      liElem.innerText = arr[j];

      ulElem.appendChild(liElem);
    }
    return ulElem;
  }

  function createRoseBlock(exp) {
    let subcardRoseElem = document.createElement('div');
    subcardRoseElem.setAttribute('class', 'experience-section__subcard experience-section__subcard--rose subcard subcard--rose');

    let positionElem = document.createElement('div');
    positionElem.setAttribute('class', 'experience-section__position');
    positionElem.innerText = exp['position'];

    let placeElem = document.createElement('div');
    placeElem.setAttribute('class', 'experience-section__place');
    placeElem.innerText = exp['place'];

    let dateElem = document.createElement('div');
    dateElem.setAttribute('class', 'card__date');
    dateElem.innerText = exp['date'];

    subcardRoseElem.appendChild(positionElem);
    subcardRoseElem.appendChild(placeElem);
    subcardRoseElem.appendChild(dateElem);

    return subcardRoseElem;
  }

  function createWhiteBlock(exp) {
    let subcardWhiteElem = document.createElement('div');
    subcardWhiteElem.setAttribute('class', 'experience-section__subcard experience-section__subcard--white subcard subcard--white');

    let respElem = document.createElement('div');
    respElem.setAttribute('class', 'experience-section__header');
    respElem.innerText = 'Responsibilities';

    let respUlElem = createList(exp['responsibilities']);

    let techElem = document.createElement('div');
    techElem.setAttribute('class', 'experience-section__header');
    techElem.innerText = 'Technology stack';

    let techUlElem = createList(exp['tech']);

    let achElem = document.createElement('div');
    achElem.setAttribute('class', 'experience-section__header');
    achElem.innerText = 'Achievements';

    let achUlElem = createList(exp['achievements']);

    subcardWhiteElem.appendChild(respElem);
    subcardWhiteElem.appendChild(respUlElem);
    subcardWhiteElem.appendChild(techElem);
    subcardWhiteElem.appendChild(techUlElem);
    subcardWhiteElem.appendChild(achElem);
    subcardWhiteElem.appendChild(achUlElem);

    return subcardWhiteElem;
  }

})();

