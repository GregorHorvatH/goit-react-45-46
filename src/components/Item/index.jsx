import { useMemo } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import qs from 'query-string';

const Item = () => {
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const { itemId } = useParams();
  const query = qs.parse(search);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  console.log('color:', params);
  console.log('query:', query);
  console.log('id:', itemId);

  return (
    <div>
      <h2>Item</h2>
    </div>
  );
};

export default Item;
