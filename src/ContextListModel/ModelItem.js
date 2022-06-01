import React, { Component } from 'react'
import { ContextListModel } from './_Context/ContextListModel'

export default class ModelItem extends Component {

    render() {


        const { item } = this.props

        return (
            <ContextListModel.Consumer>
                {(value) => {
                    return <div>
                        <div className="card text-white bg-default text-dark">
                            <img className="card-img-top" src={item.img} alt="img" />
                            <div className="card-body">
                                <h4 className="card-title">Họ Tên: {item.name}</h4>
                                <p className="card-text">Tuổi: {item.age}</p>
                                <button onClick={() => {
                                    value.setActiveModel(item.id)
                                }} style={{ background: 'none', border: '1px solid red', borderRadius: '5px' }} className="card-text"> <i style={{ color: 'red' }} className="fa fa-heart"></i></button>

                            </div>
                        </div>
                    </div>
                }}

            </ContextListModel.Consumer>
        )
    }
}
