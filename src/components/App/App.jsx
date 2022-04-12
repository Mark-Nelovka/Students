import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navigation from "../Navigations/Navigation";
import Filter from "../Filter/Filter";
import Headline from "../Headline/Headline";
import Pagination from "../Pagination/Pagination";
import HeadArchive from "components/HeadlineArchive/HeadArchive";
const Students = lazy(() => import('../Students/Students' /* webpackChunkName: "Students" */));


function App() {
  const count = useSelector(state => state.students.archive)
  
  return (
    <>
      <Navigation />
      <Filter />
      {count ? <HeadArchive /> : <Headline />}

      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
          <Route path="/" element={<Navigate to='/students' />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Suspense>
      <Pagination />
    </>
  );
      
};

export default App;