import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, CardFooter, Button } from 'reactstrap';
import { MdModeEdit, MdDelete, MdFavorite } from 'react-icons/md'

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
      button{
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

const CardEl = ({cardData}) => {
  const {title, content, image, updated} = cardData
  return (
    <Wrapper>
      <div className="image-card">
        <Image imgName={image}/>
      </div>
      <CardBody>
        <h4 className="card-title font-16 mt-0">{title}</h4>
        <p className="card-text">{content}</p>
        <p className="card-text">
          <small className="text-muted">{updated}</small>
        </p>
      </CardBody>
      <CardFooter>
        <div className="actions-group">
          <Button color="transparent">
            <MdModeEdit /> Edit
          </Button>
          <Button color="transparent">
            <MdFavorite /> Like
          </Button>
          <Button color="transparent">
            <MdDelete /> Delete
          </Button>
        </div>
      </CardFooter>
    </Wrapper>
  )
}


export default CardEl