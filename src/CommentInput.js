import React, {Component} from 'react'

class CommentInput extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
    }
    handleUsernameChange(event){    //设置该方法为了能在输入框中输入
        this.setState({
            username:event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const{username,content} = this.state;
            this.props.onSubmit({username,content})
        }
        this.setState({content:''})     //清空用户输入的评论内容
    }
    render() {
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span class="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div class="comment-field-button">
                    <button
                    onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput