import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';


const AddNote: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useNotes();

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      addNote(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default AddNote;
