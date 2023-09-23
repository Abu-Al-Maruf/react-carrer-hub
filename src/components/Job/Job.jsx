import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="flex flex-col gap-5 p-10 border border-gray-400 rounded-lg">
      <img className="w-[130px]" src={logo} />
      <h2 className="text-[#474747] font-extrabold text-2xl">{job_title}</h2>
      <h3 className="text-[#757575] font-semibold text-xl">{company_name}</h3>
      <div>
        <button className="font-medium text-[#7E90FE] border-2  border-[#7E90FE] py-2 px-4 rounded-lg hover:scale-[.98]">
          {remote_or_onsite}
        </button>
        <button className="font-medium text-[#7E90FE] border-2 border-[#7E90FE] py-2 px-4 rounded-lg hover:scale-[.98] ml-3">
          {job_type}
        </button>
      </div>
      <div className="font-semibold text-xl text-[#757575] flex gap-10">
        <div className="flex items-center gap-2">
          <IoLocationOutline></IoLocationOutline>
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <CiDollar></CiDollar>
          <p>{salary}</p>
        </div>
      </div>
      <Link to={`/details/${id}`}>
        <button className="bg-[#7E90FE] py-3 px-5 text-white rounded-md self-start font-semibold text-xl hover:scale-[.98]">
          View Details
        </button>
      </Link>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
