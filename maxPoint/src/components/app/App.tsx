/* eslint-disable prettier/prettier */
/* eslint-disable sort-imports */
import Header from "../Header/Header.tsx";
import Editor from "../Editor/Editor.tsx";
import { Presentation } from "../../types/types.ts";


type AppProps = {
  presentation: Presentation
}

function App({ presentation } : AppProps) {
  return (
    <>
      <Header />
      <Editor presentation={presentation}/>  
    </>
  );
}

export default App;
