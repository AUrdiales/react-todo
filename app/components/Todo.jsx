import React, {Component} from 'react';
import moment from 'moment';
import actions from 'actions'
import {connect} from 'react-redux';

class Todo extends Component {
    
    render() {
        
        var {id,text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassname = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            
          
            if(completed) {
            var message = 'completed: ';
            var timestamp = completedAt;
             return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
            } else if(!completed) {
            var message = 'created: ';
            var timestamp = createdAt;
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm: a');
            }
        }
        return (
            <div className={todoClassname} onClick={() => {dispatch(actions.toggleTodo(id))}} >
                <div>    
                <input type="checkbox" defaultChecked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}

module.exports = connect()(Todo);