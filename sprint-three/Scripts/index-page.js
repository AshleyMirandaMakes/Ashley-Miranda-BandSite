//API variables
const API_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "?api_key=c17796ea-16ad-4563-bc21-20cce98c75b3";
const GET_COMMENTS = "/comments"

//---------
//other important variables
const commentListEl = document.querySelector("#comment-list")

//---------
axios
  .get(API_URL + GET_COMMENTS + API_KEY)
  .then(response => {
    const comments = response.data;
    console.log(comments);

    comments.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    function displayComment() {
     //clear the comments list-- no duplicates
     commentListEl.innerHTML = "";

     comments.forEach(comment => {
       createCommentCards(comment);
     })
    }
    displayComment();

    })
  .catch(error => {
        console.log(`${error} Unable to retrieve comment data`);
        //TODO - maybe retry API after a timeout
    });





//comment form
const formEl = document.querySelector("#comment-form");

function handleFormSubmission(event) {
  event.preventDefault();
   
  const commentData = {
    name: event.target.fullName.value,
    comment: event.target.fullComment.value
  };
    
  comments.unshift(commentData);

  if (requiredInput === "true") {
    displayComment();
  }
  resetForm(event);
};

//---------
//form validation
function requiredInput() {
  event.preventDefault();
  //ask why these are crossed out
  const formNameInput = event.target.fullName.value;
  const formCommentInput = event.target.fullComment.value;

  if (formNameInput || formCommentInput === "")
  {
  alert("Please input your comment");
  return false;
  }
}

function resetForm() {
  document.getElementById("comment-form").reset();
}

formEl.addEventListener('submit', handleFormSubmission);
formEl.addEventListener('submit', resetForm)


//---------
//function to help create some elements & add classes
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
  let timeStamp = new Date(comment.timestamp).toLocaleDateString("en-US");
  //that kinda works
  cardTimestamp.innerText = timeStamp;
  cardContentTop.appendChild(cardTimestamp);

  const cardContentBottom = createElementWithClass("div", "comment__content--bottom");
  cardContent.appendChild(cardContentBottom);
  
  const cardComment = createElementWithClass("p", "comment__comment");
  cardComment.innerText = comment.comment;
  cardContentBottom.appendChild(cardComment);
      
   commentListEl.appendChild(cardEl);
  };