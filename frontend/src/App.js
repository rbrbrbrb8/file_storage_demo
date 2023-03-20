import './App.css';
import LogIn from './components/LogIn';
import MashakLogIn from './mashakComponents/MshakLogIn';
import MlAddFiles from './components/MlAddFiles';
import MashakCourses from './mashakComponents/MashakCourses';
import PeopleInCourse from './mashakComponents/peopleInCourse';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { UserProvider } from './mashakComponents/UserContext';




function App() {

  
  
  const [approvedUser, setApprovedUser] = useState("sdfsf");
  

  return (
    <div className='stam'>
      {/* <Router>
        <div className="App">
          <header className="App-header" >
            <Routes>
              <Route exact path='/LogIn' element={<LogIn setApprovedUser={setApprovedUser} />} />
              <Route exact path='/UploadFiles' element={<MlAddFiles approvedUser={approvedUser}/>} />         
            </Routes>
          </header>
        </div>
      </Router> */}
      <Router>
        <div className="App">
          <header className="App-header2">
          <UserProvider>
            <Routes>                         
              <Route exact path='/MASHAKLogIn' element={<MashakLogIn/>} />
              <Route exact path='/MASHAKCourses' element={<MashakCourses/>} />
              <Route exact path='/Course' element={<PeopleInCourse/>} />            
            </Routes>
          </UserProvider>
          </header>
        </div>
      </Router>
    </div>
  );
}

export default App;
