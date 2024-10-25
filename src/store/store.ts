import { app } from 'electron';
import * as fs from 'fs/promises';
import * as path from 'path';
import { Note } from '../types';

const filename = 'notes';

export async function saveNotes(notes: Note[]): Promise<void> {
    try {
        // Get the userData directory path
        const userDataPath = app.getPath('userData');

        // Create the full file path (filename.json)
        const filePath = path.join(userDataPath, `${filename}.json`);

        // Convert the data object to a JSON string
        const jsonData = JSON.stringify(notes, null, 2);

        // Write the JSON string to the file asynchronously
        await fs.writeFile(filePath, jsonData, 'utf-8');

        // console.log(`JSON file saved successfully to ${filePath}`);
    } catch (error) {
        console.error('Error saving JSON file:', error);
    }
}

export async function loadNotes(): Promise<Note[] | null> {
    try {
        const userDataPath = app.getPath('userData');
        const filePath = path.join(userDataPath, `${filename}.json`);

        // Read the file asynchronously
        const fileContent = await fs.readFile(filePath, 'utf-8');

        // Parse the JSON content
        const json = JSON.parse(fileContent);
        return json;
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null; // Return null if there's an error
    }
}
