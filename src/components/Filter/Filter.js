import '../../css/Filter.css';
import menu from '../../menu';
import { ReactComponent as SvgArrow } from '../images/arrow-down.svg';
import { ReactComponent as SvgClear } from '../images/clear-filter.svg';
import { v4 as uuidv4 } from 'uuid';

function Filter() {
  return (
    <>
      <section className="filter-section">
        <div className="container_filter">
          {menu.map(data => {
            return (
              <button key={uuidv4()} className="filter_button" type="button">
                {data}
                <SvgArrow className="filter_arrow" width="8" height="4" />
              </button>
            );
          })}
        </div>
        <div className="filter_container-clear-button">
          <button
            className="filter_container-clear-button_clear-button"
            type="button"
          >
            <SvgClear
              className="filter_container-clear-button_clear-svg-button"
              width="9"
              height="9"
            />
            CLEAR ALL
          </button>
        </div>
      </section>
    </>
  );
}

export default Filter;
