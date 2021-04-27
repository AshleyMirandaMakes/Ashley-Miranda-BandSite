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

//check that the object array works
const comment = comments[0];

//item id selection to link to html
const commentListEl = document.querySelector("#comment__list")

//card creation
const cardEl = createElementWithClass("article", "comment__card");
commentListEl.appendChild(cardEl);

const cardImage = createElementWithClass("div", "comment__image");
cardEl.appendChild(cardImage);

const cardContentTop = createElementWithClass("div", "comment__content--top");
cardEl.appendChild(cardContentTop);

const cardName = createElementWithClass("h2", "comment__name");
cardName.innerText = comment.name;
cardContentTop.appendChild(cardName);

const cardTimestamp = createElementWithClass("h2", "comment__timestamp");
cardTimestamp.innerText = comment.timestamp;
cardContentTop.appendChild(cardTimestamp);

const cardContentBottom = createElementWithClass("div", "comment__content--bottom");
cardEl.appendChild(cardContentBottom);

const cardComment = createElementWithClass("p", "comment__comment");
cardComment.innerText = comment.comment;
cardContentBottom.appendChild(cardComment);

//function to help create some el & add classes
//function declaration- hoisted
function createElementWithClass (element, className) {
  const el = document.createElement(element);
  el.classList.add(className);

  return el;
}