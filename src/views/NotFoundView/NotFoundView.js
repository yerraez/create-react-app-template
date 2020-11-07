import React from 'react'
import PropTypes from 'prop-types'

const NotFoundView = ({message}) => {
    return (
        <div>
            message
        </div>
    )
}

NotFoundView.propTypes = {
    message: PropTypes.string.isRequired

}

NotFoundView.defaultProps = {
    message: 'Page not found'
};

export default NotFoundView
