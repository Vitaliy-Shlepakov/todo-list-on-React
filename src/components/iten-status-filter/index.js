import React, {Component} from 'react';
import './item-status-filter.css';

class ItemStatusFilter extends Component{
    render(){
        return(
            <div className="btn-group">
                <button type="button" className="btn btn-info border">All</button>
                <button type="button" className="btn btn-outline-second border">Active</button>
                <button type="button" className="btn btn-second border">Done</button>
            </div>
        )
    }
}


export default ItemStatusFilter;
