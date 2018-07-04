
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


        </div>
      );
    }
  };
/*   React.render(
    <CommentBox data={commentData} />,
    document.getElementById('app')
  ); */

  export default CommentBox;
  