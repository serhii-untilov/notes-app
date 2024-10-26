type Props = {
    title: string;
    onChange: (value: string) => void;
}

export function NoteTitle({ title, onChange }: Props) {
    return (
        <input
            className="w-full font-bold text-xl"
            type="text"
            id="title"
            name="title"
            required
            value={title}
            placeholder="Enter note title here"
            onChange={(e) => onChange(e.target.value)}
        />
    )
}
