import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
import {Outlet}from 'react-router-dom'
const Home = () => {

  return <div>
    {<DirectoryMenu />}
    <Outlet/>
    </div>;
};

export default Home;
