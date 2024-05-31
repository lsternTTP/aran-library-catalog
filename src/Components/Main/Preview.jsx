import './Preview.css';

export default function Book(props) {
  // handle add request button click
  function clickRequestHandler() {
    props.liftBookToAppHandler(props.book);
  }

  return (
    <div className="preview-book-card">
      <img src={props.book.img}></img>
      <h2 class="title">{props.book.title}</h2>
      <h3>{props.book.author}</h3>
      <p>Published {props.book.yearPublished} in {props.book.language}</p>
      <p>{props.book.description}</p>
      
    </div>
  )
}