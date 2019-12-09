import React from 'react'
import { Row, Col} from 'reactstrap';

import Card from './card'

const fakeData = [
  {
    index: 0,
    title: "Best places to visit",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore distinctio.',
    image: 'places.jpg',
    updated: 'Last updated 3 mins ago'
  },
  {
    index: 1,
    title: "Best places to visit",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore distinctio.',
    image: 'places-2.jpg',
    updated: 'Last updated 3 mins ago'
  },
  {
    index: 2,
    title: "Best places to visit",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore distinctio.',
    image: 'places-3.jpg',
    updated: 'Last updated 3 mins ago'
  },
  {
    index: 3,
    title: "Best places to visit",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore distinctio.',
    image: 'places-4.jpg',
    updated: 'Last updated 3 mins ago'
  },
]

const CardListing = () => {
  return (
    <Row>
      {fakeData.map(data => (
        <Col sm="12" lg="4" className="mb-4">
          <Card cardData={data} key={data.index}/>
        </Col>
        )
      )}
    </Row>
  )
}

export default CardListing