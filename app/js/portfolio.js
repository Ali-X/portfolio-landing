let screenshotsFE = [
  {
    file: 'bicycle.JPG',
    name: 'Bicycle Landing',
    tech: 'HTML5, SCSS, Gulp',
    date: 'Dec 2018',
    link: 'https://github.com/Ali-X/bicycle-landing'
  },
  {
    file: 'bouncy.JPG',
    name: 'Bouncy',
    tech: 'HTML5, SCSS, Gulp',
    date: 'Dec 2018',
    link: 'https://github.com/Ali-X/bouncy'
  }
];

let screenshotsBE = [
  {
    file: 'springmvc.png',
    name: 'App Market',
    tech: 'REST, Spring (MVC, JDBC, ORM), Hibernate, H2, Jackson, React',
    date: ' Dec 2017',
    link: 'https://github.com/Ali-X/app-market'
  },
  {
    file: 'springboot.png',
    name: 'Student Accounting System',
    tech: 'Spring boot (JPA, REST, WEB), H2, Guava, React',
    date: 'Dec 2017',
    link: 'https://github.com/Ali-X/students-hostel'
  },
  {
    file: 'springhibernate.jpg',
    name: 'TrackQ',
    tech: 'Java 8, Spring, Hibernate, JSP, CSS, JavaScript, H2',
    date: 'Oct 2017',
    link: 'https://github.com/Ali-X/TrackQ_Hackathon'
  },
  {
    file: 'jsp.png',
    name: 'Internet shop',
    tech: 'Java 8, Spring, Hibernate, JSP, CSS, H2',
    date: 'Aug - Sep 2017',
    link: 'https://github.com/Ali-X/Internet_Shop_Template'
  }
];

getscreenshotsFE();
getscreenshotsBE();

function getscreenshotsFE() {
  let portfolioElem = document.getElementsByClassName("portfolio--fe")[0];
  createPortfolioItem(portfolioElem, screenshotsFE);
}

function getscreenshotsBE() {
  let portfolioElem = document.getElementsByClassName("portfolio--be")[0];
  createPortfolioItem(portfolioElem, screenshotsBE);
}

function createPortfolioItem(portfolioElem, screenshots) {
  for (let i = 0; i < screenshots.length; i++) {
    let element = document.createElement('div');
    element.setAttribute('class', 'portfolio-item');
    element.style.backgroundImage = 'url(\"../img/' + screenshots[i]['file'] + '\")';

    let overlayElem = document.createElement("a");
    overlayElem.setAttribute('class', 'portfolio-item-overlay');
    overlayElem.setAttribute('href', screenshots[i]['link']);
    overlayElem.setAttribute('target', '_blank');

    let overlayNameElem = document.createElement("div");
    overlayNameElem.setAttribute('class', 'portfolio-item-overlay-pname');
    overlayNameElem.innerText = screenshots[i]['name'];

    let overlayTechElem = document.createElement("div");
    overlayTechElem.setAttribute('class', 'portfolio-item-overlay-tech');
    overlayTechElem.innerText = screenshots[i]['tech'];

    let overlayDateElem = document.createElement("div");
    overlayDateElem.setAttribute('class', 'portfolio-item-overlay-date');
    overlayDateElem.innerText = screenshots[i]['date'];

    overlayElem.appendChild(overlayNameElem);
    overlayElem.appendChild(overlayTechElem);
    overlayElem.appendChild(overlayDateElem);

    element.appendChild(overlayElem);

    portfolioElem.appendChild(element);
  }
}

