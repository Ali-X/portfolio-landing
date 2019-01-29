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
    cardElem.setAttribute('class', 'experience-section-card');

    let subcardRoseElem = document.createElement('div');
    subcardRoseElem.setAttribute('class', 'experience-section-subcard experience-section-subcard--rose');

    let positionElem = document.createElement('div');
    positionElem.setAttribute('class', 'experience-section-card-position');
    positionElem.innerText = exp['position'];

    let placeElem = document.createElement('div');
    placeElem.setAttribute('class', 'experience-section-card-place');
    placeElem.innerText = exp['place'];

    let dateElem = document.createElement('div');
    dateElem.setAttribute('class', 'experience-section-card-date');
    dateElem.innerText = exp['date'];

    subcardRoseElem.appendChild(positionElem);
    subcardRoseElem.appendChild(placeElem);
    subcardRoseElem.appendChild(dateElem);

    let subcardWhiteElem = document.createElement('div');
    subcardWhiteElem.setAttribute('class', 'experience-section-subcard experience-section-subcard--white');

    let respElem = document.createElement('div');
    respElem.setAttribute('class', 'experience-section-card-header');
    respElem.innerText = 'Responsibilities';

    let respUlElem = document.createElement('ul');

    for (let j = 0; j < exp['responsibilities'].length; j++) {
      let liElem = document.createElement('li');
      liElem.setAttribute('class', 'experience-section-card-item');
      liElem.innerText = exp['responsibilities'][j];

      respUlElem.appendChild(liElem);
    }

    let techElem = document.createElement('div');
    techElem.setAttribute('class', 'experience-section-card-header');
    techElem.innerText = 'Technology stack';

    let techUlElem = document.createElement('ul');

    for (let j = 0; j < exp['tech'].length; j++) {
      let liElem = document.createElement('li');
      liElem.setAttribute('class', 'experience-section-card-item');
      liElem.innerText = exp['tech'][j];

      techUlElem.appendChild(liElem);
    }

    let achElem = document.createElement('div');
    achElem.setAttribute('class', 'experience-section-card-header');
    achElem.innerText = 'Achievements';

    let achUlElem = document.createElement('ul');

    for (let j = 0; j < exp['achievements'].length; j++) {
      let liElem = document.createElement('li');
      liElem.setAttribute('class', 'experience-section-card-item');
      liElem.innerText = exp['achievements'][j];

      achUlElem.appendChild(liElem);
    }

    subcardWhiteElem.appendChild(respElem);
    subcardWhiteElem.appendChild(respUlElem);
    subcardWhiteElem.appendChild(techElem);
    subcardWhiteElem.appendChild(techUlElem);
    subcardWhiteElem.appendChild(achElem);
    subcardWhiteElem.appendChild(achUlElem);

    cardElem.appendChild(subcardRoseElem);
    cardElem.appendChild(subcardWhiteElem);

    parrentElem.appendChild(cardElem);
  }
})();

