import s from './Filter.module.css';

function Filter() {
  return (
    <div className={s.containerFilter}>
      <span>SHOW ALL</span>
      <span>ALL GRADES</span>
      <span>ALL CLASSES</span>
      <span>AV.SCORE</span>
      <span>AV.SPEED</span>
      <span>ALL CLASSES</span>
      <span>CLEAR ALL</span>
    </div>
  );
}

export default Filter;
