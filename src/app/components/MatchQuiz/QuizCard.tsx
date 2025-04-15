import { QuizEntry } from "@/app/types/matchQuiz";

type Props = {
  options: QuizEntry[];
  onSelect: (index: number) => void;
};

const QuizCard = ({ options, onSelect }: Props) => (
  <ul className="grid grid-cols-2 gap-4">
    {options.map((entry, index) => (
      <li key={`${entry.keb}-${entry.meaning}`} className="flex">
        <button
          onClick={() => onSelect(index)}
          className="flex-grow jp-text p-4 sm:p-8 text-3xl sm:text-5xl cursor-pointer text-center rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white"
        >
          {entry.keb}
        </button>
      </li>
    ))}
  </ul>
);

export default QuizCard;
