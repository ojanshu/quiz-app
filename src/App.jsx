import Header from "./Components/header";
import Progress from "./Components/Progress";
import Question from "./Components/Question";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import StartScreen from "./Components/StartScreen";
import FinishScreen from "./Components/FinishScreen"
import NextBtn from "./Components/NextBtn";
import Timer from "./Components/Timer";
import { useQuiz } from "./contexts/QuizContext";


const App = () => {
  const { status } = useQuiz()

  return <div className="w-[48vw] m-auto mt-7 mb-7 flex flex-col items-center justify-center" >
    <Header />
    {status === "loading" && <Loader />}
    {status === "error" && <Error />}
    {status === "ready" && <StartScreen />}

    {status === "active" &&
      <div className="flex flex-col gap-4 w-[75%] max-md:w-[95vh]">
        <Progress />
        <Question />
        <Footer className="flex justify-between mt-4">
          <Timer />

          <NextBtn />
        </Footer>
      </div>
    }
    {status === "finished" && <FinishScreen />}
  </div>;
};

export default App;