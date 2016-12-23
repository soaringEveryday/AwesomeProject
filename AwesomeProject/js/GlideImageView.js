import {requireNativeComponent,View} from 'react-native'
import {PropTypes} from 'react'

var iface = {
    name: 'GlideImageView',
    propTypes: {
        url: PropTypes.string.isRequired,
        ...View.propTypes
    }
}

module.exports = requireNativeComponent("GlideImageView", iface)

