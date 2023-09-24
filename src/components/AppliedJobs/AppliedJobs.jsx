import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localstorage";
import AddedJobs from "../AddedJobs/AddedJobs";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobs = JSON.stringify(getStoredJobApplication());
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobs.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobsFilter = (filter) => {

    if(filter === 'all'){
        setDisplayJobs(appliedJobs)
    } else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs)
    } else if (filter === 'onsite'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(remoteJobs)
    }

  }





  return (
    <div className="p-10">
      <h1 className="text-2xl text-center my-10">
        Applied Jobs: {appliedJobs.length}
      </h1>

      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Filter By
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
          <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
          <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>

        </ul>
      </div>
      {displayJobs.map((job) => (
        <AddedJobs key={job.id} job={job}></AddedJobs>
      ))}
    </div>
  );
};

export default AppliedJobs;
