export interface TodoIF {
    id: string;
    text: string;
    completed: boolean;
    date: Date;
}

export interface FormProps {
    todos: TodoIF[];
    setTodos: React.Dispatch<React.SetStateAction<TodoIF[]>>;
    newTodo: string;
    setNewTodo: React.Dispatch<React.SetStateAction<string>>;
}

export interface Task {
    id: string;
    taskName: string;
    date: string;
    markAsDone: boolean;
    description?: string;
}


export interface TableProps {
    todos: TodoIF[];
    setTodos: React.Dispatch<React.SetStateAction<TodoIF[]>>;
    filter: string;
}

export interface FilterProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    filteredCount: number;
}