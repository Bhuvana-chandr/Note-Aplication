
import React from 'react';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import { NotesProvider } from './context/NotesContext';
import './App.css';
import './index.css';

const App: React.FC = () => {
  return (
    <NotesProvider>
      <div className="app-container">
        <h1>Notes App</h1>
        <div className="search-and-add">
          <div className="search-bar">
            <input type="text" placeholder="Search Notes" />
            <button>Search</button>
          </div>
          <AddNote />
        </div>
        <NoteList />
      </div>
    </NotesProvider>
  );
};

export default App;
