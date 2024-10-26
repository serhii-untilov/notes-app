import { useEffect, useState } from 'react';
import { Note } from '../types';

const SAVE_NOTES_TIMEOUT = 3000;

export function useNoteList(data: Note[]) {
    const [notes, setNotes] = useState<Note[]>(data);

    useEffect(() => {
        const timeoutId = setTimeout(() => window.electronAPI.saveNotes(notes), SAVE_NOTES_TIMEOUT);
        return () => clearTimeout(timeoutId);
    }, [notes]);

    function add(note?: Note) {
        setNotes([...notes, note ?? { id: Date.now(), title: '', content: '' }]);
    }

    function update(note: Note) {
        const newNotes = [...notes];
        const index = newNotes.findIndex((o) => o.id === note.id);
        if (index >= 0) {
            newNotes[index] = note;
            setNotes(newNotes);
        }
    }

    function remove(note: Note) {
        setNotes(notes.filter((o) => o.id !== note.id));
    }

    notes.sort((a, b) => b.id - a.id);

    return { notes, add, update, remove };
}
