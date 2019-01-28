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

  for (let i = 0; i < screenshotsFE.length; i++) {
    let element = document.createElement('div');
    element.setAttribute('class', 'portfolio-item');
    element.style.backgroundImage = 'url(\"../img/' + screenshotsFE[i]['file'] + '\")';

    portfolioElem.appendChild(element);
  }
}

function getscreenshotsBE() {
  let portfolioElem = document.getElementsByClassName("portfolio--be")[0];

  for (let i = 0; i < screenshotsBE.length; i++) {
    let element = document.createElement('div');
    element.setAttribute('class', 'portfolio-item');
    element.style.backgroundImage = 'url(\"../img/' + screenshotsBE[i]['file'] + '\")';

    portfolioElem.appendChild(element);
  }
}

