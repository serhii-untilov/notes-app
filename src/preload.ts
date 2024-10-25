// See the Electron documentation for details on how to use preload scripts:

import { contextBridge, ipcRenderer } from 'electron';
import { Note } from './types';

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld('electronAPI', {
    saveNotes: (notes: Note[]) => ipcRenderer.send('save-notes', notes),
    loadNotes: () => ipcRenderer.invoke('load-notes'),
});
