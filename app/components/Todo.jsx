import React, {Component} from 'react';
import moment from 'moment';

class Todo extends Component {
    
    render() {
        
        var {id,text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={() => {this.props.onToggle(id)}} >
                <label>
                <input type="checkbox" defaultChecked={completed}/>
                 <p>{text}</p>
                  <p>{renderDate()}</p>
                 </label>
            </div>
        )
    }
}

module.exports = Todo;