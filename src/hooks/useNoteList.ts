import { useEffect, useState } from 'react';
import { Note } from '../types';

const mock = [
    { id: 1, title: 'The First note', content: 'Pariatur est laborum enim nulla.' },
    {
        id: 2,
        title: 'The Second note',
        content:
            'Est commodo fugiat veniam nulla. Ipsum aute nulla aliquip eiusmod quis aliquip sit mollit commodo laborum anim aute quis ex. Deserunt eiusmod veniam irure fugiat aute laboris enim reprehenderit. Sint laborum ut occaecat dolor fugiat laborum ipsum dolore anim anim nulla sunt.',
    },
];

export function useNoteList() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const load = async () => {
            try {
                setNotes(await window.electronAPI.loadNotes());
                console.log('notes loaded');
            } catch (e) {
                console.log(e);
            }
        };
        load();
    }, []);

    function add(note?: Note) {
        setNotes(saveNotes([...notes, note ?? { id: Date.now(), title: '', content: '' }]));
    }

    function update(note: Note) {
        const newNotes = [...notes];
        const index = newNotes.findIndex((o) => o.id === note.id);
        if (index >= 0) {
            newNotes[index] = note;
            setNotes(saveNotes(newNotes));
        }
    }

    function remove(note: Note) {
        setNotes(saveNotes(notes.filter((o) => o.id !== note.id)));
    }

    const saveNotes = (notes: Note[]) => {
        // ipcRenderer.send('save-notes', notes);
        window.electronAPI.saveNotes(notes);
        return notes;
    };

    notes.sort((a, b) => b.id - a.id);

    return { notes, add, update, remove };
}
