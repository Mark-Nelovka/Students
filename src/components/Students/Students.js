import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Archive from 'components/Archive/Archive';
import '../../css/Students.css';
import { ReactComponent as FilterName } from '../images/filter-name.svg';
import { ReactComponent as ArrowNumber } from '../images/arrows-number.svg';
import { ReactComponent as Info } from '../images/info.svg';
import { ReactComponent as ArrowDown } from '../images/arrow-down.svg';
import { ReactComponent as Progres } from '../images/progres.svg';
import { ReactComponent as Change } from '../images/change-info.svg';
import {
  fetchStudent,
  countArchiveStudents,
  idForModal,
  arrArchive,
} from '../../redux/students/studentOperations';
import ModalInfoStudent from 'components/Modal/Moda';

function Students() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  let count = useSelector(state => state.students.archive);
  const idModal = useSelector(state => state.students.idForModal);
  const archive = useSelector(state => state.students.arrForArchive);

  const studentChecked = e => {
    const { checked, id } = e.target;
    if (checked === true) {
      count += 1;
      dispatch(countArchiveStudents(count));
      const arr = students.find(data => data.id === Number(id));
      dispatch(arrArchive(arr));
      return;
    }

    if (checked === false) {
      count -= 1;
      dispatch(countArchiveStudents(count));
      return;
    }
  };

  const moreInfo = e => {
    const { id } = e.target;
    dispatch(idForModal(id));
  };

  useEffect(() => {
    if (students === null) {
      dispatch(fetchStudent());
      return;
    }
    return;
  });
  return (
    <section className="students">
      <div className="students_head">
        <input className="students_checkbox" type="checkbox" />
        <div className="students_container-filter-name">
          <span className="students_name-head">Name</span>
          <FilterName className="students_filter-name-icon" />
        </div>
        <div className="students_container-filter-id">
          <span className="students_id-head">Id</span>
          <ArrowNumber className="students_arrow-number" />
        </div>

        <span className="students_class">Class</span>
        <div className="students_container-filter-score">
          <span className="students_score-head">Av.Score, %</span>
          <ArrowNumber className="students_arrow-number" />
        </div>
        <div className="students_container-filter-speed">
          <span className="students_speed-head">Av.Speed</span>
          <ArrowNumber className="students_arrow-number" />
        </div>

        <span className="students_parent-name">Parents</span>
        {archive.length > 0 && <span className="action">Actions</span>}
      </div>

      <ul className="students_list">
        {students &&
          students.map(student => {
            if (student.id === idModal) {
              return <ModalInfoStudent props={idModal} />;
            }
            return (
              <li
                key={student.id}
                className={
                  archive.length > 0 && count !== 0
                    ? 'students_item-archive'
                    : 'students_item'
                }
              >
                <input
                  type="checkbox"
                  onChange={e => {
                    studentChecked(e);
                  }}
                  id={student.id}
                />

                <span className="students_name">{student.name}</span>
                <span className="students_id">{student.id}</span>
                <span className="students_class">{student.class}</span>
                {student.score > '76%' ? (
                  <span className="students_score">{student.score}</span>
                ) : (
                  <span className="students_score-bad">{student.score}</span>
                )}
                {student.speed === 'Below Expected' ? (
                  <span className="students_speed-below">{student.speed}</span>
                ) : (
                  <span className="students_speed-above">{student.speed}</span>
                )}

                <div className="students_container-parent-name">
                  <Info className="students_info" />
                  <span className="students_parent-name">
                    {student.parents.join(', ')}
                  </span>
                </div>
                {archive.length > 0 && count !== 0 ? (
                  <div className="students_container-info">
                    <button className="students_info-change">
                      <Change width="12" height="12" />
                    </button>
                    <button className="students_info-progres">
                      <Progres width="13" height="8" />
                    </button>

                    <ArrowDown
                      className="students_arrow-down-icon"
                      width="10"
                      height="5"
                      onClick={moreInfo}
                      id={student.id}
                    />
                  </div>
                ) : (
                  <ArrowDown
                    className="students_arrow-down-icon"
                    width="10"
                    height="5"
                    onClick={moreInfo}
                    id={student.id}
                  />
                )}
              </li>
            );
          })}
      </ul>
      {archive.length > 0 && count !== 0 && <Archive archive={archive} />}
    </section>
  );
}

export default Students;
