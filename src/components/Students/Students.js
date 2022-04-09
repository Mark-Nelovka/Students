// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import s from './Students.module.css';
import { ReactComponent as FilterName } from '../images/filter-name.svg';
import { ReactComponent as ArrowNumber } from '../images/arrows-number.svg';
import { ReactComponent as Info } from '../images/info.svg';
import { ReactComponent as Check } from '../images/Check.svg';
import {
  fetchStudent,
  countArchiveStudents,
} from '../../redux/students/studentOperations';

function Students() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  const checkList = useSelector(state => state.students.check);
  let count = useSelector(state => state.students.archive);
  const [x, setX] = useState(null);

  const checkAll = () => {
    setX(!x);
    console.log(x);
    if (count === 0) {
      dispatch(countArchiveStudents(10));
      return;
    }
    dispatch(countArchiveStudents(0));
    return;
  };

  const studentChecked = e => {
    console.log(e);

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
    dispatch(fetchStudent());
    // if (checkList === false) {
    //   setX(false);
    //   return;
    // }
  }, []);
  return (
    <section className={s.sectionStudents}>
      <div className={s.studentItemHead}>
        <input
          className={s.checkbox}
          type="checkbox"
          onChange={() => {
            checkAll();
          }}
        />
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
                  checked={x}
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
