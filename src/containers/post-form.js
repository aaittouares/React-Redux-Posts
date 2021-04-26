import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {createPost} from '../actions/index';

const formConfig = {
    form: 'creatPostForm',
    fields: ['title', 'content', 'author'],
    validate: validate,
    initialValues: {author: 'Moi'}
}

class PostForm extends Component {
    render() {
        const {fields: {title, content, author}, handleSubmit, errors, invalid} = this. props;
        return (
            <div>
                <h1>Nouveau Post</h1>
                <form onSubmit={handleSubmit(this.createPost.bind(this))}>
                    <div className={`form-group ${title.touched && title.invalid? 'has-danger': ''}`}>
                        <label>Titre</label>
                        <input className='form-control' type='text' {...title}/>
                        <div>{title.touched && errors.title}</div>                      
                        
                    </div>
                    <div className={`form-group ${content.touched && content.invalid? 'has-danger': ''}`}>
                        <label>Description</label>
                        <input className='form-control' type='text-area' {...content}/>
                        <div>{content.touched && errors.content}</div>     
                    </div>
                    <div className={`form-group ${author.touched && author.invalid? 'has-danger': ''}`}>
                        <label>Auteur</label>
                        <input className='form-control' type='text' {...author}/>
                        <div>{author.touched && errors.author}</div> 
                    </div>
                    <Link to={'/'} className='button_space'><button className='btn btn-danger'>Retour</button></Link>
                    <button type='submit' className='btn btn-primary' disabled={invalid}>Créer</button>
                </form>
                
            </div>
        );
    }

    createPost(post){
        this.props.createPost(post);
        browserHistory.push('/');
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = 'veuillez remplir le titre';
    }

    if(!values.content){
        errors.content = 'veuillez remplir la description';
    }

    if(!values.author){
        errors.author = 'veuillez remplir le champ auteur';
    }

    return errors;
}

const mapDispatchToProps =  {
    createPost
}

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PostForm));