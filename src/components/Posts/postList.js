import React from 'react'
import { Row, Col} from 'reactstrap'

import PostCard from './postCard'

const PostList = ({posts}) => {
  return (
    <Row>
      {posts ? 
        posts.map(post => (
          <Col sm="12" lg="4" className="mb-4" key={post.id}>
            <PostCard postData={post}/>
          </Col>
        ))
        : <p>Loading...</p>
      }
    </Row>
  )
}

export default PostList