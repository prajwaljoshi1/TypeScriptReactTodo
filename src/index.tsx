import React from 'react';
import ReactDOM from 'react-dom';
import { createCipher } from 'crypto';
import { isElementOfType } from 'react-dom/test-utils';

interface AppProps {
  color?: string
}
interface AppState {
  counter: number
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0}
  }

  onIncrement = (): void => {
    this.setState({ counter : this.state.counter +1 });
  }

  onDecrement = (): void => {
    this.setState({ counter : this.state.counter - 1 });
  }
  render() {
    return <div className="text">
              {this.props.color}
              <button onClick={this.onIncrement}>Increment</button>
              <button onClick={this.onDecrement}>Decrement</button>
              {this.state.counter}
            </div>
  }
}


ReactDOM.render( <App color="red"/>, document.querySelector("#root"));

