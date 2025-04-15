import { Feedback } from "@/app/types/matchQuiz";

type Props = {
  feedback: Feedback | null;
  onNext: () => void;
};

const FeedbackModal = ({ feedback, onNext }: Props) => {
  if (!feedback) return null;

  return (
    <div aria-hidden="true" className="jp-text fixed min-w-sm container inset-0 flex items-center justify-center z-50">
      <div className="text-center container bg-zinc-800 border-2 border-white rounded-lg shadow-lg text-white p-8 flex flex-col gap-4">
        <p className="text-3xl sm:text-5xl font-bold">{feedback.status}</p>
        <p className="text-3xl sm:text-5xl p-6">{feedback.selected}</p>
        <p className="text-md sm:text-lg">{feedback.message}</p>
        <button onClick={onNext} className="mt-4 cursor-pointer p-6 text-1xl sm:text-3xl rounded-lg bg-sky-900 hover:bg-sky-800">
          Next
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
