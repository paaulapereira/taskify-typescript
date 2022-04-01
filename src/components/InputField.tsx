import { useRef } from "react";
import "./styles.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
;}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="input" onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur(); //hacemos eso para el bug del focus con enter
            }}>
            <input type="input" placeholder="Enter a task" ref={inputRef} className="input__box" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button className="input_submit" type="submit">Go</button>
        </form>
    )
}

export default InputField;