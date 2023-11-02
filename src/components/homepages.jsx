import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import Introduction from "./introduction";

function HomePages(){

    const navigate = useNavigate();
    const linkRef = useRef(null);

    const [getProfileVal, setProfileVal] = useState("");
    const [pacarSaya, setPacarSaya] = useState(0);
    const [namaPacar, setNamaPacar] = useState("");

    const changeProfile = () => {
        const inputval = document.querySelector("#name").value;
        setProfileVal(inputval);
    }

    const goto = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    // when web is load for the first time
    useEffect(() => {
        console.log("Web Ke Load");
    }, []);

    // when data is change
    useEffect(() => {
        if(pacarSaya === 1){
            setNamaPacar("IKAN")
        } else {
            setNamaPacar("ZAI")
        }
    }, [pacarSaya]);

    return(
        <>
            <button onClick={() => goto(linkRef.current)}>To LinkREF</button>
            <h5>Nama pacar : {namaPacar}</h5>
            <h1>Saya memiliki : {pacarSaya} pacar</h1>
            <button onClick={() => setPacarSaya((prev) => prev + 1)}>tambah pacar</button>
            <button onClick={() => setPacarSaya((prev) => prev - 1)}>kurangi pacar</button>
            <Profile profileVal={getProfileVal}/>
            <Introduction name="Hilman" />
            <Introduction name="Jajang" />
            <input id="name" />
            <button onClick={() => changeProfile()}>Ubah Profile</button>
            <br/>
            <button onClick={() => navigate('/about')}>About</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus autem quo! Repellendus quia nisi ratione neque aliquam quisquam dolorum rem vel minima eligendi reiciendis ipsam iure assumenda ab inventore rerum, animi doloremque tenetur consequuntur error omnis ut! Tenetur, deleniti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus autem quo! Repellendus quia nisi ratione neque aliquam quisquam dolorum rem vel minima eligendi reiciendis ipsam iure assumenda ab inventore rerum, animi doloremque tenetur consequuntur error omnis ut! Tenetur, deleniti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus autem quo! Repellendus quia nisi ratione neque aliquam quisquam dolorum rem vel minima eligendi reiciendis ipsam iure assumenda ab inventore rerum, animi doloremque tenetur consequuntur error omnis ut! Tenetur, deleniti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus autem quo! Repellendus quia nisi ratione neque aliquam quisquam dolorum rem vel minima eligendi reiciendis ipsam iure assumenda ab inventore rerum, animi doloremque tenetur consequuntur error omnis ut! Tenetur, deleniti!</p>
            <a href="#" className="kontol" ref={linkRef}>
                LinkREF
            </a>
        </>
    );
}

export default HomePages;