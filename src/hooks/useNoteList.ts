import { Note } from '../types';
import { useState } from 'react';

export function useNoteList() {
    const [notes, setNotes] = useState<Note[]>([
        { id: 1, title: 'The First note', content: 'Pariatur est laborum enim nulla.' },
        {
            id: 2,
            title: 'The Second note',
            content:
                'Est commodo fugiat veniam nulla. Ipsum aute nulla aliquip eiusmod quis aliquip sit mollit commodo laborum anim aute quis ex. Deserunt eiusmod veniam irure fugiat aute laboris enim reprehenderit. Sint laborum ut occaecat dolor fugiat laborum ipsum dolore anim anim nulla sunt.',
        },
    ]);

    function add(note?: Note) {
        setNotes([...notes, note ?? { id: Date.now(), title: '', content: '' }]);
    }

    function remove(id: number) {
        setNotes(notes.filter((note) => note.id !== id));
    }

    notes.sort((a, b) => b.id - a.id);

    return { notes, add, remove };
}
