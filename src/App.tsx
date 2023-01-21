import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components";

const JobListPage = lazy(() => import("./pages/JobListPage/JobListPage"));
const DetailedJobPage = lazy(
  () => import("./pages/DetailedJobPage/DetailedJobPage")
);

const App: FC = () => {
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
