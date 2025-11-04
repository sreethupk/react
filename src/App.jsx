
import './App.css'
import RenderingList from './embedding-expression/RenderingList'
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
      <RenderingList/>

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
      <RunEffectChange/>
    </>
  )
}

export default App
