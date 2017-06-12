import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';

class TodoSearch extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var {dispatch,showCompleted, searchText} = this.props;
        console.log(showCompleted);
        return(
            <div className="container__header">
                <div>
                    <input type="search" ref={ref => {this.searchText = ref}} placeholder="Search Todos" value={searchText} 
                    onChange={() => {
                        var searchText = this.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref={ref => {this.showCompleted = ref}} checked={showCompleted} 
                        onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show completed todos
                    </label>
                </div>

            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
           showCompleted: state.showCompleted,
           searchText: state.searchText 
        }
    }
)(TodoSearch);
