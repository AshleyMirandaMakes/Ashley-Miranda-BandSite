//API variables
const API_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "?api_key=c17796ea-16ad-4563-bc21-20cce98c75b3";
const COMMENTS = "/comments"

//---------
//other important variables
const commentListEl = document.querySelector("#comment-list")
const formEl = document.querySelector("#comment-form");
let commentsArray = [];

//---------
axios
  .get(API_URL + COMMENTS + API_KEY)
  .then(response => {
    commentsArray = response.data;
    commentsArray.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    function displayComment() {
     //clear the comments list-- no duplicates
     commentListEl.innerHTML = "";   
     commentsArray.forEach(comment => {
      createCommentCards(comment);
    })
   }
   displayComment();
  })
.catch(error => {
      console.log(`${error} Unable to retrieve comment data`);
  });


//---------
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
   // grab the data fom the form
   let formName = event.target.fullName.value;
   let formComment = event.target.fullComment.value;
   if (formName === "" && formComment === "") {
       alert("Please enter your name and comment");
       return;
   };

   axios
   .post(API_URL + COMMENTS + API_KEY, {
     //sends to API
     name: formName,
     comment: formComment,
   })
   .then(response => {
    let newComment = response.data
    commentsArray.push(newComment);

    commentsArray.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    function displayComment() {
     //clear the comments list-- no duplicates
     commentListEl.innerHTML = "";

     commentsArray.forEach(comment => {
       createCommentCards(comment);
     })
    }
    displayComment();

  }).catch(error => {
    console.log(`${error} 400, missing name and comment`);
  })

formEl.reset();
});

//---------
function displayComment(x) {
  createCommentCards(x);
  return x;
};

//function to help create some elements & add classes
function createElementWithClass (element, className) {
  const el = document.createElement(element);
  el.classList.add(className);
  return el;
};



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


  const cardButton = createElementWithClass("a", "comment__button");
  cardButton.href = "#";
  cardButton.innerText = "DELETE";
  cardButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Comment deleted.');
  })
  cardContentTop.appendChild(cardButton);

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

// formEl.addEventListener('submit', handleFormSubmission);
// formEl.addEventListener('submit', resetForm) 
