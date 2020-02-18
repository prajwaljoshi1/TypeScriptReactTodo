import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducers }  from './reducers';
import App from './components/App';


const store = createStore(reducers, applyMiddleware(thunk));

// interface AppProps {
//   color?: string
// }
// interface AppState {
//   counter: number
// }


// const App = (props :AppProps): JSX.Element => {
//   return (
//     <div>
//       {props.color}
//     </div>
//   )
// }

// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = { counter: 0}
//   }

//   onIncrement = (): void => {
//     this.setState({ counter : this.state.counter +1 });
//   }

//   onDecrement = (): void => {
//     this.setState({ counter : this.state.counter - 1 });
//   }
//   render() {
//     return <div className="text">
//               {this.props.color}
//               <button onClick={this.onIncrement}>Increment</button>
//               <button onClick={this.onDecrement}>Decrement</button>
//               {this.state.counter}
//             </div>
//   }
// }


ReactDOM.render( 
  <Provider store={store}>
    <App/>
  </Provider>,
   document.querySelector("#root"));

