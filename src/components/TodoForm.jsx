import { useState } from "react";

 const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    };

    return (
        <div className="todo-form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Digite o título"
                    onChange={(e) => setValue(e.target.value)}
                />
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione a categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default TodoForm