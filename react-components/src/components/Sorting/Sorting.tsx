import React from 'react';
import { useAppDispatch } from '../../hook';
import { setItems } from '../../reducers/itemSlice';
import ApiList from '../../Api/Api';
import { IData } from '../../global/interfaces';
import './sorting.scss';

function Sorting() {
  const dispatch = useAppDispatch();

  const sortingHandlerByNameAsc = () => {
    ApiList.getSortByNameAsc().then((data: Array<IData>) => {
      dispatch(setItems(data));
    });
  };

  const sortingHandlerByNameDesc = () => {
    ApiList.getSortByNameDesc().then((data: Array<IData>) => {
      dispatch(setItems(data));
    });
  };

  const sortingHandlerByYearAsc = () => {
    ApiList.getSortByYearAsc().then((data: Array<IData>) => {
      dispatch(setItems(data));
    });
  };

  const sortingHandlerByYearDesc = () => {
    ApiList.getSortByYearDesc().then((data: Array<IData>) => {
      dispatch(setItems(data));
    });
  };

  return (
    <div className="sorting__container">
      <div className="sorting__cathegory" onClick={sortingHandlerByNameAsc}>
        sort by names ▲
      </div>

      <div className="sorting__cathegory" onClick={sortingHandlerByNameDesc}>
        sort by names ▼
      </div>

      <div className="sorting__cathegory" onClick={sortingHandlerByYearAsc}>
        sort by year of born ▲
      </div>

      <div className="sorting__cathegory" onClick={sortingHandlerByYearDesc}>
        sort by year of born ▼
      </div>
    </div>
  );
}

export default Sorting;
