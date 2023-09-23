import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center relative top-52">
            <h2 className="text-5xl">oops!!! No Page Found!</h2>
           <NavLink to="/"> <button className="btn btn-error mt-10">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;