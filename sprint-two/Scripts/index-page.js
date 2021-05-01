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



//function to help create some el & add classes
function createElementWithClass (element, className) {
  const el = document.createElement(element);
  el.classList.add(className);

  return el;
}


 


//this function creates comment cards
function createCommentCards(comment) {
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
  // let objectArrayTimestamp = comment.timestamp;
  // console.log(typeof objectArrayTimestamp)
  // objectArrayTimestamp = String(objectArrayTimestamp);
  // console.log(typeof objectArrayTimestamp)
  // objectArrayTimestamp.toLocaleDateString("en-US");
  let timeStamp = new Date().toLocaleDateString("en-US");
  console.log(typeof timeStamp)
  cardTimestamp.innerText = timeStamp;
  cardContentTop.appendChild(cardTimestamp);

  const cardContentBottom = createElementWithClass("div", "comment__content--bottom");
  cardContent.appendChild(cardContentBottom);
  
  const cardComment = createElementWithClass("p", "comment__comment");
  cardComment.innerText = comment.comment;
  cardContentBottom.appendChild(cardComment);
  
  return cardEl;
  };

//item id selection to link to html -- global
const commentListEl = document.querySelector("#comment-list")


//function to render comment to the page 
function displayComment() {
  //clear comments for not duplicates goes here?
  //clear the comments list-- no duplicates
  commentListEl.innerHTML = "";
  
  //render all comments
  for (let i = 0; i < comments.length; i++) {
    let cardEl = createCommentCards(comments[i]);
    commentListEl.appendChild(cardEl);
  };
}
//invoke the function, so it appears on page load
displayComment();

//comment form
const formEl = document.querySelector("#comment-form");

function handleFormSubmission(event) {
  event.preventDefault();

  //add an if statement about inputs being empty

    const commentData = {
      name: event.target.fullName.value,
      comment: event.target.fullComment.value
    };
    
  comments.unshift(commentData);
  displayComment();

  //resets the form at the end of the reset/submit event
  resetForm(event);
};

function resetForm() {

  document.getElementById("comment-form").reset();
}

formEl.addEventListener('submit', handleFormSubmission);
formEl.addEventListener('submit', resetForm)




