import { Component, useState } from 'react';

import Cart from './container/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TestComponent1 extends Component {
  state = {
    value1: 1111,
    value2: 222,
  };

  handleClick = () => {
    this.setState({
      value1: 5555,
    });
  };

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <p>{this.state.value1}</p>
        <p>{this.state.value2}</p>
        <button onClick={this.handleClick}>push me</button>
      </div>
    );
  }
}

const TestComponent2 = () => {
  const [state, setState] = useState({
    value1: 1111,
    value2: 222,
  });

  const handleClick = () => {
    setState((prev) => ({
      ...prev,
      value1: 5555,
    }));
  };

  return (
    <div>
      <h3>Functional Component</h3>
      <p>{state.value1}</p>
      <p>{state.value2}</p>
      <button onClick={handleClick}>push me</button>
    </div>
  );
};

const App = () => {
  return (
    <div className='App'>
      <ToastContainer />
      <Cart />
      {/* <TestComponent1 />
      <TestComponent2 /> */}
    </div>
  );
};

export default App;
