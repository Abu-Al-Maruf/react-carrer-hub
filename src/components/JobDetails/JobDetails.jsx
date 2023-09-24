import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar,AiTwotoneCalendar,AiOutlinePhone,AiOutlineMail } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilities/localstorage";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const jobIdInt = parseInt(id);
  const job = jobs.find((job) => job.id === jobIdInt);

  const {
    job_description,
    job_title,
    experiences,
    job_responsibility,
    educational_requirements,
    salary,
  } = job;
const {phone, email, address} = job.contact_information;

const handleToast = () => {
  saveJobApplication(id);
  toast('You Have Applied Sucessfully!')
}


  return (
    <div className="grid grid-cols-4 gap-5  mx-10 my-20">
      <div className="col-span-3 text-[#757575] font-normal flex flex-col gap-4">
        <p>
          <span className="font-medium text-base text-black">
            Job Description:
          </span>
          {job_description}
        </p>
        <p>
          <span className="font-medium text-base text-black">
            Job Responsibility:
          </span>
          {job_responsibility}
        </p>
        <p className="font-medium text-base text-black">
          Educational Requirements:
        </p>
        <p>{educational_requirements}</p>
        <p className="font-medium text-base text-black">Experiences:</p>
        <p>{experiences}</p>
      </div>

      <div className="bg-gray-100 p-5 rounded-md col-span-1">
        <h3 className="font-bold pb-5 text-xl">Job Details</h3>
        <hr />

        <div className="font-medium text-[#757575]">
          <p className="flex items-center gap-2 my-1">
            <AiOutlineDollar className="text-blue-500"></AiOutlineDollar>
            <span className="font-bold text-[#474747]">Salary :</span> {salary}
          </p>
          <p className="flex items-center gap-2">
            <AiTwotoneCalendar className="text-blue-500"></AiTwotoneCalendar>
            <span className="font-bold text-[#474747]">Job Title :</span> {job_title}
          </p>
        </div>
        <h3 className="font-bold pb-5 mt-7 text-xl">Job Details</h3>
        <hr />
        <div className="font-medium text-[#757575]">
          <p className="flex items-center gap-2 my-1">
            <AiOutlinePhone className="text-blue-500"></AiOutlinePhone>
            <span className="font-bold text-[#474747]">Phone :</span> {phone}
          </p>
          <p className="flex items-center gap-2">
            <AiOutlineMail className="text-blue-500"></AiOutlineMail>
            <span className="font-bold text-[#474747]">Email :</span> {email}
          </p>
          <p className="flex items-center gap-2">
            <LuMapPin className="text-blue-500"></LuMapPin>
            <span className="font-bold text-[#474747]">Address </span> {address}
          </p>
        </div>

        <button onClick={handleToast} className="bg-[#7E90FE] p-3 w-full text-white font-semibold rounded-md hover:scale-[.98] mt-3">Apply Now</button>
        <ToastContainer />

      </div>
    </div>
  );
};

export default JobDetails;
