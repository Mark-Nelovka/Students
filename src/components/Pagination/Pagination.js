import '../../css/Pagination.css';
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
    <section className="pagination">
      <div className="pagination_container-pagination_page-count">
        <span>Rows per page: 10</span>
        <ArrowDown
          className="pagination_container-pagination_arrow-down"
          width="8"
          height="4"
        />
      </div>
      <div className="pagination_container-pagination">
        {pag && (
          <span>{`${pag[0].id}-${studForPag.length} of ${totalCount}`}</span>
        )}

        <div className="pagination_container-button">
          <button
            onClick={pageDecrementButton}
            className="pagination_container-button_button-left"
          >
            <ArrowLeft
              className="pagination_arrow-left"
              id="left"
              width="10"
              height="16"
            />
          </button>
          <button
            onClick={pageIncrementButton}
            className="pagination_container-button_button-right"
          >
            <ArrowRight
              className="pagination_arrow-right"
              id="right"
              width="10"
              height="16"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pagination;
