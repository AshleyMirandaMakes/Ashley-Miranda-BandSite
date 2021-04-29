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

//check object appears in the console.
console.log(shows[0]);

//id selections to link to html
const showsListEl = document.getElementById("shows__list")

//card creation 
const showsCardEl = createElementWithClass("article", "shows__card");
showsListEl.appendChild(showsCardEl);

//not working
const showsCardTitle = createElementWithClass("h4", "card__title");
showCardTitle.innerHTML = "DATES";
showsCardEl.appendChild(showsCardTitle);

{/* <section class="shows__section" id="shows__list">
       <article class="shows__card">
         <h4 class="card__title">DATES</h4>
         <h3 class="card__date">Sept 06 2021</h3>
         <h4 class="card__title">VENUE</h4>
         <h3 class="card__venue">Ronald Lane</h3>
         <h4 class="card__title">VENUE</h4>
         <h3 class="card__location">SF, CA</h3>
         <a href="#" class="button">BUT TICKETS</a>
       </article>
      </section> */}


      function createElementWithClass (element, className) {
        const el = document.createElement(element);
        el.classList.add(className);
      
        return el;
      }