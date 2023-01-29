import { FC } from "react";

import { JobsList } from "../../components";

const JobListPage: FC = () => {
  return (
    <main className="bg-[#e6e9f2] pt-[9px] xlMin:pt-[30px] pb-[9px] xlMin:pb-[64px]">
      <section className="">
        <h1 className="hidden">Detailed Job Page</h1>
        <div className="container">
          <JobsList />
        </div>
      </section>
    </main>
  );
};

export default JobListPage;
