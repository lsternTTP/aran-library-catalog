import "./Request.css";
export default function Request(props) {
  function clickRemoveRequestHandler() {
    // call the function received from AllRequests
    props.liftRequestToRemoveHandler(props.book);
  }

  return (
    <div class="box">
      <p class="entry">
        <span class="title">{props.book.title}</span> by {props.book.author}
      </p>
      <span class="bin-box">
        <button class="bin" onClick={clickRemoveRequestHandler}>
        🗑
      </button>
        </span>
    </div>
  );
}
