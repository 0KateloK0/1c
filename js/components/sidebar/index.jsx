import React from 'react';
import './index.css';

function Position(props) {
    return (
        <div className="user__position">
            <span className="user__position-time">
                Время: {props.time}
            </span>
            <br></br>
            <span className="user__position-coords">
                Координаты: {props.coords[0]} {props.coords[1]}
            </span>
        </div>
    );
}

function User(props) {
    return (
        <div className="user" style={{backgroundColor: props.selected ? 'grey' : 'white'}}>
            <span className="user__name" style={{backgroundColor: props.user.color}}>
                {props.user.name}
            </span>
            <button className="user__add-position" onClick={props.handleNewPosition}>
                Новая геоточка
            </button>
            <button className="user__select" onClick={props.handleSelect}>
                Выделить
            </button>
            <div className="user__positions">
                {
                    props.user.positions.map((a, i) => 
                        <Position time={a.time} coords={a.coords} key={i}></Position>
                        )
                }

            </div>
        </div>
    )
}

export default class Sidebar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            
        };
    }

    handleNewPosition (i, event) {
        let x = prompt('Введите координату по горизонтали новой позиции в диапазоне от 0 до 500');
        while (!(x >= 0 && x <= 500)) {
            x = prompt('Введенное значение было неверным. Введите координату по горизонтали новой позиции в диапазоне от 0 до 500');
        }
        let y = prompt('Введите координату по вертикали новой позиции в диапазоне от 0 до 500');
        while (!(x >= 0 && x <= 500)) {
            y = prompt('Введенное значение было неверным. Введите координату по вертикали новой позиции в диапазоне от 0 до 500');
        }
        let time = prompt('Введите дату в любом формате потому что я не успевал это проверить')


        this.props.handleNewPosition(i, x, y, time);
    }

    handleNewUser (event) {
        let name = prompt('Введите имя нового пользователя');
        this.props.handleNewUser(name);
    }

    render () {
        return (
            <div className="sidebar-wrapper">
                {
                    this.props.users.map((a, i) =>
                        <User user={a} 
                            key={i} 
                            handleNewPosition={this.handleNewPosition.bind(this, i)} 
                            selected={i == this.props.selected}
                            handleSelect={this.props.handleSelect.bind(this, i)}></User>)
                }
                <button className="sidebar__new-user" onClick={this.handleNewUser.bind(this)}>Новый пользователь</button>
            </div>
        )
    }
}
