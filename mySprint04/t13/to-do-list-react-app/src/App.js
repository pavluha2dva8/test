import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="box">
        <h1>Batman's To-Do List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="add new item"
          />
          <button>+</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="to-do-list">
        <h3>Your To-DO list:</h3>
        {this.props.items.map(item => (
          <div className="input-list" key={item.id}>
            <input type="checkbox" id={item.id}></input>
            <span><label htmlFor={item.id}>{item.text}</label></span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
