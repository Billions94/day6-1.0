import { Component } from "react";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Comments from './Comments'
// Importing SingleBook and pass
import SingleBook from "./SingleBook";
// Book Data
import Horror from "../data/horror.json";

class BookList extends Component {
  state = {
    title: "",
    queryBooks: Horror,
    selectedBook: null,
  };

  filterBooks = (query) => {
    let queryBooks = Horror.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ queryBooks });
  };

  render() {
    return (
      <Container className="mb-5 mt-5 fluid">
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
        <Row>
            <Col md={9}>
                <div className="d-flex" style={{width:"100%"}}>
                {this.state.queryBooks.map((book) => (
                    <Col key={book.asin} >
                    <SingleBook book={book}
                    selectedBook={this.state.selectedBook}
                    changeSelectedBook={asin => this.setState({
                        selectedBook: asin
                    })} />
                    </Col>
                ))}
                </div>
            </Col>
            <Col>
                <div className="mt-4 mb-5 ml-2"  style={{ minWidth: "7rem" }}>
                    <Comments asin={this.state.selectedBook} />
                </div>
            </Col>
         </Row>   
      </Container>
    );
  }
}

export default BookList;
