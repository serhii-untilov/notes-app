import { useEffect, useRef, useState } from 'react';

export function useLoadNoteList() {
    const [data, setData] = useState({
        isLoading: true,
        data: [],
        isError: false,
        error: null,
    });
    const isLoaded = useRef(false);

    const fetchData = async () => {
        try {
            const result = await window.electronAPI.loadNotes();
            setData({ data: result, isLoading: false, isError: false, error: null });
        } catch (error) {
            setData({ data: [], isLoading: false, isError: true, error });
        }
    };

    useEffect(() => {
        if (isLoaded.current) return;
        isLoaded.current = true;
        fetchData();
    }, []);

    return data;
}
