import s from './Headline.module.css';
import { CSVLink } from 'react-csv';
import axios from 'axios';
import { ReactComponent as SearchIcon } from '../images/Search-icon.svg';
import { ReactComponent as ExportCsv } from '../images/export-csv.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, searchStudent } from '../../redux/students/studentOperations';

function Headline() {
  const [info, setInfo] = useState('');
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();
  // const headers = [
  //   { label: 'id', key: 'id' },
  //   { label: 'Name', key: 'name' },
  //   { label: 'class', key: 'class' },
  //   { label: 'score', key: 'score' },
  //   { label: 'speed', key: 'speed' },
  //   { label: 'tests', key: 'tests' },
  //   { label: 'parents', key: 'parents' },
  // ];
  const [csvFile, setCsvFile] = useState([
    {
      filename: 'Tests.csv',
      // headers: headers,
      data: students,
    },
  ]);

  const inputChange = e => {
    const { value } = e.target;
    setInfo(value);
    dispatch(filter(value));
  };

  const searchStudentForm = e => {
    e.preventDefault();
    dispatch(searchStudent(info));
    // setInfo('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.tableName}>Students</h1>
      <form onSubmit={searchStudentForm} className={s.containerInput}>
        <label>
          <input
            onChange={inputChange}
            className={s.inputSearchStudent}
            type="text"
            name="search"
            value={info}
            placeholder="Enter Student Name, Parent or ID here"
          />
        </label>

        <button type="submit" className={s.searchButton}>
          <SearchIcon className={s.searchIcon} />
        </button>
      </form>

      {students && (
        <div className={s.containerDownload}>
          <ExportCsv className={s.exportIcon} />
          <CSVLink filename={'Test.csv'} className={s.export} data={students}>
            Export to csv
          </CSVLink>
        </div>
      )}
    </div>
  );
}

export default Headline;
