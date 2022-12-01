import React from 'react';
import { useAppDispatch } from '../../hook';
import { fetchSortBy } from '../../reducers/itemSlice';
import './sorting.scss';

function Sorting() {
  const dispatch = useAppDispatch();

  return (
    <div className="sorting__container">
      <div
        className="sorting__cathegory"
        onClick={() => dispatch(fetchSortBy({ param: 'name', order: 'asc' }))}
      >
        sort by names ▲
      </div>

      <div
        className="sorting__cathegory"
        onClick={() => dispatch(fetchSortBy({ param: 'name', order: 'dsc' }))}
      >
        sort by names ▼
      </div>

      <div
        className="sorting__cathegory"
        onClick={() => dispatch(fetchSortBy({ param: 'born', order: 'asc' }))}
      >
        sort by year of born ▲
      </div>

      <div
        className="sorting__cathegory"
        onClick={() => dispatch(fetchSortBy({ param: 'born', order: 'dsc' }))}
      >
        sort by year of born ▼
      </div>
    </div>
  );
}

export default Sorting;
