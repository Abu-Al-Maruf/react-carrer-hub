import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-5xl">oops!!!</h2>
           <NavLink to="/"> <button className="btn btn-error mt-10">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;