import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../../components";

const JobListPage = lazy(() => import("../JobListPage/JobListPage"));
const DetailedJobPage = lazy(
  () => import("../DetailedJobPage/DetailedJobPage")
);

const PagesRoutes: FC = () => {
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

export default PagesRoutes;
