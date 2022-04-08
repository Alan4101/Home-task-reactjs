import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Members from './pages/Members';
import Teams from './pages/Teams';
import Todo from './pages/Todo';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Members/>} />
          <Route path='teams' element={<Teams/>} />
          <Route path='todo' element={<Todo/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
