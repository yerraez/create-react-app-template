import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPostsAction, cleanNotificationAction } from 'src/redux/slices/posts'
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import {
    FormLabel,
    FormControlLabel,
    Typography,
    Box,
    Paper,
    Grid
} from '@material-ui/core';
import Post from './components/Post'




const useStyles = makeStyles((theme) => ({
    title: {
        color: '#56FF00'
    },
    paper: {
        margin: 10,
        width: '100%',
    },
    control: {
        padding: theme.spacing(2),
    },

}));

const BlogView = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const { posts, notistackContent } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPostsAction());
        const interval = setInterval(() => {
            console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // It is run after each new render
    useEffect(() => {
        if (notistackContent !== null && notistackContent !== undefined) {
            enqueueSnackbar(notistackContent.message, {
                variant: notistackContent.variant,
                autoHideDuration: 2000,
            });
            dispatch(cleanNotificationAction());
        }
    })

    return (
        <Box p={1} m={1} >
            <Box textAlign="center" fontFamily="Monospace" m={1}>
                <Typography className={classes.title} variant="h1" alignCenter gutterBottom>
                    Posts View
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {
                    posts !== null && posts !== undefined && posts.map((post, index) => (
                        <Grid key={post.id} item xs={12} sm={6} md={4} >
                            <Post title={post.title} body={post.body} id={post.id} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}


export default BlogView
