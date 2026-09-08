import Header from "./header";
import { Footer } from "./component/footer";
import {  About, Contact} from "./Info";

function App() {
  return(
    <div style={{ padding: "20px" , fontFamily: "Arial"}}>
      <h1>Import and Export Componets Example</h1>

      <Header />
      <About />
      <Contact />
      <Footer />
      </div>
  );            
  
}

export default App;