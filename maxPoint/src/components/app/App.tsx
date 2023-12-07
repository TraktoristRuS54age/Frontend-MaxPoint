/* eslint-disable prettier/prettier */
/* eslint-disable sort-imports */
import Header from "../Header/Header.tsx";
import Editor from "../Editor/Editor.tsx";
import presentation from '../../types/example/maximum.ts'


function App() {
  return (
    <>
      <Header />
      <Editor presentation={presentation}/>  
    </>
  );
}

export default App;
