import React, {Component} from 'react';

import './item-add-form.css';

class ItemAddForm extends Component{
    render() {
        const {addItem} = this.props;
        return(
            <div className="item-add-form">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => addItem('Hellow')}>
                    Add Item</button>
            </div>
        )
    }
}
export default ItemAddForm;
