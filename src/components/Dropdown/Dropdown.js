import React, { Component, component } from 'react';

import './Dropdown.css';

class Dropdown extends Component {
    state = {
        visible: false,
    }


render() {
    return (
        <div className="Dropdown">
            <button type="button" className="Dropdown__toggle">
                Показать
            </button>
        </div>
    );

}
}

export default Dropdown;