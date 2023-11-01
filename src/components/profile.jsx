function Profile({profileVal}){
    return (
        <>
            <h1>Profile Section</h1>
            <p>Halo saya {!profileVal ? "Hilman" : profileVal}</p>
        </>
    );
};

export default Profile;