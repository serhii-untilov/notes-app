import { useState } from "react";
import { Note } from "../types";

type Props = {
    note: Note;
    remove: any;
}

export function NoteItem(props: Props) {
    const [note, setNote] = useState(props.note);

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote({ ...note, title: e.target.value });
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote({ ...note, content: e.target.value });
    }

    return <div className={[
        "flex border-solid border-2 rounded-lg w-full",
        note.title ? "border-gray-500" : "border-gray-300"
    ].join(' ')} >
        <div className="w-full">
            <div className="w-full flex">
                <input
                    className="m-2 w-full font-bold"
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={note.title}
                    placeholder="Enter note title here"
                    onChange={onChangeTitle}
                />
                <button
                    className="mr-2 text-red-500 flex-none"
                    onClick={() => props.remove(note.id)}>
                    &#x2717;
                </button>
            </div>
            <hr className={["border-solid border-1", note.title ? "border-gray-500" : "border-gray-300"].join(' ')} />
            <div className="w-full flex br-green-50">
                <textarea
                    className="w-full m-2"
                    id="body"
                    name="body"
                    required
                    value={note.content}
                    placeholder="Write something..."
                    onChange={onChangeContent}
                />
            </div>
        </div>


    </div >
}
