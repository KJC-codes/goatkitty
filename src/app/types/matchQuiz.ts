export type QuizEntry = {
  keb: string;
  reading: string;
  meaning: string;
};

export type Quiz = {
  options: QuizEntry[];
  answer: QuizEntry;
};

export type Feedback = {
  status: string;
  selected: string;
  message: React.ReactNode;
};
  