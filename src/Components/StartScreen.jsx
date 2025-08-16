import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function StartScreen() {
    const { numQuestions, dispatch } = useQuiz()

    return (
        <div className="flex justify-center items-center flex-col gap-6 h-screen w-full">
            <h2 className="text-5xl font-extrabold">Welcome to the React Quiz!</h2>
            <h3 className="text-2xl">{numQuestions} question to test your React mastery</h3>
            <button
                className="bg-[#495057] py-3 px-8 text-start rounded-full text-xl border-2 border-[#495057] cursor-pointer hover:bg-inherit hover:border-2 hover:border-l-neutral-500  hover:border-r-neutral-500 duration-200"
                onClick={() => dispatch({ type: "start" })}>
                Let's start
            </button>
        </div>
    );
};
