import { useState, useCallback, useEffect, useRef} from "react"


function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  // define useRef

  const passwordRef = useRef(null)

  const passwordGenerate = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (char) str += "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


    
  } , [length, numAllow, char, setPassword])



  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.currrent?.select();
    passwordRef.current?.setSelectionRange(0, 90)
    window.navigator.clipboard.writeText(password)  },[password])

  useEffect(() => {passwordGenerate()}, [length, numAllow, char, passwordGenerate])
 
  return (
    <>
          <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-gray-900 bg-white"> Password Generator
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly ref={passwordRef}/>

      <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>

    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={8}
        max={90}
        value={length}
        className="cursor-pointer"
        onChange={(e) => {setLength(e.target.value)}}
         />
         <label >Length: {length}</label>
      </div>


      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={numAllow} id="numberInput" onChange={()=> {
          setNumAllow((prev) => !prev);
        }} />
        <label htmlFor="numberInput">Numbers</label>

        
      </div>
      
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={numAllow} id="numberInput" onChange={()=> {
          setChar((prev) => !prev);
        }} />
        <label htmlFor="characterInput">Character</label>

        
      </div>
    </div>
     </div>

    </>
  )
}

export default App
