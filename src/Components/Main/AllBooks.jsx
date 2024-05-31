import './AllBooks.css';
import Book from '../Sub/Book.jsx';

export default function AllBooks(props) {
  function liftBookToAppHandler(bookToAdd) {
    props.addToRequestListHandler(bookToAdd);
  }

  function liftPreviewHandler(bookToPreview){
    props.addToPreview(bookToPreview)
  }
  
  return (
    <section id="all-books-list">
      {props.bookList.map((thisBook) => <Book key={thisBook.id} book={thisBook} liftBookToAppHandler={liftBookToAppHandler} preview={liftPreviewHandler}></Book>)}
    </section>
  )
}