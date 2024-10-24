type Props = {
    add: any;
}

export function CreateNewNote({ add }: Props) {
    return <button className="text-blue-500 font-bold" onClick={() => add()}>+ Create New Note</button>
}
