import CardListUI from "./CardListUI";
import Onboard from "./Onboard";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Onboard/>} />
            <Route path="/products" element ={<CardListUI/>} />
        </Routes>
        </BrowserRouter>
        // <DataFetching3/>

    )

}
export default App;