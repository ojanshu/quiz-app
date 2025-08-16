import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Progress = () => {
    const { numQuestions, index, points, maxPossiblePoints } = useQuiz()

    return <div className="font-sans mb-6">
        <progress max={numQuestions} className="w-full" value={index}></progress>
        <div className="flex justify-between text-xl ">
            <p>
                Question <strong>{index}</strong> / {numQuestions}
            </p>

            <p>
                <strong>{points}</strong> / {maxPossiblePoints}
            </p>
        </div>
    </div>
};

export default Progress;