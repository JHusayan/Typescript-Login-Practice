import React from 'react';
import './App.css';
import { useState } from 'react';
import Login from './pages/login';
import Display from './pages/display';
import Create from './pages/create';
function App() {
  const [page, setPage] = useState(0)

  switch(page){
    case 0:
      return <Login setPage={setPage}/>
    case 1:
      return <Create setPage={setPage}/>
    case 2:
      return <Display setPage={setPage}/>
  }
  return (
    <>
    </>
  );
}

export default App;
