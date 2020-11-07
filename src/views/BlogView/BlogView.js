import React from 'react'
import PropTypes from 'prop-types'

const BlogView = ({posts}) => {
    return (
        <div>
            Blog View
            {
                posts.map((post, index) => (
                    <div key={post.pk}>
                        {post.title + post.value}
                    </div>
                ))
            }
        </div>
    )
}

BlogView.propTypes = {
    post: PropTypes.array

}

BlogView.defaultProps = {
    posts: [
        {
            pk: 11,
            title: 'Hi',
            value: 20
        },
        {
            pk: 15,
            title: 'By',
            value: 40
        }
    ]
};


export default BlogView
