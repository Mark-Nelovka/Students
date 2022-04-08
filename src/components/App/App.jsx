import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigations/Navigation";
import Filter from "../Filter/Filter";
import Headline from "../Headline/Headline";
import Pagination from "../Pagination/Pagination";
const Students = lazy(() => import('../Students/Students' /* webpackChunkName: "Students" */));


function App () {
  
  return (
    <>
      <Navigation />
      <Filter />
      <Headline />

      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Students />} />
        </Routes>
      </Suspense>
      <Pagination />
    </>
  );
      
};

export default App;