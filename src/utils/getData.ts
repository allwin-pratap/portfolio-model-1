import { promises as fs } from 'fs';

export const getData = async () => {
    const filePath = process.cwd() + '/src/utils/json/home/en.json';

    const file = await fs.readFile(filePath, 'utf8');

    return JSON.parse(file);
}