import withToggle from './withToggle';
import withHoc from './withHoc';

const TestComponent = ({ value = 0 }) => <h1>{value}</h1>;

export default withToggle(withHoc(TestComponent));
