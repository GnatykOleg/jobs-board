import { FC, Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import { useAppDispatch } from "./services/hooks/reduxHooks";
import { fetchJobsList } from "./redux/jobsList/jobsListOperations";

const JobListPage = lazy(() => import("./pages/JobListPage/JobListPage"));
const DetailedJobPage = lazy(
  () => import("./pages/DetailedJobPage/DetailedJobPage")
);

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchJobsList());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<JobListPage />} />
        <Route path="/jobs-list/:postId" element={<DetailedJobPage />} />
        <Route path="*" element={<JobListPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
