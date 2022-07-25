import { useState } from 'react';

const withToggle = (Component) => (props) => {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <>
      <button onClick={toggleShow}>Show/Hide</button>
      {show && <Component {...props} />}
    </>
  );
};

export default withToggle;
