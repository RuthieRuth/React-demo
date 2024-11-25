import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Root = () => {
    return (
        <div>
            <Header/> 
            {/* I am the Root page  */}
            <Outlet/>
        </div>
        );
};

export default Root;

/* outlets are made up of children(list and about) in another component here; appRoutes
if not need it all can be done on the same page  */