import React, { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

const Timer = () => {
    const { dispatch, secondRemaining } = useQuiz()

    const mins = Math.floor(secondRemaining / 60);
    const seconds = Math.floor(secondRemaining % 60);

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: "tick" });
        }, 1000)

        return () => clearInterval(id)
    }, [dispatch])


    return <div className="flex items-center justify-center border-[1px] py-3 px-7 rounded-full border-l-neutral-500  border-r-neutral-500">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
    </div>;
};

export default Timer;