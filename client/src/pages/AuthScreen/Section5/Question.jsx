import { Plus, X } from "lucide-react";

export default function Question({ question: q, showAnswer, onShowAnswer }) {
  const { question, answer } = q;

  const isShowAnswer = showAnswer === question;

  return (
    <li
      onClick={() => onShowAnswer(question)}
      className="hover:cursor-pointer "
    >
      <div
        className={`p-5 bg-gray-700 flex items-center justify-between hover:bg-gray-800 `}
      >
        <span
          className={`text-2xl  ${
            isShowAnswer ? "font-bold underline underline-offset-8" : ""
          }`}
        >
          {question}
        </span>{" "}
        {isShowAnswer ? <X /> : <Plus />}
      </div>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isShowAnswer ? "opacity-100" : "opacity-0"
        }`}
      >
        {isShowAnswer && <p className="bg-gray-600   p-5 text-xl">{answer}</p>}
      </div>
    </li>
  );
}
