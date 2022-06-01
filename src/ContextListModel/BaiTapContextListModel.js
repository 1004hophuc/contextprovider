import React, { Component } from 'react'
import ListModel from './ListModel'
import ProfileModel from './ProfileModel'
import StateProviderToContext from './_Provider/StateProviderToContext'

export default class BaiTapContextListModel extends Component {
    render() {
        return (
            <StateProviderToContext>
                <div className="container">
                    <ProfileModel />
                    <ListModel />
                </div>
            </StateProviderToContext>
        )
    }
}
