//just adding a comment to check something with git


window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    var entryContent = document.getElementById('todo-input').value;
    var newEntryContent = document.createTextNode(entryContent);
    var newEntry = document.createElement('li');
    
    var toDoList = document.getElementsByClassName('todo-list-items')[0];
    var firstToDoItem = toDoList.getElementsByTagName('li') [0];

    newEntry.appendChild(newEntryContent);
    toDoList.insertBefore(newEntry, firstToDoItem)
     
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    var toDoList = document.getElementsByClassName('todo-list-items')[0];
    var doneList = document.getElementsByClassName('done-list-items')[0];

    firstToDoItem = toDoList.getElementsByTagName('li') [0];
    firstDoneItem = doneList.getElementsByTagName('li') [0];

    doneList.insertBefore(firstToDoItem, firstDoneItem)

  }
  
}
