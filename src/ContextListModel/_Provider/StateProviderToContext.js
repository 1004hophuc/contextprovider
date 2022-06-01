import React, { Component } from 'react'
import { ContextListModel } from '../_Context/ContextListModel'



export default class StateProviderToContext extends Component {

    state = {
        modelListState: [
            { "id": 1, "name": "Tào Tháo", "age": 65, "img": "./img/model1.png", "like": 0, "active": false },
            { "id": 2, "name": "Gia Cát Lượng", "age": 54, "img": "./img/model2.png", "like": 0, "active": false },
            { "id": 3, "name": "Joker", "age": 35, "img": "./img/model3.png", "like": 0, "active": false },
            { "id": 4, "name": "Trâm Anh", "age": 18, "img": "./img/model4.png", "like": 0, "active": true }
        ]
    }

    setActiveModel = (id) => {

        let modelListStateUpdate = this.state.modelListState.map((model, index) => {
            // So sánh với id được click
            if (model.id === id) {
                model.like += 1;
                model.active = true;
            } else {
                model.active = false;
            }
            // Cuối cùng trả về object model mới, hàm map() nó sẽ trả về 1 mảng mới, cứ mỗi lần kiểm tra nó sẽ tạo ra 1 object mới với like mới và active mới, sau đó nó push vào mảng. Sau đó mình gán lại mảng đó cho setState
            return { ...model }
        })
        // Sau khi xử lý mảng cập nhật lại giá trị state để giao diện render lại
        this.setState({
            modelListState: modelListStateUpdate
        })
    }


    render() {
        return (
            <ContextListModel.Provider value={{ modelListState: this.state.modelListState, setActiveModel: this.setActiveModel }}>
                {this.props.children}
            </ContextListModel.Provider>

        )
    }
}
