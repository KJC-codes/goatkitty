import { useEffect, useState } from "react";
import { Quiz, Feedback } from "@/app/types/matchQuiz";
import DICTIONARY from "@/app/lib/constants/DICTIONARY";
import { shuffleArray } from "@/app/lib/helpers/shuffleArray";

export function useMatchQuiz() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const generateQuiz = () => {
    const entries = DICTIONARY.filter(entry => entry.keb && entry.keb.length >= 2);
    const baseKanji = entries[Math.floor(Math.random() * entries.length)].keb[0];
    const subset = shuffleArray(entries.filter(entry => entry.keb[0] === baseKanji)).slice(0, 4);
    setQuiz({ options: subset, answer: subset[Math.floor(Math.random() * subset.length)] });
  };

  const checkAnswer = (selectedIndex: number) => {
    if (!quiz) return;
    const selected = quiz.options[selectedIndex];
    const isCorrect = selected.keb === quiz.answer.keb;
    setFeedback({
      status: isCorrect ? "Correct!" : "Sorry!",
      selected: selected.keb,
      message: (<span>{selected.reading}<br />{selected.meaning}</span>)
    });
    setModalVisible(true);
  };

  const nextQuiz = () => {
    setFeedback(null);
    generateQuiz();
    setModalVisible(false);
  };

  useEffect(() => {
    generateQuiz();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", modalVisible);
    return () => document.body.classList.remove("overflow-hidden");
  }, [modalVisible]);

  return { quiz, modalVisible, feedback, checkAnswer, nextQuiz };
}
