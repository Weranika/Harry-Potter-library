import React from 'react';
import ApiList from '../../Api/Api';
import { IData } from '../../global/interfaces';
import { AppContext } from '../../context/contex';
import './sorting.scss';

function Sorting() {
  const { dispatch } = React.useContext(AppContext);

  const sortingHandlerByNameAsc = () => {
    ApiList.getSortByNameAsc().then((data: Array<IData>) => {
      dispatch({ type: 'setItems', payload: data });
    });
  };

  const sortingHandlerByNameDesc = () => {
    ApiList.getSortByNameDesc().then((data: Array<IData>) => {
      dispatch({ type: 'setItems', payload: data });
    });
  };

  const sortingHandlerByYearAsc = () => {
    ApiList.getSortByYearAsc().then((data: Array<IData>) => {
      dispatch({ type: 'setItems', payload: data });
    });
  };

  const sortingHandlerByYearDesc = () => {
    ApiList.getSortByYearDesc().then((data: Array<IData>) => {
      dispatch({ type: 'setItems', payload: data });
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
