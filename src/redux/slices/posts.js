import { createSlice } from '@reduxjs/toolkit';
import { getPosts, getPost, publishPost } from 'src/services/postsServices';


const initialState = {
  posts: [],
  post: null,
  notistackContent: null,
};

const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPosts(state, action) {
      const data = action.payload;
      state.posts = data;
    },
    getPost(state, action) {
      const data = action.payload;
      state.post = data;
    },
    publishPost(state, action) {
      const data = action.payload;
      //state.posts = data;
    },        
    cleanNotification(state, action) {
      state.notistackContent = null;
    },
    setNotification(state, action) {
      const { message, variant } = action.payload;
      state.notistackContent = {
        message: message,
        variant: variant
      };
    },


  }

})

export const reducer = slice.reducer;


export const getPostsAction = () => async (dispatch) => {
  try {
    const data = await getPosts();
    //console.log('getPostsAction', data);
    dispatch(slice.actions.getPosts(data));
    const payload = {
      message: 'Datos obtenidos correctamente',
      variant: 'success'
    }    
    dispatch(slice.actions.setNotification(payload));
  } catch (error) {
    console.log('error getPostsAction')
    const payload = {
      message: 'Algo salió mal',
      variant: 'error'
    }
    dispatch(slice.actions.setNotification(payload));
  }
};

export const getPostAction = (postNumber) => async (dispatch) => {
  try {
    const data = await getPost();
    //console.log('getTwilioCredentialsAction', data);
    dispatch(slice.actions.getPost(data));
    const payload = {
      message: 'Dato obtenido correctamente',
      variant: 'success'
    }    
    dispatch(slice.actions.setNotification(payload));
  } catch (error) {
    console.log('error getPostAction')
    const payload = {
      message: 'Algo salió mal',
      variant: 'error'
    }
    dispatch(slice.actions.setNotification(payload));
  }
};

export const publishPostAction = (title, body, userId) => async (dispatch) => {
  try {
    const data = await publishPost();
    //console.log('getTwilioCredentialsAction', data);
    dispatch(slice.actions.publishPost(data));
    const payload = {
      message: 'Datos publicados correctamente',
      variant: 'success'
    }    
    dispatch(slice.actions.setNotification(payload));
  } catch (error) {
    console.log('error publishPostAction')
    const payload = {
      message: 'Algo salió mal',
      variant: 'error'
    }
    dispatch(slice.actions.setNotification(payload));
  }
};


export const cleanNotificationAction = () => (dispatch) => {
  dispatch(slice.actions.cleanNotification());
};

export default slice;
