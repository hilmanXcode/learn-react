import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import Introduction from "./introduction";

function HomePages(){

    const navigate = useNavigate();

    const [getProfileVal, setProfileVal] = useState("");
    const [pacarSaya, setPacarSaya] = useState(0);
    const [namaPacar, setNamaPacar] = useState("");

    const changeProfile = () => {
        const inputval = document.querySelector("#name").value;
        setProfileVal(inputval);
    }

    // when web is load for the first time
    useEffect(() => {
        console.log("Web Ke Load");
    }, []);

    // when data is change
    useEffect(() => {
        if(pacarSaya === 1){
            setNamaPacar("JODI")
        } else {
            setNamaPacar("Uhuy")
        }
    }, [pacarSaya]);

    return(
        <>
            <h5>Nama pacar : {namaPacar}</h5>
            <h1>Saya memiliki : {pacarSaya} pacar</h1>
            <button onClick={() => setPacarSaya((prev) => prev + 1)}>tambah pacar</button>
            <button onClick={() => setPacarSaya((prev) => prev - 1)}>kurangi pacar</button>



            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Profile profileVal={getProfileVal}/>
            <Introduction name="Hilman" />
            <Introduction name="Jajang" />
            <input id="name" />
            <button onClick={() => changeProfile()}>Ubah Profile</button>
            <br/>
            <button onClick={() => navigate('/about')}>About</button>
        </>
    );
}

export default HomePages;