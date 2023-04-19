import './App.css';
import LogIn from './components/LogIn';
import MashakLogIn from './mashakComponents/MshakLogIn';
import MlAddFiles from './components/MlAddFiles';
import MashakCourses from './mashakComponents/MashakCourses';
import PeopleInCourse from './mashakComponents/peopleInCourse';
import FileUploadScreen from './components/filesUploaded';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { UserProvider } from './mashakComponents/UserContext';
import { colors, createTheme, ThemeProvider } from '@mui/material';



const theme = createTheme({
   typography: {
    fontFamily: [
      'Times', "Times New Roman",  'serif'
    ].join(','),
  },
  palette:{
    secondary: {
      main: colors.orange[500]
    }
  }
})
function App() {

  
  
  const [approvedUser, setApprovedUser] = useState("sdfsf");
  const [courseInUse, setCourseInUse] = useState(null);

  return (
    <div className='stam'>
      
        {/* <Router>
          <div className="App">
            <header className="App-header" >
              <ThemeProvider theme={theme}>
              <Routes>
                <Route exact path='/LogIn' element={<LogIn setApprovedUser={setApprovedUser} />} />
                <Route exact path='/UploadFiles' element={<MlAddFiles approvedUser={approvedUser}/>} />         
              </Routes>
              </ThemeProvider>
            </header>
          </div>
        </Router> */}
      
      <Router>
        <div className="App">
          <header className="App-header2">
          <ThemeProvider theme={theme}>
          <UserProvider>
            <Routes>
              <Route exact path='/LogIn' element={<LogIn setApprovedUser={setApprovedUser} />} />
              <Route exact path='/UploadFiles' element={<MlAddFiles approvedUser={approvedUser}/>} />
              <Route exact path='/FilesUploaded' element={<FileUploadScreen approvedUser={approvedUser}/>} />
                                       
              <Route exact path='/MASHAKLogIn' element={<MashakLogIn/>} />
              <Route exact path='/MASHAKCourses' element={<MashakCourses setCourseInUse={setCourseInUse}/>} />
              <Route exact path='/Course' element={<PeopleInCourse courseInUse={courseInUse} />} />            
            </Routes>
          </UserProvider>
          </ThemeProvider>
          </header>
        </div>
      </Router>
    </div>
  );
}

export default App;
