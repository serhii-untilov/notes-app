import { useEffect } from "react";
import { EmptyNoteList } from "./empty-note-list";
import { NoteItem } from "./note-item";
import { Note } from "../types";


type Props = {
    notes: Note[];
    update: (note: Note) => void;
    remove: (note: Note) => void;
}

export function NoteList({ notes, update, remove }: Props) {

    useEffect(() => {
        const log = () => {
            console.log("notes.length", notes.length);
        }
        log();
    }, [notes]);

    return (
        !notes.length ? <EmptyNoteList /> :
            <div className="note-list space-y-6 w-full">
                {notes.map(note => (
                    <NoteItem
                        key={note.id}
                        note={note}
                        update={update}
                        remove={remove}
                    />
                ))}
            </div>
    );
}
