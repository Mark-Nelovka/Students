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

  const qwe = () => {
    setShowModal(!showModal);
    dispatch(idForModal(0));
  };

  return (
    <>
      {students &&
        showModal &&
        students.map(({ name, id, tests }) => {
          if (id == idModal) {
            return (
              <div key={id} id="containerModal">
                <div id="identification">
                  <span id="studentName">
                    students: <b>{name}</b>
                  </span>
                  <span>
                    id: <b>{id}</b>
                  </span>
                </div>
                <div id="containerButtonFilter">
                  <button id="buttonFilter">
                    All concepts
                    <Arrow id="arrow" width="8" height="4" />
                  </button>
                  <button id="buttonFilter">
                    All score
                    <Arrow id="arrow" width="8" height="4" />
                  </button>
                  <button id="buttonFilter">
                    All speed
                    <Arrow id="arrow" width="8" height="4" />
                  </button>
                  <div id="containerDate">
                    <input
                      id="dataFilter"
                      type="text"
                      placeholder="SELECT PERIOD"
                    />
                    <Date id="date" width="12" height="13" />
                  </div>
                </div>
                <div id="line"></div>
                <div id="containerScore">
                  <span id="score">score</span>
                  <div id="ideal"></div>
                  <span id="idealText">90%+ accuracy</span>
                  <div id="good"></div>
                  <span id="goodText">80 - 89% accuracy</span>
                  <div id="norm"></div>
                  <span id="normText">50 - 79% accuracy</span>
                  <div id="bad"></div>
                  <span id="badText">below 50% accuracy</span>
                </div>
                <div id="containerSpeed">
                  <span id="speed">speed</span>
                  <div id="idealSpeed"></div>
                  <span id="idealTextSpeed">above expected</span>
                  <div id="goodSpeed"></div>
                  <span id="goodTextSpeed">as expected</span>
                  <div id="badSpeed"></div>
                  <span id="badTextSpeed">below expected</span>
                </div>
                <div id="containerHeadlineResults">
                  <span id="number">#</span>
                  <span id="headResTest">Test Label</span>
                  <span id="headResScope">Score</span>
                  <span id="headResSpeed">Speed</span>
                  <span id="headResTotal">Total Q-ns</span>
                  <span id="headResExpSpeed">Exp. Speed</span>
                  <span id="headResConcept">Concept</span>
                  <span id="headResDate">Date</span>
                  <span id="headResAbsent">Absent</span>
                </div>
                <ol id="list">
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
                          <li id="resultItemList" key={uuidv4()}>
                            <span id="itemLabel">{label}</span>
                            <span id="itemScope">
                              {scope ? scope : 'No scope'}
                            </span>
                            {speed ? (
                              <span id="itemSpeed">{speed}</span>
                            ) : (
                              <span id="noSpeed">{'No info'}</span>
                            )}

                            <span id="itemTotal">{total}</span>
                            <span id="itemExpSpeed">{expSpeed}</span>
                            <span id="itemConcept">{concept}</span>
                            <span id="itemData">
                              {data ? 'afefcasc' : 'No date'}
                            </span>
                            {absent ? (
                              <input type="checkbox" id="itemAbsent" />
                            ) : (
                              <Check width="15" height="15" />
                            )}
                          </li>
                        </>
                      );
                    }
                  )}
                </ol>
                <div id="line"></div>
                <div id="containerAverageTable">
                  <span id="average">Average</span>
                  <span id="percentegare">96%</span>
                  <span id="above">Above expected</span>
                </div>
                <button onClick={qwe}>Закрыть</button>
              </div>
            );
          }
          return '';
        })}
    </>
  );
}

export default ModalInfoStudent;
