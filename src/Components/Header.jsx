import React from "react";

const Header = () => {
    return <header className="flex items-center w-full justify-between mb-8">
        <img className="h-36 w-36" src='logo512.png' alt='React logo' />
        <h1 className="text-[4rem] max-md:text-[2rem]">THE REACT QUIZ</h1>
    </header>;
};

export default Header;
