import React from "react"
import '../../../src/app.css'

const TodoForm = props => {
  
    return (
      <div className="iandb">
        <input placeholder="enter task" value={props.value} onChange={props.update} />
        <button onClick={props.submit}>Add Item</button>
        <button onClick={props.clear}>Clear Completed</button>
      </div>
    );
  }

export default TodoForm