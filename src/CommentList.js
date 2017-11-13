import React ,{Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{
    //我们给 CommentList 加上 defaultProps 防止 comments 不传入的情况
    static defaultProps = {
        comments:[]
    }
    render(){
      /*  const comments = [
            {username:'Jerry',content:'Hello'},
            {username:'Tomy',content:'World'},
            {username:'Lucy',content:'Good'}
        ]*/
        return (
            <div>{this.props.comments.map((comment,i) => <Comment comment={comment} key={i} />
                )}</div>
        )
    }
}

export default CommentList
