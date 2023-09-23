import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-[#1A1919]">
          Featured Jobs
        </h1>
        <p className="font-medium text-[#757575] mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-20 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={`text-center ${dataLength === jobs.length && 'hidden'}`}>
        <button onClick={() => setDataLength(jobs.length)} className="bg-[#7E90FE] py-3 px-7 my-10  text-white rounded-md self-start font-semibold text-xl hover:scale-[.98]">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
