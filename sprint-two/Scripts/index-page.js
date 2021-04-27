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

//item id selection to link to html
const commentListEl = document.getElementById("comment__list")

//check that the object array works
// const comment = comments[0];
//console.log(comments);

//this invokes my card-creating function
// createCommentCards(comments[0]);
// createCommentCards(comments[1]);
// createCommentCards(comments[2]);
// this prints my 3 cards onto the html just fine

//this loop creates comment cards and attaches them to the comment list on html
 for (let i = 0; i < comments.length; i++) {
   let cardEl = createCommentCards(comments[i]);
  //  console.log(createCommentCards(comments[i]));
   commentListEl.appendChild(cardEl);
 };
 
//this function creates my cards
function createCommentCards (comment) {
//card creation
const cardEl = createElementWithClass("article", "comment__card");
commentListEl.appendChild(cardEl);

const cardImage = createElementWithClass("div", "comment__image");
cardEl.appendChild(cardImage);

const cardContent = createElementWithClass("div", "comment__content");
cardEl.appendChild(cardContent);

const cardContentTop = createElementWithClass("div", "comment__content--top");
cardContent.appendChild(cardContentTop);

const cardName = createElementWithClass("h4", "comment__name");
cardName.innerText = comment.name;
cardContentTop.appendChild(cardName);

const cardTimestamp = createElementWithClass("h4", "comment__timestamp");
cardTimestamp.innerText = comment.timestamp;
cardContentTop.appendChild(cardTimestamp);
//learn how to manipulate this timestamp

const cardContentBottom = createElementWithClass("div", "comment__content--bottom");
cardContent.appendChild(cardContentBottom);

const cardComment = createElementWithClass("p", "comment__comment");
cardComment.innerText = comment.comment;
cardContentBottom.appendChild(cardComment);

//don't forget your return!
return cardEl;
};

//function to help create some el & add classes
//function declaration- hoisted
function createElementWithClass (element, className) {
  const el = document.createElement(element);
  el.classList.add(className);

  return el;
}