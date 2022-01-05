import React, { useState } from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import './App.css';

import SingInComponent from './component/SignIn/SingInComponent'
import ContainerEmployComponent from './component/ContainerEmployComponent/ContainerEmployComponent'
import WelcomeComponent from './component/welcome/WelcomeComponent'

const history = createMemoryHistory()
function App() {
  const [nameCompany, setNameCompany] = useState(null);

  const setCompany = (idCompany,nameCompany) => {
    sessionStorage.setItem('idCompany', idCompany);
    setNameCompany(nameCompany)
  }

  return (
    <div className="App">
      <BrowserRouter location={history.location} navigator={history}>
        <Routes>
          <Route path='/' element={<SingInComponent cbSetCompany={setCompany} />} />
          <Route path='/company' element={<WelcomeComponent nameCompany={nameCompany} />}/>
          <Route path='/company/employers' element={<ContainerEmployComponent  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
