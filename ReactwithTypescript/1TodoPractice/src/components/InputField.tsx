import { useRef } from "react";


interface Props {
    input:string,
    setInput:React.Dispatch<React.SetStateAction<string>>,
    handleTodo: (e:React.FormEvent) => void;
}

function InputField({input, setInput, handleTodo} : Props) {

    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {handleTodo(e);
        inputRef.current?.blur();
    }}>
        <input type="text" className="input-box" 
        ref={inputRef}
        placeholder="Enter a task ..." 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button className="submit" type="submit">Go</button>
    </form>
  )
}

export default InputField
