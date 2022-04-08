import s from './Pagination.module.css';
import { ReactComponent as ArrowDown } from '../images/arrow-down.svg';
import { ReactComponent as ArrowRight } from '../images/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../images/arrow-left.svg';

function Pagination() {
  return (
    <div className={s.containerPagination}>
      <div className={s.pageCount}>
        <span>Rows per page: 10</span>
        <ArrowDown className={s.arrowDown} width="8" height="4" />
      </div>
      <div className={s.pagination}>
        <span>21-30 of 100</span>
        <ArrowLeft className={s.arrowLeft} width="10" height="16" />
        <ArrowRight className={s.arrowRight} width="10" height="16" />
      </div>
    </div>
  );
}

export default Pagination;
