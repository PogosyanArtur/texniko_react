import React from 'react'
import * as Button from './styled'
import BtnBase from '../BtnBase'
import MaterialIcon from 'material-icons-react';

const index = (props) => {
    const {
        label,
        type
    } = props

    return <BtnBase type={ type }>
        <MaterialIcon icon="menu" color="inherit" />
        <Button.Label>{ label }</Button.Label>
    </BtnBase>
}

export default index


index.defaultProps = {
    children: "label",
    type: "text"
}

