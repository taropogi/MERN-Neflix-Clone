import { Plus, X } from "lucide-react";

export default function Question({ question: q, showAnswer, onShowAnswer }) {
  const { question, answer } = q;

  const isShowAnswer = showAnswer === question;

  return (
    <li onClick={() => onShowAnswer(question)} className="hover:cursor-pointer">
      <div className="p-5 my-2 bg-gray-700 flex items-center justify-between">
        <span className=" text-2xl ">{question}</span>{" "}
        {isShowAnswer ? <X /> : <Plus />}
      </div>
      {isShowAnswer && <p className="bg-gray-800 mt-1 p-5 text-xl">{answer}</p>}
    </li>
  );
}
