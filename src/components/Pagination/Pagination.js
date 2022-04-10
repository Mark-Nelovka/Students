import s from './Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ArrowDown } from '../images/arrow-down.svg';
import { ReactComponent as ArrowRight } from '../images/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../images/arrow-left.svg';
import {
  pageIncrement,
  pageDecrement,
} from '../../redux/students/studentOperations';

function Pagination() {
  const dispatch = useDispatch();
  const pag = useSelector(state => state.students.students);
  const totalCount = useSelector(state => state.students.totalCount);
  const studForPag = useSelector(state => state.students.studForPagination);

  let page = 1;
  const pageIncrementButton = () => {
    if (page === 2) {
      return;
    }
    page += 1;
    dispatch(pageIncrement(page));
  };

  const pageDecrementButton = () => {
    dispatch(pageDecrement(page));
    return;
  };

  return (
    <div className={s.containerPagination}>
      <div className={s.pageCount}>
        <span>Rows per page: 10</span>
        <ArrowDown className={s.arrowDown} width="8" height="4" />
      </div>
      <div className={s.pagination}>
        {pag && (
          <span>{`${pag[0].id}-${studForPag.length} of ${totalCount}`}</span>
        )}

        <div className={s.containerButtonPargination}>
          <button onClick={pageDecrementButton} className={s.buttonLeft}>
            <ArrowLeft
              className={s.arrowLeft}
              id="left"
              width="10"
              height="16"
            />
          </button>
          <button onClick={pageIncrementButton} className={s.buttonRight}>
            <ArrowRight
              className={s.arrowRight}
              id="right"
              width="10"
              height="16"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
