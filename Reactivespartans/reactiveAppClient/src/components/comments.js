import React, { Component } from 'react';
import axios from 'axios';

  class CommentBox extends Component {
        
    handleCommentSubmit(comment) {
      this.props.data.push(comment);
      var comments = this.state.data;
      var newComments = comments.concat([comment]);
    }

    render() {
      return (
        <div className="comment-box">
           <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit.bind(this)} />
          <CommentList data={this.props.data} />
        </div>
      );
    }
  };


  class CommentList extends Component {
  
    render() {
      return (
        <div className="comment-list">
          {this.props.data.map(function(c){
            return (
              <Comment author={c.author} text={c.text} />
            );
          })}
        </div>
      );
    }
  };

  
  class CommentForm extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        commentData : this.props.commentData
      }
    }
  
    handleSubmit(e) {
      e.preventDefault();
      var authorVal = e.target[0].value.trim();
      var textVal = e.target[1].value.trim();
      
      if (!textVal || !authorVal) {
        return;
      }

      axios.post('http://localhost:9300/feedbackFromCandidate', {'emailId' : 'sevak.singh@gmail.com', 'msg': `${textVal}`})     
      .then(res => {
        const profileData = res.data[0];
      }) 
      //this.props.onCommentSubmit({author: authorVal, text: textVal});
      e.target[0].value = '';
      e.target[1].value = '';
      return;
    }

    render() {
      return(
        <form className="comment-form form-group" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <span className="input-group-addon">Name</span>
            <input type="text" placeholder="Your name" className="form-control" />
          </div>          
          <div className="form-group">
            <span className="input-group-addon">Comment</span>
            <input type="text" placeholder="Say something..." className="form-control" />
          </div>
          <input type="submit" value="Post" className="btn btn-primary" />
        </form>
      );
    }
  };

  class Comment extends Component {
  
    render() {
      return (
        <div className="comment">
          <h2 className="author">{this.props.author}</h2>
          {this.props.text}
        </div>
      );
    }
  };
/*   React.render(
    <CommentBox data={commentData} />,
    document.getElementById('app')
  ); */

  export default CommentBox;
  