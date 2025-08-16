import { useQuiz } from "../contexts/QuizContext";

const Options = () => {
    const { questions, answer, dispatch, index } = useQuiz();
    const question = questions[index]

    const hasAnswered = answer !== null;

    return (
        <div className="flex flex-col gap-4 justify-center font-mono">
            {question.options.map((option, index) => {
                const isCorrect = hasAnswered && index === question.correctOption;
                const isWrong = hasAnswered && index !== question.correctOption;
                const isSelected = index === answer;

                return (
                    <button
                        key={option}
                        disabled={hasAnswered}
                        onClick={() => dispatch({ type: "newAnswer", payload: index })}
                        className={`
              w-full text-left text-xl py-3 px-6 rounded-full border-2 font-mono transition-all duration-300
              ${hasAnswered ? "cursor-not-allowed" : "cursor-pointer"}
              ${!hasAnswered ? "hover:translate-x-3 hover:bg-[#343a40]" : ""}
              ${isSelected ? "translate-x-5" : ""}
              ${isCorrect ? "bg-[#1098ad] border-[#1098ad] text-white" : ""}
              ${isWrong ? "bg-[#ffa94d] border-[#ffa94d] text-[#343a40]" : ""}
              ${!hasAnswered ? "bg-[#495057] border-[#495057] text-white" : ""}
            `}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

export default Options;
