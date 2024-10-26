import { useState } from "react";
import { Note } from "../types";
import Tiptap from "../editor/Tiptap";
import { NoteTitle } from "./note-title";

type Props = {
    note: Note;
    update: (note: Note) => void;
    remove: (note: Note) => void;
}

export function NoteItem(props: Props) {
    const [note, setNote] = useState(props.note);

    const onChangeTitle = (value: string) => {
        setNote({ ...note, title: value });
        props.update({ ...note, title: value });
    }

    const onChangeContent = (content: string) => {
        setNote({ ...note, content });
        props.update({ ...note, content });
    }

    return <div className={[
        "flex border-solid border-2 rounded-lg w-full",
        note.title ? "border-gray-500" : "border-gray-300"
    ].join(' ')} >
        <div className="w-full m-2">
            <div className="w-full flex mb-2">
                <NoteTitle title={note.title} onChange={onChangeTitle} />
                <button
                    className="text-red-500 flex-none w-6"
                    onClick={() => props.remove(note)}>
                    &#x2717;
                </button>
            </div>
            <hr className={["border-solid border-1 mb-2", note.title ? "border-gray-500" : "border-gray-300"].join(' ')} />
            <div className="w-full flex br-green-50 min-h-12">
                <Tiptap content={note.content} update={onChangeContent} />
            </div>

        </div>


    </div >
}
