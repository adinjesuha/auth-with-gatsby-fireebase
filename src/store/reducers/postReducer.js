import { 
  CREATE_POST_SUCCESS, 
  CREATE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from '../actions/actionTypes'

const initState = {
  posts: [
    { 
      id: 1, 
      title: "Best places to visit", 
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: 'places.jpg',
      authorId: 'Adin Jesuha',
      createdAt: 'Last updated 3 mins ago'
    },
    { 
      id: 2, 
      title: "Best places to visit", 
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: 'places-2.jpg',
      authorId: 'Adin Jesuha',
      createdAt: 'Last updated 3 mins ago'
    },
    { 
      id: 3, 
      title: "Best places to visit", 
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: 'places-3.jpg',
      authorId: 'Adin Jesuha',
      createdAt: 'Last updated 3 mins ago'
    },
    { 
      id: 4, 
      title: "Best places to visit", 
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: 'places-4.jpg',
      authorId: 'Adin Jesuha',
      createdAt: 'Last updated 3 mins ago'
    },
  ],
}

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      console.log("created post", action.post)
      return state
    case CREATE_POST_ERROR:
      console.log("create post error", action.err)
      return state
    case DELETE_POST_SUCCESS:
      console.log("delete post success")
      return state
    case DELETE_POST_ERROR:
      console.log("delete post error", action.err)
    default:
      return state
  }
}

export default postReducer