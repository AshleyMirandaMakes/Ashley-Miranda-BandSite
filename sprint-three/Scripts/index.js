// const commentListEl = document.querySelector("#comment-list")
// const formEl = document.querySelector("#comment-form");
// const comments = [];
// let commentsArray = [];
// //console.log(comments);

// //---------
// axios
//   .get(API_URL + COMMENTS + API_KEY)
//   .then(response => {
//     const comments = response.data;
//     console.log(comments);
//     commentsArray = response.data;

//     comments.sort((a, b) => {
//     commentsArray.sort((a, b) => {
//       return new Date(b.timestamp) - new Date(a.timestamp);
//     });

//     function displayComment() {
//      //clear the comments list-- no duplicates
//      commentListEl.innerHTML = "";

//      comments.forEach(comment => {
//      commentsArray.forEach(comment => {
//        createCommentCards(comment);
//      })
//     }



// //---------

// //IS THIS ALL THE ADD EVENT LISTENER I NEED?
// formEl.addEventListener('submit', (event) => {
//   event.preventDefault();
//    // grab the data fom the form
// @@ -54,25 +54,27 @@ formEl.addEventListener('submit', (event) => {
//    axios
//    .post(API_URL + COMMENTS + API_KEY, {
//      //sends to API
//     "name": formName,
//     "comment": formComment

//       name: formName,
//       comment: formComment,
//     })
//     .then(response => {
//       const comments = response.data
//       console.log(comments);
//       let newComment = response.data
//       commentsArray.push(newComment);

//       commentsArray.sort((a, b) => {
//         return new Date(b.timestamp) - new Date(a.timestamp);
//       });

//       function displayComment() {
//        //clear the comments list-- no duplicates
//        commentListEl.innerHTML = "";

//        commentsArray.forEach(comment => {
//          createCommentCards(comment);
//        })
//       }
//       displayComment();

//       //TODO - displayComments

//       //  function displayComment() {
//       //     //clear the comments list-- no duplicates
//       //   commentListEl.innerHTML = "";

//       //   comments.forEach(comment => {
//       //   createCommentCards(comment);
//       //     })
//       //  }
//       //  displayComment();

//        }).catch(error => {
//            console.log(error);
// @@ -82,14 +84,12 @@ formEl.addEventListener('submit', (event) => {
// }
// ) 


// // function resetForm() {
// //   document.getElementById("comment-form").reset();
// // }

// // formEl.addEventListener('submit', handleFormSubmission);
// // formEl.addEventListener('submit', resetForm)

//   function displayComment(x) {
//     //clear the comments list-- no duplicates
//   commentListEl.innerHTML = "";
//   createCommentCards(x);
//   return x;
//   }

// //---------
// //function to help create some elements & add classes
// @@ -133,4 +133,7 @@ function createCommentCards(comment) {
//   cardContentBottom.appendChild(cardComment);

//    commentListEl.appendChild(cardEl);
//   }; 
//   };

//   // formEl.addEventListener('submit', handleFormSubmission);
// // formEl.addEventListener('submit', resetForm)