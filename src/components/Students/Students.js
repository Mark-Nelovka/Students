import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import s from './Students.module.css';
import { useEffect, useState } from 'react';
import { ReactComponent as FilterName } from '../images/filter-name.svg';
import { ReactComponent as ArrowNumber } from '../images/arrows-number.svg';
import { ReactComponent as Info } from '../images/info.svg';

const PARAMS = 'page=1&size=10';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`https://test-task-j.herokuapp.com/data?${PARAMS}`).then(res => {
      // console.log(res.data.data);
      setStudents(res.data.data);
    });
  }, []);
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
        {students.map(student => {
          return (
            <li key={student.id} className={s.studentItem}>
              <input className={s.checkbox} type="checkbox" />
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
