import React, {Component} from 'react';

class TodoSearch extends Component {
    constructor(props) {
        super(props);
    }
    handleSearch = () => {
        
        var showCompleted = this.showCompleted.checked;
        var searchText = this.searchText.value;
        
        this.props.onSearch(showCompleted,searchText);
    }
    render() {
        return(
            <div>
                <div>
                    <input type="search" ref={ref => {this.searchText = ref}} placeholder="Search Todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref={ref => {this.showCompleted = ref}} onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>

            </div>
        );
    }
}

module.exports = TodoSearch;
