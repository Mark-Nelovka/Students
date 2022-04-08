import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import s from './Students.module.css';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const PARAMS = 'page=1&size=10';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`https://test-task-j.herokuapp.com/data?${PARAMS}`).then(res => {
      console.log(res.data.data);
      setStudents(res.data.data);
    });
  }, []);
  return (
    <>
      <div>
        sdkjvbwkvjbsvkj
        {/* <input className={s.checkbox} type="checkbox" />
        <span className={s.studentName}>Name</span>
        <span className={s.studentId}>Id</span>
        <span className={s.studentClass}>Class</span>
        <span className={s.studentScore}>Av.Score</span>
        <span className={s.studentSpeed}>Av.Speed</span>
        <span className={s.studentParentName}>Parents</span> */}
      </div>
      <ul>
        {students.map(student => {
          return (
            <li key={student.id}>
              lkjsdnckjsbvkjwbvcwdv
              {/* <input className={s.checkbox} type="checkbox" />
              <span className={s.studentName}>{student.name}</span>
              <span className={s.studentId}>{student.id}</span>
              <span className={s.studentClass}>{student.class}</span>
              <span className={s.studentScore}>{student.score}</span>
              <span className={s.studentSpeed}>{student.speed}</span>
              <span className={s.studentParentName}>
                {student.parents.join(', ')}
              </span> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Students;
