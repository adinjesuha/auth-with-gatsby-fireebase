import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"

import { editPost } from '../../store/actions/post'
import PageTitle from '../title'

const EditPost = ({post, postId, editPost}) => {
  const [editedPost, setEditedPost] = useState({title: null, subtitle: null, id: null})
  useEffect(() => {
    setEditedPost({
      title: post.title,
      subtitle: post.subtitle,
      id: postId
    })
  },[post, postId])
  const handleChange = e => {
    setEditedPost({
      ...editedPost,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    editPost(editedPost)
    navigate("/app/dashboard", { replace: true })
  }
  if(!post) return  <p>Loading...</p>
  return (
    <React.Fragment>
    <PageTitle title="Edit a Post" breadcrumb="Edit you own content"/>
      <AvForm className="form-horizontal m-t-30" onSubmit={handleSubmit}>
        <AvField 
          type="text"
          name="title"
          label="Title" 
          defaultValue={post.title}
          onChange={handleChange}
          maxLength="20"
          required
        />
        <AvField 
          type="text" 
          name="subtitle"
          label="Sub title" 
          defaultValue={post.subtitle}
          onChange={handleChange}
          maxLength="35"
          required
        />
        <Button 
          className="btn-primary waves-effect waves-light" 
          type="submit"
        >
          Update
        </Button>
      </AvForm>
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id
  const { posts } = state.firestore.data
  const post = posts ? posts[id] : null
  return {
    post,
    postId: ownProps.id
  }
}

const mapToDispatchPorps = dispatch => {
  return{
    editPost: post => dispatch(editPost(post))
  }
}

export default compose(
  connect(
    mapStateToProps, 
    mapToDispatchPorps
  ),
  firestoreConnect([{ collection: "projects" }])
)(EditPost)