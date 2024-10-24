import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// define your extension array
const extensions = [StarterKit]

type Props = {
    content: string;
}

const Tiptap = ({ content }: Props) => {
    const editor = useEditor({
        extensions,
        content,
    })

    return (
        <div className='tiptap-container'>
            <EditorContent editor={editor} />
            {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
            {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
        </div>
    )
}

export default Tiptap
