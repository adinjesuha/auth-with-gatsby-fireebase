import { 
  CREATE_POST_SUCCESS, 
  CREATE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR
} from './actionTypes'

export const createPost = post => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore
      .collection("posts")
      .add({
        ...post,
        username: profile.username,
        authorId: authorId,
        createdAt: new Date(),
        image: `places-${Math.floor(Math.random() * 6) + 1}.jpg`
      })
      .then(() => {
        dispatch({
          type: CREATE_POST_SUCCESS,
          post,
        })
      })
      .catch(err => {
        dispatch({
          type: CREATE_POST_ERROR,
          err,
        })
      })
  }
}

export const editPost = (post) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()
    firestore
      .collection("posts")
      .doc(post.id)
      .update({ 
        title: post.title,
        subtitle: post.subtitle
      })
      .then(() => {
        dispatch({
          type: UPDATE_POST_SUCCESS,
        })
      })
      .catch(err => {
        dispatch({
          type: UPDATE_POST_ERROR,
          err
        })
      })
  }
}

export const deletePost = postId => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()
    firestore
      .collection("posts")
      .doc(postId)
      .delete()
      .then(() => {
        dispatch({
          type: DELETE_POST_SUCCESS
        })
      })
      .catch(err => {
        dispatch({
          type: DELETE_POST_ERROR,
          err
        })
      })
    }
}