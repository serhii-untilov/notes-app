import { useEffect } from "react";
import { EmptyNoteList } from "./empty-note-list";
import { NoteItem } from "./note-item";
import { Note } from "../types";


type Props = {
    notes: Note[];
    remove: any;
}

export function NoteList({ notes, remove }: Props) {

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
                        remove={remove}
                    />
                ))}
            </div>
    );
}
