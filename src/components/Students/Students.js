// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './Students.module.css';
import { ReactComponent as FilterName } from '../images/filter-name.svg';
import { ReactComponent as ArrowNumber } from '../images/arrows-number.svg';
import { ReactComponent as Info } from '../images/info.svg';
// import { ReactComponent as Check } from '../images/Check.svg';
import {
  fetchStudent,
  countArchiveStudents,
  // filterArr,
} from '../../redux/students/studentOperations';

function Students() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  let count = useSelector(state => state.students.archive);
  // const filterSt = useSelector(state => state.students.filter);

  // useEffect(() => {
  //   if (students) {
  //     console.log(students);
  //     students.filter(studentF => {
  //       if (studentF.id == filterSt) {
  //         return dispatch(filterArr([studentF]));
  //       }
  //       return studentF;
  //     });
  //     return;
  //   }
  // }, [filterSt]);

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
  useEffect(() => {
    if (students === null) {
      dispatch(fetchStudent());
      return;
    }
    return;
    // if (students === null) {
    //   return;
    // }
    // setChangeStudent(
    //   students.map(st => {
    //     return {
    //       class: st.class,
    //       id: st.id,
    //       name: st.name,
    //       score: st.score,
    //       speed: st.speed,
    //       parents: st.parents,
    //       tests: st.tests,
    //       checkedd: false,
    //     };
    //   })
    // );
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
            return (
              <li key={student.id} className={s.studentItem}>
                {/* <Check className={s.check} width="12" height="12" /> */}
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
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default Students;
