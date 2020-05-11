import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../slices/postsSlice';
import Post from '../components/post';

function PostsPage() {
  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts())
  },[dispatch]);


  return (
      <div>Posts page</div>
  );
}


export default PostsPage;
