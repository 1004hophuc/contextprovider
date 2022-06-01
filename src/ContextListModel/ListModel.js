import React, { Component } from 'react'
import ModelItem from './ModelItem'
import { ContextListModel } from './_Context/ContextListModel'

export default class ListModel extends Component {
    render() {
        return (
            <div>
                <h3>Danh sách idol</h3>
                <div className="row">
                    <ContextListModel.Consumer>
                        {(value) => {
                            return value.modelListState.map((item, index) => {
                                return <div className="col-3" key={index}>
                                    <ModelItem item={item} />
                                </div>
                            })
                        }}

                    </ContextListModel.Consumer>
                </div>
            </div>

        )
    }
}
