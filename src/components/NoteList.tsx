import React from 'react';
import { useNotes } from '../context/NotesContext';
import NoteItem from './NoteItem';

const NoteList: React.FC = () => {
  const { notes } = useNotes();

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
