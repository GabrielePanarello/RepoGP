import { Characters } from "./characters";

export class ListService {
    getCharactersList(): Characters[] {
        let items: Characters[] = [];
        items.push({ type: "DC", name: "Flash", age: 20 });
        items.push({ type: "DC", name: "Arrow", age: 21 });
        return items;
    }
}