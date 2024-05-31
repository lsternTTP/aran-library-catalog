import "./App.css";
import AllBooks from "./Components/Main/AllBooks.jsx";
import AllRequests from "./Components/Main/AllRequests.jsx";
import database from "../BookData.json";
import { useState } from "react";
import Preview from "./Components/Main/Preview.jsx"

export default function App() {
  // initialize request list state
  const [myRequests, setMyRequests] = useState([]);
  console.log("requests", myRequests);

  // initalize book list state
  const [myBooks, setMyBooks] = useState(database.catalog);
  console.log("books list", myBooks);

  function addToRequestListHandler(bookToAdd) {
    setMyRequests(() => {
      // myRequests.push(bookToAdd);
      // console.log("NEW REQUEST LIST", myRequests);
      return [...myRequests, bookToAdd];
    });
  }

  function removeFromRequestsHandler(remove) {
    setMyRequests(() => {
      return myRequests.filter((currentBook) => {
        return currentBook.id != remove.id;
      });
    });
  }

  return (
    <main>
      {/* <h1>Library Catalog</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Account</li>
        </ul>
      </nav> */}

      <section id="books-and-requests">
        <AllBooks
          bookList={myBooks}
          addToRequestListHandler={addToRequestListHandler}
        ></AllBooks>
        <Preview book={database.catalog[0]}></Preview>
        <AllRequests requestList={myRequests}
          removeList={removeFromRequestsHandler}></AllRequests>
      </section>
    </main>
  );
}
