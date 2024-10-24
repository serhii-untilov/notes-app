import { useNoteList } from "../hooks/useNoteList";
import { CreateNewNote } from "./create-new-note";
import { NoteList } from "./note-list";


export function MainSection() {
    const { notes, add, remove } = useNoteList();

    return <>
        <div className='w-full h-full'>
            <div className="flex justify-end mb-4">
                <CreateNewNote add={add} />
            </div>
            <div className="flex justify-center h-full w-full">
                <NoteList notes={notes} remove={remove} />
            </div>
        </div>
    </>
}
