

const showsSectionEl = document.querySelector(".shows__section");
const showsEl = createElementWithClass("section", "shows");
showsSectionEl.appendChild(showsEl);

//show titles div-- for styling
const showsHeadings = createElementWithClass("div", "shows__headings");
showsEl.appendChild(showsHeadings);

const showsTitleEl = createElementWithClass("h2", "shows__title");
showsTitleEl.innerText = "Shows";
showsHeadings.appendChild(showsTitleEl);

//---------
//show subtitles - for tablet and desktop only
const showsSubtitleListEl = createElementWithClass("ul", "shows__subtitle-list");
showsHeadings.appendChild(showsSubtitleListEl);

const subtitles = ["DATES", "VENUE", "LOCATION"];

function createSubtitleEl(subtitle) {
  const showsSubtitleEl = createElementWithClass("li", "shows__subtitle-list--element");
      showsSubtitleEl.innerText = subtitle;
      showsSubtitleListEl.appendChild(showsSubtitleEl);
      return showsSubtitleEl;
}

function displaySubtitleEl() {
  for (let i = 0; i < subtitles.length; i++) {
    let showsSubtitleEl  = createSubtitleEl(subtitles[i]);
    showsSubtitleListEl.appendChild(showsSubtitleEl);
  };
}

displaySubtitleEl();

const showsListEl = createElementWithClass("article", "shows__list");
showsEl.appendChild(showsListEl);


//--------- API STUFF
const API_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "?api_key=c17796ea-16ad-4563-bc21-20cce98c75b3";
const GET_SHOWDATES = "/showdates"


axios
  .get(API_URL + GET_SHOWDATES + API_KEY)
  .then(response => {
     let showdates = response.data
     console.log(showdates);

     function displayShows() {
       showdates.forEach(date => {
         createShowCards(date);
       })
     }
     displayShows();
    })   
  .catch(error => {
        console.log(`${error} Unable to retrieve comment data`);
        //TODO - maybe retry API after a timeout
    });


//---------
// show cards - longest function ever
function createShowCards(show) {
  const cardEl = createElementWithClass("article", "showCard");
  showsListEl.appendChild(cardEl);
 
  const cardTitleOne = createElementWithClass("h3", "showCard__title");
  cardTitleOne.innerText = "DATES";
  cardEl.appendChild(cardTitleOne);
  
  const cardDate = createElementWithClass("h3", "showCard__date");
  let timeStamp = parseInt(show.date);
  timeStamp = new Date(timeStamp).toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric'}).replaceAll(","," ");
  console.log(new Date(timeStamp));
  cardDate.innerText = timeStamp;
  cardEl.appendChild(cardDate)

  const cardTitleTwo = createElementWithClass("h3", "showCard__title");
  cardTitleTwo.innerText = "VENUE";
  cardEl.appendChild(cardTitleTwo);
  
  const cardVenue = createElementWithClass("h3", "showCard__venue");
  cardVenue.innerText = show.place;
  cardEl.appendChild(cardVenue);

  const cardTitleThree = createElementWithClass("h3", "showCard__title");
  cardTitleThree.innerText = "LOCATION";
  cardEl.appendChild(cardTitleThree);

  const cardLocation = createElementWithClass("h3", "showCard__location");
  cardLocation.innerText = show.location;
  cardEl.appendChild(cardLocation);

  const cardButton = createElementWithClass("a", "showCard__button");
  cardButton.href = "#";
  cardButton.innerText = "BUY TICKETS";
  cardButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Venue clicked:', show.place);
  })
  cardEl.appendChild(cardButton);

  return cardEl;
  };

//---------
// element with class creator
function createElementWithClass (element, className) {
  const el = document.createElement(element);
  el.classList.add(className);

  return el;
}
