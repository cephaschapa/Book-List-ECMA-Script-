class Book {
constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
}
class UI {
    addBookToList(book){
        const list = document.getElementById('book-list')
        //create element
        const row = document.createElement('tr')
        console.log(row);

        //insert cols
        row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
        `;
        list.appendChild(row);
    }
    showAlert(message, className){
        //create div
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);


        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById('title').value = " ";
        document.getElementById('author').value = " ";
        document.getElementById('isbn').value = " ";
    }
}

//event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const ui = new UI();
    //Validate
    const book = new Book(title, author, isbn);
    if(title === "" || author === "" || isbn === ""){
        //error alert
        ui.showAlert('Please fill in input field', 'error')
    }
    else{
        ui.addBookToList(book);
        //ui clear fields
        ui.clearFields();
        ui.showAlert('Book added to the list', 'success')
    
    }
    
   
    e.preventDefault();
});


//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
   const ui = new UI();
   ui.deleteBook(e.target);

   ui.showAlert('Book Removed', 'removed')
   

    e.preventDefault();
})