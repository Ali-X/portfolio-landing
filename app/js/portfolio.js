let screenshotsFE = [
  {
    file: 'bhagaskara.JPG',
    name: 'Bhagaskara.',
    tech: 'React',
    date: 'Feb 2019',
    link: 'https://ali-x.github.io/Mate-hackathon'
  },
  {
    file: 'bicycle.JPG',
    name: 'Bicycle Landing',
    tech: 'HTML5, SCSS, Gulp',
    date: 'Dec 2018',
    link: 'https://ali-x.github.io/bicycle-landing/src/'
  },
  {
    file: 'bouncy.JPG',
    name: 'Bouncy',
    tech: 'HTML5, SCSS, Gulp',
    date: 'Dec 2018',
    link: 'https://ali-x.github.io/bouncy/build/'
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

getScreenshotsFE();
getScreenshotsBE();

function getScreenshotsFE() {
  let portfolioElem = document.getElementsByClassName("portfolio--fe")[0];
  createPortfolioItem(portfolioElem, screenshotsFE);
}

function getScreenshotsBE() {
  let portfolioElem = document.getElementsByClassName("portfolio--be")[0];
  createPortfolioItem(portfolioElem, screenshotsBE);
}

function createPortfolioItem(portfolioElem, screenshots) {
  for (let i = 0; i < screenshots.length; i++) {
    let element = document.createElement('div');
    element.setAttribute('class', 'portfolio__item');
    element.style.backgroundImage = 'url(\"img/' + screenshots[i]['file'] + '\")';

    let overlayElem = document.createElement("a");
    overlayElem.setAttribute('class', 'portfolio__overlay');
    overlayElem.setAttribute('href', screenshots[i]['link']);
    overlayElem.setAttribute('target', '_blank');

    let overlayNameElem = document.createElement("div");
    overlayNameElem.setAttribute('class', 'portfolio__pname');
    overlayNameElem.innerText = screenshots[i]['name'];

    let overlayTechElem = document.createElement("div");
    overlayTechElem.setAttribute('class', 'portfolio__tech');
    overlayTechElem.innerText = screenshots[i]['tech'];

    let overlayDateElem = document.createElement("div");
    overlayDateElem.setAttribute('class', 'portfolio__date');
    overlayDateElem.innerText = screenshots[i]['date'];

    overlayElem.appendChild(overlayNameElem);
    overlayElem.appendChild(overlayTechElem);
    overlayElem.appendChild(overlayDateElem);

    element.appendChild(overlayElem);

    let tipElement = document.createElement('div');
    tipElement.setAttribute('class', 'portfolio__tip ');
    tipElement.innerHTML = '<img alt="click me" class="portfolio__tip-img" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2OS4zMzMgNDY5LjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY5LjMzMyA0NjkuMzMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDM4LjgyNywxODYuMzQ3bC04MC4yMTMtODguMTQ5Yy0xNS44NzItMTUuODcyLTQxLjcyOC0xNS44OTMtNTcuNzQ5LDAuMTI4Yy01LjA3Nyw1LjA3Ny04LjUzMywxMS4xNTctMTAuMzI1LDE3LjY0MyAgICBjLTE1Ljk1Ny0xMi4yMjQtMzguOTc2LTExLjAwOC01My42NzUsMy42OTFjLTUuMDU2LDUuMDc3LTguNTEyLDExLjE1Ny0xMC4zNDcsMTcuNjIxYy0xNS45NTctMTIuMTgxLTM4Ljk3Ni0xMC45ODctNTMuNjUzLDMuNzEyICAgIGMtNC45NzEsNC45NzEtOC4zODQsMTAuOTAxLTEwLjI0LDE3LjIxNmwtMzcuODAzLTM3LjgwM2MtMTUuODcyLTE1Ljg3Mi00MS43MjgtMTUuODkzLTU3Ljc0OSwwLjEyOCAgICBjLTE1Ljg5MywxNS44NzItMTUuODkzLDQxLjcyOCwwLDU3LjYyMWwxNDUuMjM3LDE0NS4yMzdsLTg2LjE0NCwxMy41MjVjLTIzLjI3NSwzLjMyOC00MC44MzIsMjMuNTUyLTQwLjgzMiw0Ny4wODMgICAgYzAsMTcuNjQzLDE0LjM1NywzMiwzMiwzMmgyMDEuMTUyYzMxLjMzOSwwLDYwLjgtMTIuMjAzLDgyLjk2NS0zNC4zNjhsMzMuNTU3LTMzLjU1N2MyMi4xNDQtMjIuMTIzLDM0LjMyNS01MS41NjMsMzQuMzI1LTgyLjg1OSAgICBDNDY5LjMzMywyMzUuOTg5LDQ1OC40OTYsMjA3Ljk3OSw0MzguODI3LDE4Ni4zNDd6IE00MTkuOTI1LDMzMi45OTJsLTMzLjU1NywzMy41NTdjLTE4LjEzMywxOC4xMzMtNDIuMjQsMjguMTE3LTY3Ljg4MywyOC4xMTcgICAgSDExNy4zMzNjLTUuODg4LDAtMTAuNjY3LTQuNzc5LTEwLjY2Ny0xMC42NjdjMC0xMi45NzEsOS42ODUtMjQuMTI4LDIyLjY3Ny0yNS45ODRsMTA2Ljk4Ny0xNi44MTEgICAgYzMuOTY4LTAuNjE5LDcuMjMyLTMuNDEzLDguNDkxLTcuMjMyYzEuMjM3LTMuNzk3LDAuMjM1LTgtMi42MDMtMTAuODM3TDgyLjE1NSwxNjMuMDcyYy03LjU3My03LjU3My03LjU3My0xOS45MDQsMC4xMDctMjcuNjA1ICAgIGMzLjc5Ny0zLjc3Niw4Ljc2OC01LjY3NSwxMy43MzktNS42NzVjNC45NzEsMCw5Ljk0MSwxLjg5OSwxMy43MzksNS42OTZsMTA2LjczMSwxMDYuNzMxYzQuMTYsNC4xNiwxMC45MjMsNC4xNiwxNS4wODMsMCAgICBjMi4wNjktMi4wOTEsMy4xMTUtNC44MjEsMy4xMTUtNy41NTJzLTEuMDQ1LTUuNDYxLTMuMTM2LTcuNTUybC00My41ODQtNDMuNTg0Yy03LjU3My03LjU3My03LjU3My0xOS44ODMsMC4xMjgtMjcuNTg0ICAgIGM3LjU1Mi03LjU1MiwxOS45MDQtNy41NTIsMjcuNDU2LDBsNDMuNjA1LDQzLjYwNWM0LjE2LDQuMTYsMTAuOTIzLDQuMTYsMTUuMDgzLDBjMi4wNjktMi4wOTEsMy4xMTUtNC44MjEsMy4xMTUtNy41NTIgICAgYzAtMi43MzEtMS4wNDUtNS40NjEtMy4xMzYtNy41NTJsLTIyLjI1MS0yMi4yNTFjLTcuNTczLTcuNTczLTcuNTczLTE5Ljg4MywwLjEyOC0yNy41ODRjNy41NTItNy41NTIsMTkuOTA0LTcuNTUyLDI3LjQ1NiwwICAgIGwyMi4zNTcsMjIuMzU3YzAuMDQzLDAuMDIxLDAuMDIxLDAuMDIxLDAuMDIxLDAuMDIxbDAuMDIxLDAuMDIxYzAuMDIxLDAuMDIxLDAuMDIxLDAuMDIxLDAuMDIxLDAuMDIxICAgIGMwLjAyMSwwLjAyMSwwLjAyMSwwLjAyMSwwLjAyMSwwLjAyMWgwLjAyMWMwLjAyMSwwLDAuMDIxLDAuMDIxLDAuMDIxLDAuMDIxYzQuMTgxLDMuOTY4LDEwLjc5NSwzLjg4MywxNC44NjktMC4yMTMgICAgYzQuMTYtNC4xNiw0LjE2LTEwLjkyMywwLTE1LjA4M2wtMC45MTctMC45MTdjLTMuNjY5LTMuNjY5LTUuNjk2LTguNTU1LTUuNjk2LTEzLjczOXMyLjAwNS0xMC4wNDgsNS44MDMtMTMuODQ1ICAgIGM3LjU5NS03LjU1MiwxOS44ODMtNy41MzEsMjcuMTE1LTAuMzYzbDc5Ljg3Miw4Ny43ODdDNDM5LjEyNSwyMTguMzg5LDQ0OCwyNDEuMzAxLDQ0OCwyNjUuMjE2ICAgIEM0NDgsMjkwLjgxNiw0MzguMDM3LDMxNC44OCw0MTkuOTI1LDMzMi45OTJ6IiBmaWxsPSIjMTMxMjAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTgzLjM4MSwxMDkuOTMxQzE2Ny44NTEsNzUuNTYzLDEzMy41NDcsNTMuMzMzLDk2LDUzLjMzM2MtNTIuOTI4LDAtOTYsNDMuMDcyLTk2LDk2ICAgIGMwLDM3LjU0NywyMi4yMjksNzEuODUxLDU2LjU5Nyw4Ny40MDNjMS40MjksMC42NCwyLjkyMywwLjkzOSw0LjM5NSwwLjkzOWM0LjA1MywwLDcuOTM2LTIuMzQ3LDkuNzI4LTYuMjcyICAgIGMyLjQxMS01LjM3NiwwLjAyMS0xMS42OTEtNS4zMzMtMTQuMTIzYy0yNi43NTItMTIuMDk2LTQ0LjA1My0zOC43NjMtNDQuMDUzLTY3Ljk0N2MwLTQxLjE3MywzMy40OTMtNzQuNjY3LDc0LjY2Ny03NC42NjcgICAgYzI5LjE4NCwwLDU1Ljg1MSwxNy4zMDEsNjcuOTQ3LDQ0LjA1M2MyLjQxMSw1LjM3Niw4Ljc0Nyw3Ljc4NywxNC4xMDEsNS4zMzNDMTgzLjQyNCwxMjEuNjIxLDE4NS44MTMsMTE1LjMwNywxODMuMzgxLDEwOS45MzF6IiBmaWxsPSIjMTMxMjAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="/>';

    element.appendChild(tipElement);
    portfolioElem.appendChild(element);
  }
}

