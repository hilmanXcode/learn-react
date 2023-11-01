import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import Introduction from "./introduction";

function HomePages(){

    const navigate = useNavigate();

    const [getProfileVal, setProfileVal] = useState("");

    const changeProfile = () => {
        setProfileVal("dadan");
    }

    return(
        <>
            <Profile profileVal={getProfileVal}/>
            <Introduction name="Hilman" />
            <Introduction name="Jajang" />
            <button onClick={() => changeProfile()}>Ubah Profile</button>
            <button onClick={() => navigate('/about')}>About</button>
        </>
    );
}

export default HomePages;