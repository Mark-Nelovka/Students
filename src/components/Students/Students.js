import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import s from './Students.module.css';
import { ReactComponent as FilterName } from '../images/filter-name.svg';
import { ReactComponent as ArrowNumber } from '../images/arrows-number.svg';
import { ReactComponent as Info } from '../images/info.svg';
import { ReactComponent as ArrowDown } from '../images/arrow-down.svg';
import {
  fetchStudent,
  countArchiveStudents,
  idForModal,
} from '../../redux/students/studentOperations';
import ModalInfoStudent from 'components/Modal/Moda';

function Students() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  let count = useSelector(state => state.students.archive);
  const idModal = useSelector(state => state.students.idForModal);

  const studentChecked = e => {
    const { checked } = e.target;
    if (checked === true) {
      count += 1;
      dispatch(countArchiveStudents(count));
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
    console.log(idModal);
  };

  useEffect(() => {
    if (students === null) {
      dispatch(fetchStudent());
      return;
    }
    return;
  });
  return (
    <section className={s.sectionStudents}>
      <div className={s.studentItemHead}>
        <input className={s.checkbox} type="checkbox" />
        <div className={s.containerFilterName}>
          <span className={s.studentNameHead}>Name</span>
          <FilterName className={s.filterNameIcon} />
        </div>
        <div className={s.containerFilterId}>
          <span className={s.studentIdHead}>Id</span>
          <ArrowNumber className={s.arrowNumber} />
        </div>

        <span className={s.studentClass}>Class</span>
        <div className={s.containerFilterScore}>
          <span className={s.studentScoreHead}>Av.Score, %</span>
          <ArrowNumber className={s.arrowNumber} />
        </div>
        <div className={s.containerFilterSpeed}>
          <span className={s.studentSpeedHead}>Av.Speed</span>
          <ArrowNumber className={s.arrowNumber} />
        </div>

        <span className={s.studentParentName}>Parents</span>
      </div>

      <ul className={s.studentsList}>
        {students &&
          students.map(student => {
            if (student.id == idModal) {
              return <ModalInfoStudent props={idModal} />;
            }
            return (
              <li key={student.id} className={s.studentItem}>
                <input
                  className={s.checkbox}
                  type="checkbox"
                  onChange={e => {
                    studentChecked(e);
                  }}
                  id={student.id}
                />

                <span className={s.studentName}>{student.name}</span>
                <span className={s.studentId}>{student.id}</span>
                <span className={s.studentClass}>{student.class}</span>
                <span className={s.studentScore}>{student.score}</span>
                <span className={s.studentSpeed}>{student.speed}</span>
                <div className={s.containerParentName}>
                  <Info className={s.info} />
                  <span className={s.studentParentName}>
                    {student.parents.join(', ')}
                  </span>
                </div>
                <button
                  onClick={moreInfo}
                  type="button"
                  className={s.buttonArrowDown}
                  id={student.id}
                >
                  <ArrowDown
                    className={s.arrowDownIcon}
                    width="10"
                    height="5"
                    id={student.id}
                  />
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default Students;
