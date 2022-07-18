import { useState } from 'react';

const useToggle = () => {
  const [visible, setVisible] = useState(true);
  const toggle = () => setVisible((prev) => !prev);

  return { visible, toggle };
};

export default useToggle;
