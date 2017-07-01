import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';

class AddForm extends Component {
    constructor(props){
        super(props);
    }
    onSubmit = (e) => {
        e.preventDefault();
        var {dispatch} = this.props;
        var todo = this.input.value;
        if(todo.length > 0) {
            this.input.value = '';  
            dispatch(actions.startAddTodo(todo));
        } else {
            this.input.focus();
        }
    }
    render() {
        return(
            <div className="container__footer">
                <form ref={ref => {this.form = ref}} onSubmit={this.onSubmit} className="countdown-form">
                    <input ref={ref => {this.input = ref}} type="text" placeholder="Enter a Todo"/>
                    <button className="button expanded">Submit</button>
                </form>
            </div>
            
        )
    }
}

module.exports = connect()(AddForm);