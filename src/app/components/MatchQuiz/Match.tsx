'use client'
import { useMatchQuiz } from "@/app/hooks/useMatchQuiz";
import QuizCard from "./QuizCard";
import FeedbackModal from "./FeedbackModal";

const Match = () => {
  const { quiz, modalVisible, feedback, checkAnswer, nextQuiz } = useMatchQuiz();

  if (!quiz) return <div>Loading...</div>;

  return (
    <>
      <div className={`${modalVisible ? "blur" : ""} min-w-xs sm:min-w-xl container flex flex-col gap-4`}>
        <p className="mt-4 p-8 text-center jp-text text-2xl sm:text-3xl rounded-lg bg-sky-900 text-white">
          {quiz.answer.reading}
        </p>
        <p className="p-6 text-center">Choose the correct kanji for the word above</p>
        <QuizCard options={quiz.options} onSelect={checkAnswer} />
      </div>
      {modalVisible && <FeedbackModal feedback={feedback} onNext={nextQuiz} />}
    </>
  );
};

export default Match;
