import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home(){

    const [name, setName] = useState("Shiyam");
    return (
        <div>
            <Navbar name={name}/>
            <h1>Home page</h1>
            <Footer />
        </div>
    )
}

export default Home;