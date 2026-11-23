
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        like: 0,
        dislikes: 0,
        handleLike:() => {
            this.setState((prevState) => (
                {likes: prevState.likes + 1
                }));
        },

        handleDislike:() => {
            this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1
                }));
        }
    
    }
}

  render() {
    return (
     <>
     <div className = 'content-rating'>
        <p>
            //Add text here
        </p>
        <div className='rating-buttons'>
            <button className="like-button">
                Like ({this.state.likes} onClick={this.state.handleLike})
            </button>
            <button calssName="dislike-button">
                Dislike ({this.state.dislikes} onClick={this.state.handleDislike})
            </button>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
