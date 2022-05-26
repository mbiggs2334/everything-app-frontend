import React, { useState } from 'react';

//Components
import Header from './content/header/Header';
import Routes from './content/main/ParentRoutes';
import Footer from './content/footer/Footer';

//Funtions & Classes & Helpers
import userContext from './UserContext';

const App = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    return (
        <>
        <userContext.Provider value={{user, setUser}}>
            <Header />
            <Routes user={user}/>
            <Footer />
        </userContext.Provider>
        </>
    )
};

export default App;