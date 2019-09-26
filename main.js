var aside = document.querySelector('aside');
var asideTitleInput = document.getElementById('aside-title-input');
var asideUrlInput = document.getElementById('aside-url-input');
var asideAddBookmarkButton = document.querySelector('.aside-add-bookmark-button');
var makeBookList = document.querySelector('.aside-add-bookmark-button');
var bookmark = document.querySelector('.bookmark-section')
var bookListArr = document.querySelectorAll('.input');
var bookList = [];
var mainContainer = document.querySelector('.bookmark')

// aside.addEventListener('click', asideEventListener);
asideTitleInput.addEventListener('input', disableEnterButton);
document.querySelector('.aside-add-bookmark-button').addEventListener('click', showBookmark);
// asideAddBookmarkButton.addEventListener('click', showBookmarkCard);



function disableEnterButton() {
  if (asideTitleInput.value.length > 0) {
    makeBookList.disabled = false;
  } else {
    makeBookList.disabled = true;
  }
};

function makeBookCard(
  
)



function showBookmark(event) {
  event.preventDefault();
  var bookCardTemplate = `
  <section class='book-card'>
    <p class='title'><span>${asideTitleInput.value}</span>
      <div class ='url-title'>
      <p><span>URL</p>
      </div>
      <div class='card-buttons'>
        <button class ="read-button">Read</button>
        <button class ="delete-button">Delete</button>
      </div>
    </section>`
    ;

    var makeBookCard = document.querySelector('.aside-add-bookmark-button')

    mainContainer.innerHTML = bookCardTemplate;
};
