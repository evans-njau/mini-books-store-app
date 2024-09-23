//Deletes a book from the store
const list = document.querySelector('#book-list ul ');
list.addEventListener('click',(e)=>{
   if(e.target.className=='delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
   }
});
//Adds a book to the store
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newBook = addForm.querySelector('input[type="text"]').value;
    //create your elements
    const li = document.createElement('li');
    const addBook = document.createElement('span');
    const Delete = document.createElement('span');
    //add classes
    addBook.classList.add('name');
    Delete.classList.add('delete');

    //Dynamic content adding
    addBook.textContent = newBook;
    Delete.textContent = 'Delete';
    //Append your Elements
    li.appendChild(addBook);
    li.appendChild(Delete);
    list.appendChild(li);
})
//Hiding all our books
const checkBox = document.querySelector("input[type='checkbox']");
checkBox.addEventListener('change',(e)=>{
    if(checkBox.checked){
        list.style.display = 'none';
    }
    else{
        list.style.display = 'initial';
    }
})
//input search
const searchInput = document.forms['search-books'].querySelector('input');
searchInput.addEventListener('keyup', (e)=>{
    const item = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    //convert to an array
    Array.from(books).forEach((book)=>{
        const title = book.firstElementChild.textContent;
        //tests if the item matches an existing
       if(title.toLowerCase().indexOf(item) != -1){
        book.style.display = 'block';
       }else{
        book.style.display = 'none';
       }
    });

});