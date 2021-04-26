import axios from 'axios';
import { AT_POSTS } from './action-types';
const END_POINT ='http://localhost:3000';

export function readAllPost(){
    return function (dispatch){
        axios.get(`${END_POINT}/posts`)
        .then(axiosResponse => {
            dispatch({
                type: AT_POSTS.READ_ALL,
                payload: axiosResponse.data
            })
        })
    };
}

export function readPost(id){
    return function (dispatch){
        axios.get(`${END_POINT}/posts/${id}`)
        .then(axiosResponse => {
            dispatch({
                type: AT_POSTS.READ,
                payload: axiosResponse.data
            })
        })
    };
}

export function deletePost(id){
    return function (dispatch){
        axios.delete(`${END_POINT}/posts/${id}`)
        .then(axiosResponse => {
            dispatch({
                type: AT_POSTS.DELETE,
                payload: id
            })
        })
    };
}

export function createPost(post){
    return function (dispatch){
        axios.post(`${END_POINT}/posts/`,
        {
            title: post.title,
            content: post.content,
            author: post.author
        }
        )
        .then(axiosResponse => {
            dispatch({
                type: AT_POSTS.CREATE,
                payload: axiosResponse.data
            })
        })
    };
}