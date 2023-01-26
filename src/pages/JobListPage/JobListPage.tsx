import { FC } from "react";

import { JobsList } from "../../components";

const JobListPage: FC = () => {
  return (
    <main>
      <section className="pt-[9px] xl:pt-[30px]">
        <h1 className="hidden">Detailed Job Page</h1>
        <div className="container">
          <JobsList />
        </div>
      </section>
    </main>
  );
};

export default JobListPage;
