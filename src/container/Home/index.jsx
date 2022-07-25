import TestComponent from './TestComponent';
import { sum } from '../../utils';

const Home = () => (
  <div className='container'>
    <h3>Home Page</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at iure id
      voluptatem ipsa tempora culpa facere explicabo, optio aliquid eos incidunt
      fugiat molestiae beatae aperiam numquam. Consectetur, eveniet velit.
    </p>
    <p>sum: {sum(2, 2)}</p>

    <TestComponent />
  </div>
);

export default Home;
