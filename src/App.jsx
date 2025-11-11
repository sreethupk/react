
// import { Link, Route, Routes } from 'react-router-dom'
// import Home from './react-router-dom/Home'
// import About from './react-router-dom/About'
// import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './form/Form'
// import Contact from '../work/contact'
// import UsersList from './functional.component/hooks/usecontext-Hook/user-list/UsersList'
// import { UserApiProvider } from './functional.component/hooks/usecontext-Hook/user-list/UserApiContext'
// import Home from './functional.component/hooks/usecontext-Hook/dark&light-mode/Home'
// import { ThemeProvider } from './functional.component/hooks/usecontext-Hook/dark&light-mode/ThemeContext'

// import { Route, Routes } from "react-router-dom"
// import Navbar from "../work/Navbar"
// import Home from "../work/Home"
// import About from "../work/About"
// import Contact from "../work/Contact"
// import "../work/navbar.css"

// import SimpleForm from "./form/SimpleForm"


// import RealWorld from "./react-keys/RealWorld"

// import Items from "./react-keys/items"

// import Navbar from "./nested-routing/Navbar"
// import Home from './nested-routing/pages/Home'
// import About from './nested-routing/pages/About'
// import Service from './nested-routing/pages/Service'
// import AppDev from './nested-routing/pages/service/AppDev'
// import Design from './nested-routing/pages/service/Design'
// import { Route, Routes } from "react-router-dom"
// import WebDev from './nested-routing/pages/service/WebDev';

// import { Route, Routes } from "react-router-dom"
// import Product from "./dynamic-routing/Product"
// import ProductDetailPage from "./dynamic-routing/ProductDetailPage"

// import RenderingList from './embedding-expression/RenderingList'
// import Condition from './embedding-expression/Condition'
// import RunEffectChange from './functional.component/hooks/useEffect-Hook/RunEffectChange'
// import RunEffectOnlyOnce from './functional.component/hooks/useEffect-Hook/RunEffectOnlyOnce'
// import ProfileForm from './functional.component/UseState/ProfileForm'
// import NameForm from './functional.component/UseState/NameForm'
// import ToggleButton from './functional.component/UseState/ToggleButton'
// import UserList from './functional.component/hooks/useEffect-Hook/UserList'
// import Timer from './functional.component/hooks/useEffect-Hook/Timer'
// import Greeting from './functional.component/Greeting'
// import Props from './functional.component/Props'
// import State from './functional.component/State'
// import Basic from './functional.component/basic'
// import Calling_function from './embedding-expression/Calling_function'
// import Welcome from './embedding-expression/Welcome'

function App() {


  return (
    <>
      {/*---------------------------- embedding expression -----------------------------*/}
      {/* <Welcome/> */}
      {/* <Calling_function/> */}
      {/* <Condition/> */}
      {/* <RenderingList/> */}

      {/* -----------------functional components---------------------- */}
      {/* <Basic/> */}
      {/* <State/> */}
      {/* <Props/> */}

      {/*------------------ hooks & life cycle methods-------------- */}
      {/* <Timer/> */}
      {/* <UserList/> */}
      {/* <ToggleButton/> */}
      {/* <NameForm/> */}
      {/* <ProfileForm/> */}
      {/* <RunEffectOnlyOnce/> */}
      {/* <RunEffectChange/> */}


      {/* ---------------------useContext--------------- */}
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}

      {/*--------------------- react - router - dom----------------------------  */}
      {/* -----1---basic routing------------ */}
      {/* <div>
      <nav>
        <Link to='/'>Home</Link><br />
        <Link to='/about'>About</Link>
      </nav>
     </div>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes> */}

      {/* ----------2---dynamic routing------------ */}
      {/* <Routes>
      <Route path="/" element={<Product/>}/>
      <Route path="/products/:id" element={<ProductDetailPage/>}/>
     </Routes> */}

      {/* -------nested routing----------- */}
       {/* <Navbar />
      <div className="container-app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> */}

          {/* nested routing starts here */}
          {/* <Route path='/service' element={<Service />}>
          <Route path="web-development" element={<WebDev/>}/> */}
            {/* <Route path='web-development' element={<WebDev />} /> */}
            {/* <Route path='app-development' element={<AppDev />} />
            <Route path='design' element={<Design />} />
          </Route>
        </Routes>

      </div> */}

      {/* -----------------react keys-------------------------- */}
      {/* <Items/> */}
      {/* <RealWorld/> */}

      {/* ----------form------- */}
      {/* <SimpleForm/> */}
     <Form/>
      


      {/* ---------------------my website------------------- */}
        
        {/* <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes> */}

     



    </>
  )
}

export default App
