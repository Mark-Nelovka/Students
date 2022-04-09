import { useSelector, useDispatch } from 'react-redux';
import s from './HeadArchive.module.css';
import { ReactComponent as CleaerSelected } from '../images/clear-filter.svg';
import { ReactComponent as ExportIcon } from '../images/export-csv.svg';
import { ReactComponent as ArchiveIcon } from '../images/Archive-icon.svg';
import {
  clearAllStudents,
  check,
} from '../../redux/students/studentOperations';

function HeadArchive() {
  const countArchiveStudents = useSelector(state => state.students.archive);
  const dispatch = useDispatch();

  const clearSelectedAllStudents = () => {
    dispatch(clearAllStudents());
    dispatch(check(false));
    window.location.reload();
  };

  return (
    <section className={s.sectionArchive}>
      <span
        className={s.studentSecelcted}
      >{`${countArchiveStudents} students selected`}</span>
      <div className={s.containerCancelSelection}>
        <button onClick={clearSelectedAllStudents} className={s.buttonClear}>
          <CleaerSelected className={s.clearSelected} width="9" height="9" />
          Cancel selection
        </button>
      </div>
      <div className={s.containerExport}>
        <ExportIcon className={s.exportIcon} width="9" height="11" />
        <span>export csv</span>
      </div>
      <div className={s.containerArchive}>
        <ArchiveIcon className={s.archiveIcon} width="12" height="12" />
        <span>archive selected</span>
      </div>
    </section>
  );
}

export default HeadArchive;
