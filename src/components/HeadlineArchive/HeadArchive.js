import { useSelector, useDispatch } from 'react-redux';
import '../../css/HeadArchive.css';
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
    <section className="section-head-archive">
      <span className="head-archive_student-secelcted">{`${countArchiveStudents} students selected`}</span>
      <div className="head-archive_container-cancel-selection">
        <button
          onClick={clearSelectedAllStudents}
          className="head-archive_container-cancel-selection_button-clear"
        >
          <CleaerSelected
            className="head-archive_container-cancel-selection_clear-selected"
            width="9"
            height="9"
          />
          Cancel selection
        </button>
      </div>
      <div className="head-archive_container-export">
        <ExportIcon
          className="head-archive_container-export_export-icon"
          width="9"
          height="11"
        />
        <span>export csv</span>
      </div>
      <div className="head-archive_container-archive">
        <ArchiveIcon
          className="head-archive_container-archive_archive-icon"
          width="12"
          height="12"
        />
        <span>archive selected</span>
      </div>
    </section>
  );
}

export default HeadArchive;
