import '../../css/Modal.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ReactComponent as Arrow } from '../images/arrow-down.svg';
import { ReactComponent as Date } from '../images/calendar.svg';
import { ReactComponent as Check } from '../images/Check.svg';
import { idForModal } from '../../redux/students/studentOperations';
function ModalInfoStudent() {
  const students = useSelector(state => state.students.students);
  const idModal = useSelector(state => state.students.idForModal);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);

  const saveId = () => {
    setShowModal(!showModal);
    dispatch(idForModal(0));
  };

  return (
    <>
      {students &&
        showModal &&
        students.map(({ name, id, tests }) => {
          if (id === idModal) {
            return (
              <div key={id} className="container-modal">
                <div className="modal_identification">
                  <span className="modal_identification_student-name">
                    students: <b>{name}</b>
                  </span>
                  <span>
                    id: <b>{id}</b>
                  </span>
                  <button
                    className="modal_identification_arrow-close-button"
                    onClick={saveId}
                  >
                    <Arrow
                      className="modal_identification_arrow-close"
                      width="10"
                      height="5"
                    />
                  </button>
                </div>
                <div className="modal_container-button-filter">
                  <button className="modal_container-button-filter_button-filter">
                    All concepts
                    <Arrow
                      className="modal_container-button-filter_arrow"
                      width="8"
                      height="4"
                    />
                  </button>
                  <button className="modal_container-button-filter_button-filter">
                    All score
                    <Arrow
                      className="modal_container-button-filter_arrow"
                      width="8"
                      height="4"
                    />
                  </button>
                  <button className="modal_container-button-filter_button-filter">
                    All speed
                    <Arrow
                      className="modal_container-button-filter_arrow"
                      width="8"
                      height="4"
                    />
                  </button>
                  <div className="modal_container-date">
                    <input
                      className="modal_container-date_data-filter"
                      type="text"
                      placeholder="SELECT PERIOD"
                    />
                    <Date
                      className="modal_container-date_data"
                      width="12"
                      height="13"
                    />
                  </div>
                </div>
                <div className="modal_line"></div>
                <div className="modal_container-score">
                  <span className="modal_score">score</span>
                  <div className="modal_ideal"></div>
                  <span className="modal_ideal-text">90%+ accuracy</span>
                  <div className="modal_good"></div>
                  <span className="modal_good-text">80 - 89% accuracy</span>
                  <div className="modal_norm"></div>
                  <span className="modal_norm-text">50 - 79% accuracy</span>
                  <div className="modal_bad"></div>
                  <span className="modal_bad-text">below 50% accuracy</span>
                </div>
                <div className="modal_container-speed">
                  <span className="modal_speed">speed</span>
                  <div className="modal_ideal-speed"></div>
                  <span className="modal_ideal-text-speed">above expected</span>
                  <div className="modal_good-speed"></div>
                  <span className="modal_good-text-speed">as expected</span>
                  <div className="modal_bad-speed"></div>
                  <span className="modal_bad-text-speed">below expected</span>
                </div>
                <div className="modal_container-head-line-results">
                  <span className="modal_number">#</span>
                  <span className="modal_head-test">Test Label</span>
                  <span className="modal_head-scope">Score</span>
                  <span className="modal_head-speed">Speed</span>
                  <span className="modal_head-total">Total Q-ns</span>
                  <span className="modal_head-exp-speed">Exp. Speed</span>
                  <span className="modal_head-concept">Concept</span>
                  <span className="modal_head-date">Date</span>
                  <span>Absent</span>
                </div>
                <ol className="modal_list">
                  {tests.map(
                    ({
                      label,
                      scope,
                      speed,
                      total,
                      expSpeed,
                      concept,
                      absent,
                      data,
                    }) => {
                      return (
                        <>
                          <li className="modal_result-item" key={uuidv4()}>
                            <span className="modal_item-label">{label}</span>
                            <span className="modal_item-scope">
                              {scope ? scope : 'No scope'}
                            </span>
                            {speed ? (
                              <span className="modal_item-speed">{speed}</span>
                            ) : (
                              <span className="modal_no-speed">
                                {'No info'}
                              </span>
                            )}

                            <span className="modal_item-total">{total}</span>
                            <span className="modal_item-exp-speed">
                              {expSpeed}
                            </span>
                            <span className="modal_item-concept">
                              {concept}
                            </span>
                            <span className="modal_item-data">
                              {data ? data : 'No date'}
                            </span>
                            {absent ? (
                              <input type="checkbox" />
                            ) : (
                              <Check width="15" height="15" />
                            )}
                          </li>
                        </>
                      );
                    }
                  )}
                </ol>
                <div className="modal_line"></div>
                <div className="modal_container-average-table">
                  <span className="modal_container-average-table_average">
                    Average
                  </span>
                  <span className="modal_container-average-table_percentegare">
                    96%
                  </span>
                  <span className="modal_container-average-table_above">
                    Above expected
                  </span>
                </div>
              </div>
            );
          }
          return '';
        })}
    </>
  );
}

export default ModalInfoStudent;
