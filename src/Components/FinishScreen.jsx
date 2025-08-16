import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const FinishScreen = () => {
    const { points, highScore, maxPossiblePoints, dispatch } = useQuiz()

    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
    if (percentage === 100) emoji = "😎";
    if (percentage >= 80 && percentage < 100) emoji = "😍";
    if (percentage >= 50 && percentage < 80) emoji = "😃";
    if (percentage >= 0 && percentage < 50) emoji = "😏";
    if (percentage === 0) emoji = "😪";

    return <div>
        <div className="flex flex-col items-center gap-4">
            <div className="font-medium rounded-full py-4 px-6 w-[70vw] flex justify-center items-center text-xl font-sans bg-[#1098ad]">
                <p>You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)</p>
            </div>
            <p className="font-medium text-xl">(Highscore: {highScore} points)</p>

            <button className="mt-6 bg-[#495057] py-3 px-8 text-start rounded-full text-xl border-2 border-[#495057] cursor-pointer hover:bg-inherit hover:border-2 hover:border-l-neutral-500  hover:border-r-neutral-500 duration-200" onClick={() => dispatch({ type: "reset" })}>Try Again</button>
        </div>
    </div>;
};

export default FinishScreen;
