const comments = [
  {
    name: "Connor Walton",
    timestamp: 02/17/2021,
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Emilie Beach",
    timestamp: 01/09/2021,
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  {
    name: "Miles Acosta",
    timestamp: 12/20/2020,
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  }
]

//check that the object array prints to the console
const comment = comments[0];
console.log(comment);

const commentListEl = document.querySelector("#comment__list")


// const nameEl = 

//  <!-- this is what you're adding now
//  <section class="comment__section" id="#">
//  <div class="card__list">
//    <article class="comment__card">
//      <div class="comment__image"></div>
//      <div class="comment__content--top">
//        <h2 class="comment__title">CARD TITLE</h2>
//        <h2 class="comment__timestamp">TIMESTAMP</h2>
//      </div>
//      <div class="comment__content--bottom">
//        <p class="comment__text">INPUT COMMENT</p>
//      </div>
//    </article>
//  </div>
// </section> -->


const cardEl = createElementWithClass("article", "comment__card");

commentListEl.appendChild(cardEl);

//function declaration- hoisted
function createElementWithClass (tag, className) {
  const el = document.createElement(tag);
  el.classList.add(className);

  return el;
}