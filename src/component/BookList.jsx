import { Component } from "react";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
// Importing SingleBook and pass
import SingleBook from "./SingleBook";
// Book Data
import Horror from "../data/horror.json";

class BookList extends Component {
  state = {
    title: "",
    queryBooks: Horror,
  };

  filterBooks = (query) => {
    let queryBooks = Horror.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ queryBooks });
  };

  render() {
    return (
      <Container className="mb-5 fluid">
        <div className="d-flex justify-content-center mb-3">
          <FormControl
            className="input"
            placeholder="Search your favorite horror book..."
            value={this.state.title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
              this.filterBooks(e.target.value);
            }}
          />
        </div>
        <div className="d-flex" style={{width:"100%"}}>
          {this.state.queryBooks.map((book) => (
            <SingleBook book={book} key={book.asin} />
          ))}
        </div>
      </Container>
    );
  }
}

export default BookList;
