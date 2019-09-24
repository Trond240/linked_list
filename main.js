var aside = document.querySelector('aside');
var asideTitleInput = document.getElementById('aside-title-input');
var asideUrlInput = document.getElementById('aside-url-input');
var asideAddBookmarkButton = document.querySelector('.aside-add-bookmark-button');
var makeBookList = document.querySelector('.aside-add-bookmark-button');
var bookList = [];

// aside.addEventListener('click', asideEventListener);
asideTitleInput.addEventListener('input', disableEnterButton);


function disableEnterButton() {
  if (asideTitleInput.value.length > 0) {
    makeBookList.disabled = false;
  } else {
    makeBookList.disabled = true;
  }
};

// function showTaskCard(taskItems, toDoList) {
//   cards.innerHTML = `
//   <section data-id=${toDoList.id} class='card'>
//     <header>
//       <h2 class='card-header'>${toDoList.title}</h2>
//     </header>
//     <label class='card-task-container'>
//     ${showTasksFromArr(taskItems)}
//     </label>
//     <footer>
//       <span class='urgent-button-container'>
//         <button class='urgent-button'>
//           <img class='urgent-img' src='images/urgent.svg'>
//         </button>
//         <p class='card-button-label'>URGENT</p>
//       </span>
//       <span class='card-delete-button-container'>
//         <button class='delete-button' disabled>
//         </button>
//         <p class='card-button-label'>DELETE</p>
//       </span>
//     </footer>
//    </section>` + cards.innerHTML;
// };
