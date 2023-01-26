import { FC, useEffect } from "react";

import { useAppDispatch } from "./services/hooks/reduxHooks";
import { fetchJobsList } from "./redux/jobsList/jobsListOperations";
import PagesRoutes from "./pages/PagesRoutes/PagesRoutes";

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchJobsList());
  }, [dispatch]);

  return <PagesRoutes />;
};

export default App;
