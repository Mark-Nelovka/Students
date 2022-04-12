import '../../css/Headline.css';
import { CSVLink } from 'react-csv';
import { ReactComponent as SearchIcon } from '../images/Search-icon.svg';
import { ReactComponent as ExportCsv } from '../images/export-csv.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, searchStudent } from '../../redux/students/studentOperations';

function Headline() {
  const [info, setInfo] = useState('');
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();

  const inputChange = e => {
    const { value } = e.target;
    setInfo(value);
    dispatch(filter(value));
  };

  const searchStudentForm = e => {
    e.preventDefault();
    dispatch(searchStudent(info));
  };

  return (
    <section className="headline">
      <h1 className="headline_table-name">Students</h1>
      <form onSubmit={searchStudentForm} className="headline_container-input">
        <label>
          <input
            onChange={inputChange}
            className="headline_input-search-student"
            type="text"
            name="search"
            value={info}
            placeholder="Enter Student Name, Parent or ID here"
          />
        </label>

        <button type="submit" className="headline_search-button">
          <SearchIcon className="headline_search-icon" />
        </button>
      </form>

      {students && (
        <div className="headline_container-download">
          <ExportCsv className="headline_export-icon" />
          <CSVLink
            filename={'Test.csv'}
            className="headline_container-download_export"
            data={students}
          >
            Export to csv
          </CSVLink>
        </div>
      )}
    </section>
  );
}

export default Headline;
