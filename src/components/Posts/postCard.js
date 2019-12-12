import React, {useState} from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Card, CardBody, CardFooter, Button } from 'reactstrap';
import { MdModeEdit, MdDelete, MdFavorite } from 'react-icons/md'
import moment from "moment"
import { connect } from 'react-redux'

import { deletePost } from '../../store/actions/post'
import Image from '../image'

const Wrapper = styled(Card)`
  .image-card{
    width: 100%;
    height: 200px;
    overflow: hidden;  
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
  }
  .card-body{
    .card-text{
      color: #9ea0a5;
    }
  }
  .card-footer{
    background-color: transparent;
    padding: 0;
    .actions-group{
      display: flex;
      a{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button, a{
        font-size: 14px;
        width: 100%;
        border-radius: 0;
        flex-grow: 1;
        line-height: 2.2;
        color: #525f80;
        &:first-child{
          border-bottom-left-radius: .25rem;
          border-right: 1px solid rgba(0,0,0,.125);
        }
        &:last-child{
          border-bottom-right-radius: .25rem;
          border-left: 1px solid rgba(0,0,0,.125);
        }
        svg{
          color: inherit;
          margin-bottom: 4px;
        }
      }
    }
  }
`

const CardEl = ({postData, deletePost}) => {
  const [ isFavorite, setFavorite ] = useState(false);
  const {title, subtitle, image, createdAt, username, id} = postData
  return (
    <Wrapper>
      <div className="image-card">
        <Image imgName={image}/>
      </div>
      <CardBody>
        <h4 className="card-title font-16 mt-0">{title}</h4>
        <p className="card-text">{subtitle}</p>
        <p className="card-text">Author: {username}</p>
        <p className="card-text">
          <small className="text-muted">{moment(createdAt.toDate().toString()).calendar()}</small>
        </p>
      </CardBody>
      <CardFooter>
        <div className="actions-group">
          <Link to={`/app/dashboard/edit-post/${id}`}>
            <span>
              <MdModeEdit /> 
              Edit
            </span>
          </Link>
          <Button color="transparent" onClick={() => setFavorite(!isFavorite)}>
            <span>
              <MdFavorite style={{color: isFavorite ? 'red' : 'inherit'}}/> 
              Like
            </span>
          </Button>
          <Button color="transparent" onClick={() => deletePost(id)}>
            <span>
              <MdDelete /> 
              Delete
            </span>
          </Button>
        </div>
      </CardFooter>
    </Wrapper>
  )
}

const mapToDispatchProps = dispatch => {
  return {
    deletePost: postId => dispatch(deletePost(postId))
  }
}

export default connect(
  null, 
  mapToDispatchProps
)(CardEl)