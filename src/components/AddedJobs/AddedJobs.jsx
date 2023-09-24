import PropTypes from "prop-types";
const AddedJobs = ({ job }) => {
  const { logo, remote_or_onsite, job_type, company_name, salary, job_title } =
    job;
  return (
    <div className="flex justify-between items-center p-10 bg-gray-200 rounded-xl mt-5">
      <div>
        <img src={logo} alt="" />
        <div className="font-medium text-xl flex flex-col gap-2">
          <p>{company_name}</p>
          <p>{job_title}</p>
          <p>{salary}</p>
        </div>
        <div className="mt-5">
          <button className="font-medium text-[#7E90FE] border-2  border-[#7E90FE] py-2 px-4 rounded-lg hover:scale-[.98]">
            {remote_or_onsite}
          </button>
          <button className="font-medium text-[#7E90FE] border-2 border-[#7E90FE] py-2 px-4 rounded-lg hover:scale-[.98] ml-3">
            {job_type}
          </button>
        </div>
      </div>

      <button className="py-2 px-3 bg-purple-700 text-base font-semibold text-white rounded-md">
        View Details
      </button>
    </div>
  );
};
AddedJobs.propTypes = {
  job: PropTypes.object,
};
export default AddedJobs;
