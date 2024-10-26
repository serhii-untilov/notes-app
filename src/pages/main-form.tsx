import { Note } from "../types";
import { useNoteList } from "../hooks/useNoteList";
import { CreateNewNote } from "../components/create-new-note";
import { NoteList } from "../components/note-list";

type Props = {
    data: Note[];
}

export function MainForm({ data }: Props) {
    const { notes, add, update, remove } = useNoteList(data);

    return <>
        <div className='w-full h-5/6 text-slate-700'>
            <div className="flex justify-end mb-4">
                <CreateNewNote add={add} />
            </div>
            <div className="flex justify-center h-full w-full">
                <NoteList {...{ notes, update, remove }} />
            </div>
        </div>
    </>
}
