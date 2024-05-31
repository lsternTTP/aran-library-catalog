import './AllBooks.css';
import Book from '../Sub/Book.jsx';

export default function AllBooks(props) {
  function liftBookToAppHandler(bookToAdd) {
    props.addToRequestListHandler(bookToAdd);
  }
  
  return (
    <section id="all-books-list">
      {props.bookList.map((thisBook) => <Book key={thisBook.id} book={thisBook} liftBookToAppHandler={liftBookToAppHandler}></Book>)}
    </section>
  )
}