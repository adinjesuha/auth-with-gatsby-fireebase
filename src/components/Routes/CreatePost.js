import React, { useState } from "react"
import { navigate } from "gatsby"
import { Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from "react-redux"

import { createPost } from '../../store/actions/post'
import PageTitle from '../title'
import Layout from '../layout'

const CreatePost = ({createPost}) => {
  const [post, setPost] = useState({
    title: "",
    subtitle: "",
  })
  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    createPost(post)
    navigate("/app/dashboard", { replace: true })
  }
  return (
    <Layout>
      <PageTitle title="Create a Post" breadcrumb="Add new content"/>
      <AvForm className="form-horizontal m-t-30" onSubmit={handleSubmit}>
        <AvField 
          type="text" 
          name="title"
          label="Title" 
          placeholder="Enter title" 
          value={post.title} 
          onChange={handleChange}
          required
        />
        <AvField 
          type="text" 
          name="subtitle"
          label="Sub title" 
          placeholder="Enter Sub title" 
          value={post.content} 
          onChange={handleChange}
          required
        />
        <Button 
          className="btn-primary waves-effect waves-light" 
          type="submit"
        >
          Create
        </Button>
      </AvForm>
    </Layout>
  )
}

const mapToDispatchProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  }
}

export default connect(
  null, 
  mapToDispatchProps
)(CreatePost)