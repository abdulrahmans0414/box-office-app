import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from "./AppTitle";
const MainLayout = ()=>{
return(
    <div>

        <Navs />
        <AppTitle 

        // title="hi" 
        // subtitle="dfskjflj"
        />


        <Outlet />
    </div>
)
}

export default MainLayout;