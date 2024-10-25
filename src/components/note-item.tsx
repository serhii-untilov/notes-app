import { useState } from "react";
import { Note } from "../types";
import Tiptap from "../editor/Tiptap";

type Props = {
    note: Note;
    update: (note: Note) => void;
    remove: (note: Note) => void;
}

export function NoteItem(props: Props) {
    const [note, setNote] = useState(props.note);

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote({ ...note, title: e.target.value });
        props.update({ ...note, title: e.target.value });
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote({ ...note, content: e.target.value });
        props.update({ ...note, content: e.target.value });
    }

    return <div className={[
        "flex border-solid border-2 rounded-lg w-full",
        note.title ? "border-gray-500" : "border-gray-300"
    ].join(' ')} >
        <div className="w-full m-2">
            <div className="w-full flex mb-2">
                <input
                    className="w-full font-bold"
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={note.title}
                    placeholder="Enter note title here"
                    onChange={onChangeTitle}
                />
                <button
                    className="text-red-500 flex-none w-6"
                    onClick={() => props.remove(note)}>
                    &#x2717;
                </button>
            </div>
            <hr className={["border-solid border-1 mb-2", note.title ? "border-gray-500" : "border-gray-300"].join(' ')} />
            <div className="w-full flex br-green-50 min-h-12">
                <Tiptap content={note.content} />
            </div>

        </div>


    </div >
}
