import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Note } from '../interfaces/Note';

interface NotesContextType {
  notes: Note[];
  addNote: (title: string, content: string) => void;
  editNote: (id: number, updatedTitle: string, updatedContent: string) => void;
  deleteNote: (id: number) => void;
  searchNotes: (query: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

interface NotesProviderProps {
  children: ReactNode;
}

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (title: string, content: string) => {
    const newNote: Note = { id: Date.now(), title, content };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const editNote = (id: number, updatedTitle: string, updatedContent: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: updatedTitle, content: updatedContent } : note
      )
    );
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const searchNotes = (query: string) => {
    setNotes((prevNotes) =>
      prevNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.content.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote, searchNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error('useNotes must be used within a NotesProvider');
  return context;
};
