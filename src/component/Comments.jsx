// import { isThisISOWeek } from 'date-fns/esm'
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AddComments from "./AddComments";
// import ListGroupItem  from 'react-bootstrap/ListGroupItem'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import DeleteComments from "./DeleteComments";

// import Button from 'react-bootstrap/Button'

class Comments extends React.Component {
  state = {
    comments: [],
  };
   fetchComments = async () => {
        try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/` +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjJhYTRiYjUzZDAwMTViMTllZGUiLCJpYXQiOjE2MzI5OTgxNzMsImV4cCI6MTYzNDIwNzc3M30.W2FmJgztmFyCsYsNpP-CJ5-vBcKzZG3RTeo4CLvwNR8",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(`Here is your data` + data);
          this.setState({
            comments: data,
          });
          console.log(this.state.comments);
        } else {
          console.log(`An error occurred while trying to fetch data`);
        }
      } catch (e) {
        console.error(e);
      }
    
   }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
        this.fetchComments()
    }
  };

  render() {
      console.log('in comments', this.props.asin)
    return (
      <>
        <AddComments asin={this.props.asin} fetchComments={this.fetchComments}/>

        {this.state.comments.map((info) => (
          <>
            <div key={info._id}>
              <ListGroup.Item>{info.comment}</ListGroup.Item>
              <ListGroup.Item>{info.rate}</ListGroup.Item>
              <DeleteComments id={info._id} />
            </div>
          </>
        ))}
      </>
    );
  }
}

export default Comments;
