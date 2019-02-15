import React from 'react'
import * as TopLine from './styled'
import BtnBase from '../BtnBase'
import Button from '../Button'

const index = () => {
    return (
        <div>
            <BtnBase type="link"></BtnBase>
            <TopLine.Item></TopLine.Item>
            <Button type="text" label="Hellow world" />
        </div>
    )
}

export default index
