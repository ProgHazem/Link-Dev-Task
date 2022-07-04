import { useRef, useState } from "react";

const Form = ({addItem}) => {
   const [item, setItem] = useState();
   const inputRef = useRef();

    return (
        <form className="Form" autoComplete="off"  onSubmit={(e) => e.preventDefault()}>
            <input value={item} ref={inputRef} name="item" placeholder="Enter Item . . ." onChange={(e) => setItem(e.target.value) } />
            <button onClick={() => {
                addItem(item);
                setItem("")
            }} >Add</button>
        </form>
    );

}

export default Form;