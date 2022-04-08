import s from './Filter.module.css';
import menu from '../../menu';
import { ReactComponent as SvgArrow } from '../images/arrow-down.svg';
import { ReactComponent as SvgClear } from '../images/clear-filter.svg';
import { v4 as uuidv4 } from 'uuid';

function Filter() {
  return (
    <>
      <div className={s.container}>
        <div className={s.containerFilter}>
          {menu.map(data => {
            return (
              <button key={uuidv4()} className={s.buttonFilter} type="button">
                {data}
                <SvgArrow className={s.arrow} width="8" height="4" />
              </button>
            );
          })}
        </div>
        <div className={s.containerClearButton}>
          <button className={s.clearButton} type="button">
            <SvgClear className={s.clearSvgButton} width="9" height="9" />
            CLEAR ALL
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
