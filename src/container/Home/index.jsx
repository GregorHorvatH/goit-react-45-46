import { useState, useEffect } from 'react';
import TestComponent from './TestComponent';
import { sum } from '../../utils';
import cat from '../../assets/cat.jpeg';
import styles from './styles.module.css';

const URL = 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/todos/3';

const Home = () => {
  const [todo, setTodo] = useState({ text: '', isDone: false });

  const handleTextChange = (e) =>
    setTodo((prev) => ({
      ...prev,
      text: e.target.value,
    }));

  const handleIsDoneChange = () =>
    setTodo((prev) => ({
      ...prev,
      isDone: !prev.isDone,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(URL, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then(setTodo);
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((todo) => setTodo(todo));
  }, []);

  return (
    <div className='container'>
      <h3>Home Page</h3>

      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          <span>text</span>
          <input type='text' value={todo.text} onChange={handleTextChange} />
        </label>
        <br />
        <label>
          <span>isDone</span>
          <input
            type='checkbox'
            checked={todo.isDone}
            onChange={handleIsDoneChange}
          />
        </label>
        <button type='submit'>Save</button>
      </form>

      <hr />
      <p>sum: {sum(2, 2)}</p>

      <TestComponent />

      <img className={styles.img} src={cat} alt='cat' />
    </div>
  );
};

export default Home;
