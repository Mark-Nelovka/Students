import s from './Headline.module.css';
import { ReactComponent as SearchIcon } from '../images/Search-icon.svg';
import { ReactComponent as ExportCsv } from '../images/export-csv.svg';

function Headline() {
  const inputChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className={s.container}>
      <h1 className={s.tableName}>Students</h1>
      <div className={s.containerInput}>
        <input
          onChange={inputChange}
          className={s.inputSearchStudent}
          type="text"
          name="search"
          placeholder="Enter Student Name, Parent or ID here"
        />
        {/* <button className={s.searchButton} type="button"> */}
        <SearchIcon className={s.searchIcon} />
        {/* </button> */}
      </div>
      <div className={s.containerDownload}>
        <ExportCsv className={s.export} />
        <span>EXPORT CSV</span>
      </div>
    </div>
  );
}

export default Headline;
