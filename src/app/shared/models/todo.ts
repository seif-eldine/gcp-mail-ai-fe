
export interface Todo {
    id: string;
    title: string;
    state: 'checked' | 'pending';
    category: Category
}

export type State = 'done' | 'canceled' | 'pending';
export type Category = 'important' | 'average' | 'urgent' | 'futuristic'