import { useState } from 'react';

const TestComponent = () => {
  const [value, setValue] = useState(10);
  // throw new Error('error happened');

  const handleClick = () => setValue((prev) => prev + 1);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil
        alias ipsa dolore odio totam sed, saepe numquam laboriosam ipsam rem
        quibusdam, rerum consequatur officiis voluptatem quaerat, maiores
        tempore. Eveniet.
      </p>
      <p data-testid='value'>{value}</p>
      <button data-testid='button' onClick={handleClick}>
        Push me (+)
      </button>
    </div>
  );
};

export default TestComponent;
