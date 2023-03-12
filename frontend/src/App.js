import './App.css';

import LogIn from './components/LogIn';
import MashakLogIn from './mashakComponents/MshakLogIn';

import MlAddFiles from './components/MlAddFiles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MashakCourses from './mashakComponents/MashakCourses';
import PeopleInCourse from './mashakComponents/peopleInCourse';


function App() {

  const [approvedUser, setApprovedUser] = useState();
  

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
      <div className="App">
        <header className="App-header2">
          {/* <MashakLogIn /> */}
          <MashakCourses/>
          {/* <PeopleInCourse /> */}
        </header>
      </div>
    </div>
  );
}

export default App;
