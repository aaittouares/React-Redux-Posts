import React, { Component } from 'react';
import PostContent from '../components/post-content';
import {connect} from 'react-redux';
import {readPost} from '../actions/index';


class Post extends Component {

    
    componentWillMount() {
        //read params.id
        this.props.readPost(this.props.params.id);  
    }

    renderPostContent(){
        const {post} = this.props;
        if (post){
            return <PostContent post={post}/>
        }
    }
    

    render() {
        return (
            <div>
                 {this.renderPostContent()}               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.activePost
    }
}

const mapDispatchToProps = {
    readPost
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);