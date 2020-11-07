import axios from 'axios';
import { BASE_URL } from 'src/constants/index';

export const getPosts = () => new Promise((resolve, reject) => {
    axios.get(BASE_URL+'/posts')
      .then((response) => {
        if (response.status === 200) {
          //console.log('resolve', response.data)
          resolve(response.data);
        }
      })
      .catch((error) => {
        //console.log(error.response.data)
        reject(error);
      });
});

export const getPost = (postNumber) => new Promise((resolve, reject) => {
    axios.get(BASE_URL+`/posts/${postNumber}/`)
      .then((response) => {
        if (response.status === 200) {
          //console.log('resolve', response.data)
          resolve(response.data);
        }
      })
      .catch((error) => {
        //console.log(error.response.data)
        reject(error);
      });
});

export const publishPost = (title, body, userId) => new Promise((resolve, reject) => {
    axios.get(BASE_URL+'/posts', {
        title: title,
        body: body,
        userId: userId,
    })
      .then((response) => {
        if (response.status === 200) {
          //console.log('resolve', response.data)
          resolve(response.data);
        }
      })
      .catch((error) => {
        //console.log(error.response.data)
        reject(error);
      });
});