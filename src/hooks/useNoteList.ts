import { useEffect, useRef, useState } from 'react';
import { Note } from '../types';

const SAVE_NOTES_TIMEOUT = 1000;

export function useNoteList(data: Note[]) {
    const [notes, setNotes] = useState<Note[]>(data);
    const dirty = useRef(false);

    useEffect(() => {
        if (dirty.current) {
            dirty.current = false;
            const timeoutId = setTimeout(
                () => window.electronAPI.saveNotes(notes),
                SAVE_NOTES_TIMEOUT,
            );
            return () => clearTimeout(timeoutId);
        }
    }, [notes]);

    function add(note?: Note) {
        dirty.current = true;
        setNotes([...notes, note ?? { id: Date.now(), title: '', content: '' }]);
    }

    function update(note: Note) {
        const newNotes = [...notes];
        const index = newNotes.findIndex((o) => o.id === note.id);
        if (index >= 0) {
            newNotes[index] = note;
            dirty.current = true;
            setNotes(newNotes);
        }
    }

    function remove(note: Note) {
        dirty.current = true;
        setNotes(notes.filter((o) => o.id !== note.id));
    }

    notes.sort((a, b) => b.id - a.id);

    return { notes, add, update, remove };
}
