import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import DeleteComments from './DeleteComments'

class AddComments extends React.Component {
  state = {
    addComment: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  };

  postComment = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({...this.state.addComment, elementId:this.props.asin}),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjJhYTRiYjUzZDAwMTViMTllZGUiLCJpYXQiOjE2MzI5OTgxNzMsImV4cCI6MTYzNDIwNzc3M30.W2FmJgztmFyCsYsNpP-CJ5-vBcKzZG3RTeo4CLvwNR8",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
          alert(`Your comment was successfully posted`)
        this.props.fetchComments()
        this.setState({
          ...this.state.addComment,
          addComment: {
            comment: "",
            rate: "",
            elementId: "",
          },
        });
      } else {
        alert("Yikes!!! an error occurred while trying to add the review");
      }
    } catch (e) {
      console.log(`yikes we got an error`, e);
    }
  };

  render() {
      console.log("in addComment", this.props.asin)
    return (
      <>
        <Form onSubmit={this.postComment} style={{ minWidth: "100%" }}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="text-light">Rate book</Form.Label>
            <Form.Control
              as="select"
              value={this.state.addComment.rate}
              onChange={(e) =>
                this.setState({
                  addComment: {
                    ...this.state.addComment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-light">Write a review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.addComment.comment}
              onChange={(e) =>
                this.setState({
                  addComment: {
                    ...this.state.addComment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComments;
