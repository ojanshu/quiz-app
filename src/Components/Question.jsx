import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

const Question = () => {
    const { questions, index } = useQuiz()
    const question = questions[index]

    return <>
        <h4 className="text-[1.40rem]">{question.question}</h4>

        <Options />
    </>;
};

export default Question;
