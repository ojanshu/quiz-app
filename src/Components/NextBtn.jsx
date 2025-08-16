import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const NextBtn = () => {
    const { dispatch, answer, index, numQuestions } = useQuiz()

    if (answer === null) return

    if (index < numQuestions - 1)
        return <button className={`bg-[#495057] py-3 px-8 text-start rounded-full text-xl border-2 border-[#495057] cursor-pointer hover:bg-inherit hover:border-2 hover:border-l-neutral-500  hover:border-r-neutral-500 duration-200 ${answer !== null ? "block" : "hidden"}`} onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>

    if (index === numQuestions - 1)
        return <button className={`bg-[#495057] py-3 px-8 text-start rounded-full text-xl border-2 border-[#495057] cursor-pointer hover:bg-inherit hover:border-2 hover:border-l-neutral-500  hover:border-r-neutral-500 duration-200 ${answer !== null ? "block" : "hidden"}`} onClick={() => dispatch({ type: "finish" })}>Finish</button>
};

export default NextBtn;
