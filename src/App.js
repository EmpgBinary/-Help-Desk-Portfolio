// import Navbar from "./component/navbar/Navbar";
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import About from "./component/about/About";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from "./component/contact/Contact";
import Text from "./component/text/Text";
import Statusupdate from "./component/statusupdate/Statusupdate";
import Skills from "./component/skills/Skills";
import Footer from "./component/footer/Footer";
// import Signup from "./component/signUp/Signup";


function App() {
  const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Text />
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/skills",
      element: <Skills/>
    },
    {
      path: "/footer",
      element: <Footer/>
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/statusupdate",
      element: <Statusupdate/>
    },
    
  ])
  return (
    <div>
  
       
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
