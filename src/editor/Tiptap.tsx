import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// define your extension array
const extensions = [StarterKit,
    Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Write something …',
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
    }),
]

type Props = {
    content: string;
    update: (content: string) => void;
}

const parse = (content: string) => {
    try {
        return JSON.parse(content);
    } catch (e) {
        console.log('Error parse content');
        return null;
    }
}

const Tiptap = ({ content, update }: Props) => {
    const editor = useEditor({
        extensions,
        content: parse(content),
    })

    editor.on('update', ({ editor }) => {
        // The content has changed.
        update(JSON.stringify(editor.getJSON()));
    })

    editor.on('transaction', ({ editor, transaction }) => {
        // The editor state has changed.
        console.log('transaction');
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
