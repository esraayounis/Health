/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  
  var media_query = 'screen and (max-width:600px)';
  var matched = window.matchMedia(media_query).matches;
  if (matched) {
    var shareCard = document.getElementById('set-card-data-mob').innerHTML
  }
  else{
    var shareCard = document.getElementById('set-card-data-web').innerHTML
  }

  let postUrl = encodeURI(shareCard);
  let postTitle = encodeURI("Hi everyone, please check this out: ");
  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );


  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );


  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
var media_query = 'screen and (max-width:600px)';
  var matched = window.matchMedia(media_query).matches;
  if (matched) {
    const shareButtonMob = document.getElementById('shareButtonMob');
    const shareDialog = document.querySelector('.share-dialog');
    const closeButton = document.querySelector('.close-button');

    shareButtonMob.addEventListener('click', event => {
      
      shareDialog.classList.add('is-open');
    });

    closeButton.addEventListener('click', event => {
      shareDialog.classList.remove('is-open');
    });
  }
  else{
    const shareButton = document.getElementById('shareButton');
    const shareDialog = document.querySelector('.share-dialog');
    const closeButton = document.querySelector('.close-button');

    shareButton.addEventListener('click', event => {
      
      shareDialog.classList.add('is-open');
    });

    closeButton.addEventListener('click', event => {
      shareDialog.classList.remove('is-open');
    });

  }

