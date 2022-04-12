import '../../css/Archive.css';
import { ReactComponent as ArrowDown } from '../images/arrow-down.svg';
import { ReactComponent as Info } from '../images/info.svg';
function Archive({ archive }) {
  return (
    <>
      <h3 className="archived">Archived</h3>

      <ul className="archive">
        {archive.map(student => {
          return (
            <li key={student.id} className="archive_list">
              <input className="archive_checkbox" type="checkbox" />

              <span className="archive_name">{student.name}</span>
              <span className="archive_id">{student.id}</span>
              <span className="archive_class">{student.class}</span>
              <span className="archive_score">{student.score}</span>
              <span className="archive_speed">{student.speed}</span>
              <div className="archive_container-parent-name">
                <Info className="archive_container-parent-name_info" />
                <span className="arhive_container-parent-name_parent-name">
                  {student.parents.join(', ')}
                </span>
              </div>
              <ArrowDown
                className="arhive_arrow-down-icon"
                width="10"
                height="5"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Archive;
