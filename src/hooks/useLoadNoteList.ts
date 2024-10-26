import { useEffect, useRef, useState } from 'react';
import { Note } from '../types';

export function useLoadNoteList() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Note[] | null>(null);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState();
    const isLoaded = useRef(false);

    useEffect(() => {
        const loadNotes = async () => {
            setIsLoading(true);
            try {
                const notes = await window.electronAPI.loadNotes();
                setData(notes);
                setIsLoading(false);
                setIsError(false);
                setError(null);
            } catch (error) {
                setIsError(true);
                setError(error);
            }
        };
        if (!isLoaded.current) {
            isLoaded.current = true;
            loadNotes();
        }
    }, []);

    return { data, isLoading, isError, error };
}
