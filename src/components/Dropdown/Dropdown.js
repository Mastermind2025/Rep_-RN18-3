import React, { Component } from 'react';

import './Dropdown.css';

class Dropdown extends Component {
    state = {
        visible: false,
    }

    // show = () => {
    //     this.setState({ visible: true });
    // };

    //  hide = () => {
    //     this.setState({ visible: false });
    // };
// Этот метод вместо двух методов выше
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };


render() {
    return (
        <div className="Dropdown">

            <button
                type="button"
                className="Dropdown__toggle"
                onClick={this.toggle}>
                { this.state.visible ? 'To Hide' : 'To Show' }
            </button>

             {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
                To Hide This
            </button> */}
{/* если visible  true, то рендерится меню*/}
            {this.state.visible && (
                <div className="Dropdown__menu">Выпадающее меню</div>
            )}


        </div>
    );

}
}

export default Dropdown;