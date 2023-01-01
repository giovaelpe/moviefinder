import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Features/About';
import { Acountpage } from './Features/Acountpage';
import { Loginform } from './Loginform/Loginform';
import { Movielist } from './Movielist/Movielist';
import { Moviepage } from './Moviepage/moviepage';
import { Searchbar } from './Searchbar/Searchbar';
import Searchresults from './Searchresults/Searchresults';

function App() {
  const user = useSelector(state => state.user);
  const list = useSelector(state => state.list);
  return (
    <div className="App">
      <header>
        <nav>
          <div>
            <NavLink to="/" className="nav-links" style={({ isActive }) => isActive ? { backgroundColor: "black", color: "white" } : undefined}>
              <span className='nav-texts'>Home</span>
              <span className="material-symbols-outlined">
                home
              </span>
            </NavLink>
            <NavLink to="/milista" className="nav-links" style={({ isActive }) => isActive ? { backgroundColor: "black", color: "white" } : undefined}>
              <span className='nav-texts'>My List {list.length !== 0 && list.length}</span>
              <span className="material-symbols-outlined">
                list
              </span>
            </NavLink>
            <NavLink to="/about" className="nav-links" style={({ isActive }) => isActive ? { backgroundColor: "black", color: "white" } : undefined}>
              <span className='nav-texts'>About</span>
              <span className="material-symbols-outlined">
                info
              </span>
            </NavLink>
          </div>
          <NavLink to="/micuenta" className="nav-links" style={({ isActive }) => isActive ? { backgroundColor: "black", color: "white" } : undefined}>
            <span className='nav-texts'>{user.logged ? user.username : "Log in"}</span>
            <span className="material-symbols-outlined">
              account_circle
            </span>
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <div>
              <h1>
                MovieFinder
              </h1>
              <section className='searc-section'>
                <Searchbar />
              </section>
              <section className='result-section'>
                <Searchresults />
              </section>
            </div>
          } />

          <Route path="/moviepage" element={
            <Moviepage />
          } />

          <Route path='/login' element={
            <Loginform />
          } />
          <Route path='/micuenta' element={
            <Acountpage />
          } />
          <Route path='/milista' element={
            <Movielist />
          } />

          <Route path='/about' element={
            <About />
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
