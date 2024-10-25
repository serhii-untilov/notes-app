export interface IElectronAPI {
    loadNotes: () => Promise<Note[]>;
    saveNotes: (notes: Note[]) => Promise<void>;
}

declare global {
    interface Window {
        electronAPI: IElectronAPI;
    }
}
