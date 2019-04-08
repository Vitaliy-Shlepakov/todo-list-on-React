import React, {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component{

    state ={
        input: ""
    }

    searchItem = (e) => {
        const term = e.target.value;
        this.setState({input: term})
        this.props.searchItem(term);
    }

    render(){
        // const {searchItem} = this.props;
        return(
            <input type="text"
                   placeholder="search"
                   className="search-input"
                   onChange={this.searchItem}
                    value={this.state.input}/>
        )
    }

};
export default SearchPanel;
