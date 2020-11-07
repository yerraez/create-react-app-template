import React from 'react'
import PropTypes from 'prop-types'

const HomeView = ({content}) => {
    return (
        <div>
            Home View, {content}
        </div>
    )
}

HomeView.propTypes = {
    content: PropTypes.string.isRequired

}

HomeView.defaultProps = {
    content: 'Hello'
};

export default HomeView
