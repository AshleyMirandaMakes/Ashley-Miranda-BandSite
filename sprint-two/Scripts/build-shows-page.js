const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
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

// //check object appears in the console
// console.log(shows.date);


// is the main ok?

//item id selection to link to html -- global

const mainEl = document.querySelector("main");
const showsEl = createElementWithClass("section", "shows");
mainEl.appendChild(showsEl);

const showsTitleEl = createElementWithClass("h2", "shows__title");
showsEl.appendChild(showsTitleEl);

const showsListEl = createElementWithClass("article", "shows");
showsEl.appendChild(showsListEl);



//show card  creator
function createShowCards(show) {
  const cardEl = createElementWithClass("article", "showCard");
  showsListEl.appendChild(cardEl);
 
  const cardTitleOne = createElementWithClass("h3", "showCard__title");
  cardTitleOne.innerText = "DATES";
  cardEl.appendChild(cardTitleOne);
  
  const cardDate = createElementWithClass("h3", "showCard__date");
  cardDate.innerText = show.date;
  cardEl.appendChild(cardDate);

  const cardTitleTwo = createElementWithClass("h3", "showCard__title");
  cardTitleTwo.innerText = "VENUE";
  cardEl.appendChild(cardTitleTwo);
  
  const cardVenue = createElementWithClass("h3", "showCard__venue");
  cardVenue.innerText = show.venue;
  cardEl.appendChild(cardVenue);

  const cardTitleThree = createElementWithClass("h3", "showCard__title");
  cardTitleThree.innerText = "LOCATION";
  cardEl.appendChild(cardTitleThree);

  const cardLocation = createElementWithClass("h3", "showCard__location");
  cardLocation.innerText = show.location;
  cardEl.appendChild(cardLocation);

  const cardButton = createElementWithClass("a", "showCard__button");
  //for (let i = 0; i > comments.length; i++)
  
  cardButton.href = "#";
  cardButton.innerText = "BUY TICKETS";
  cardButton.classList.add("showCard__button");
  cardEl.appendChild(cardButton);

  return cardEl;
  };



function displayShows() {
  
  for (let i = 0; i < shows.length; i++) {
    let cardEl = createShowCards(shows[i]);
    showsListEl.appendChild(cardEl);
  };
}

displayShows();

const button = document.querySelector('.showCard__button');
button.addEventListener("click", (event) => {
  console.log(`Button clicked at ${event.clientX}, ${event.clientY}`);
  console.log(event);
});


function createElementWithClass (element, className) {
  const el = document.createElement(element);
  el.classList.add(className);

  return el;
}
