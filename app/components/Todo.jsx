import React, {Component} from 'react';

class Todo extends Component {
    
    render() {
        
        var {id,text, completed} = this.props;
        return (
            <div onClick={() => {this.props.onToggle(id)}} >
                <label>
                <input type="checkbox" defaultChecked={completed}/>
                 {text}
                 </label>
            </div>
        )
    }
}

module.exports = Todo;