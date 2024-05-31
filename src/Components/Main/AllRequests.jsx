import Request from "../Sub/Request";
import "./AllRequests.css"

export default function AllRequests(props) {
  function liftRequestToRemoveHandler(bookToRemove) {
    // call the function received from App component
    props.removeList(bookToRemove);
  }

  return (
    <section id="all-requests-list">
      {/* <h2>Requests</h2> */}

      {props.requestList.map((thisRequest) => (
        <Request
          liftRequestToRemoveHandler={liftRequestToRemoveHandler}
          book={thisRequest}
          key={thisRequest.id}
        ></Request>
      ))}
    </section>
  );
}