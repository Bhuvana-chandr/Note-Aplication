import React from 'react';
import { Note } from '../interfaces/Note';
import { useNotes } from '../context/NotesContext';

const NoteItem: React.FC<{ note: Note }> = ({ note }) => {
  const { deleteNote } = useNotes();

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
