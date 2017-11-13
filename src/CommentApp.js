import React ,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[]
        }
    }
    handleSubmitComment(comment){
        //保持代码的健壮性，提醒用户输入用户名和评论
        if(!comment) return;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content) return alert('请输入评论内容');
        this.state.comments.push(comment);
        this.setState({
            commemnts:this.state.comments
        })
    }
    render(){
        return(
            <div className="wrapper">
                <CommentInput
                onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList
                comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp