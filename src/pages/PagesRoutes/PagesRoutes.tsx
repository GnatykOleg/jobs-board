import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../../components";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const DetailedJobPage = lazy(
  () => import("../DetailedJobPage/DetailedJobPage")
);

const PagesRoutes: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs-list/:postId" element={<DetailedJobPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default PagesRoutes;
