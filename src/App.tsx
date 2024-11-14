import './App.css';
import SearchForm from './Containers/SearchForm/SearchForm.tsx';
import Toolbar from './Components/Toolbar/Toolbar.tsx';
import { Route, Routes } from 'react-router-dom';
import Show from './Containers/Show/Show.tsx';
import Home from './Containers/Home/Home.tsx';

const App = () => {
  return <>
    <Toolbar/>
    <div className="container m-5 ">
      <SearchForm/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/shows/:showId" element={<Show/>}/>
        <Route path="*" element={<h2 className="my-5 text-center">Page not found</h2>}/>
      </Routes>
    </div>
  </>;
};

export default App;