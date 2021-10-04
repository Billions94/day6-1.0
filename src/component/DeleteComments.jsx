import React from 'react'
import Button from 'react-bootstrap/Button'


class DeleteComments extends React.Component {

    state ={
        comments:[],

    }


    fetchComments = async(id) => {
        try {
            console.log(`yummy`,this.state.comments)

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/` + id ,{
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjJhYTRiYjUzZDAwMTViMTllZGUiLCJpYXQiOjE2MzI5OTgxNzMsImV4cCI6MTYzNDIwNzc3M30.W2FmJgztmFyCsYsNpP-CJ5-vBcKzZG3RTeo4CLvwNR8"
                }
                })
                if (response.ok){
                    const data = await response.json()
                    console.log(`Here is your data` + data)
                    this.setState({
                        comments: data
                    })
                    console.log(`prepared data`,this.state.comments)

    
                } else {
                    console.log(`An error occurred while trying to fetch data`)
                }

                
        } catch (e) {
            console.error(e)
        }
    }


    componentDidMount = async() => {
        this.fetchComments(this.props.id)
        console.log(`here are your props`, this.props.id)

    }

    deleteBookComment = async() => {

        try{
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, {
                method: 'DELETE',
                // body: JSON.stringify(this.state.comment),
                headers: {
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjJhYTRiYjUzZDAwMTViMTllZGUiLCJpYXQiOjE2MzI5OTgxNzMsImV4cCI6MTYzNDIwNzc3M30.W2FmJgztmFyCsYsNpP-CJ5-vBcKzZG3RTeo4CLvwNR8",
             "Content-Type": "application/json"
            }
            })
            if(response.ok){
                alert('Your review was successfully deleted')
                this.setState({
                        comments: {
                        comment: '',
                        rate: '',
                        elementId: ''
                    }
                })


                
               
            }else{
                alert('Ooops!!! an error occurred')
            }

        } catch(e){
            console.log(`yikes we got an error`, e)
        }
    }

    render() {
        return (
            <Button key={this.props.asin} className="ml-2" variant="danger" type="button" 
            onClick={this.deleteBookComment}
            >
             <img src="../assets/delete.png" width="20px" alt="" />
            </Button>
        )
    }
}

export default DeleteComments