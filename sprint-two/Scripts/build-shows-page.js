const shows = [
  {
    titleOne: "DATES",
    date: "Mon Sept 06 2021",
    titleTwo: "VENUE",
    venue: "Ronald Lane",
    titleThree: "LOCATION",
    location: "San Francisco, CA"

  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA"
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA"
  },
];

//check object appears in the console

//item id selection to link to html -- global
const showsListEl = document.querySelector("#shows-list")

//show card  creator
function createShowCards(show) {
  //card creation
  const cardEl = createElementWithClass("article", "shows__card");
  showsListEl.appendChild(cardEl);
 
  const cardTitleOne = createElementWithClass("h3", "card__title");
  cardTitleOne.innerText = "DATES";
  cardEl.appendChild(cardTitleOne);
  
  const cardDate = createElementWithClass("h3", "card__date");
  cardDate.innerText = shows.date;
  cardEl.appendChild(cardDate);

  const cardTitleTwo = createElementWithClass("h3", "card__title");
  cardTitleTwo.innerText = "VENUE";
  cardEl.appendChild(cardTitleTwo);
  
  const cardVenue = createElementWithClass("h3", "card__venue");
  cardVenue.innerText = shows.venue;
  cardEl.appendChild(cardVenue);

  const cardTitleThree = createElementWithClass("h3", "card__title");
  cardTitleThree.innerText = "LOCATION";
  cardEl.appendChild(cardTitleThree);

  const cardLocation = createElementWithClass("h3", "card__location");
  cardLocation.innerText = shows.location;
  cardEl.appendChild(cardLocation);

  const cardButton = createElementWithClass("a", "card__button")
  cardButton.href = "#";
  cardButton.innerText = "BUY TICKETS";
  cardButton.classList.add("card__button");
  cardEl.appendChild(cardButton);

  return cardEl;
  };

//function to render show to the page 
function displayShows() {
  // showsListEl.innerHTML = "";
  
  //render all shows
  for (let i = 0; i < shows.length; i++) {
    let cardEl = createShowCards(shows[i]);
    showsListEl.appendChild(cardEl);
  };
}
//invoke the function, so it appears on page load
displayShows();

console.log(shows)

//function to help create some el & add classes
function createElementWithClass (element, className) {
  const el = document.createElement(element);
  el.classList.add(className);

  return el;
}
