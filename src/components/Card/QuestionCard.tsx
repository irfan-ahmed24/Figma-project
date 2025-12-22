import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

interface QuestionCardProps {
  onData: {
    question: string;
    answer: string;
  };
}

function QuestionCard(props: QuestionCardProps) {
    const [showAnswer, setShowAnswer] =useState(false);
    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    }
    const { onData } = props;
  return (
    <div className="p-3 my-3 FAQ-card">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="lh-sm h5-tag">{onData.question}</h5>
        <button onClick={handleShowAnswer} className="bg-transparent text-color border-0 p-0 m-0">
            <FaPlus className={`border ms-3 rounded-circle rounded-2 fs-3 p-1 ${showAnswer ? 'd-none' : ''}`} />
            <FaMinus className={`border ms-3 rounded-circle rounded-2 fs-3 p-1 ${showAnswer ? '' : 'd-none'}`} />
        </button>
      </div>
      <p className={`m-end-5 p2-tag text-start ${showAnswer ? '' : 'd-none'}`}>
        {onData.answer}
      </p>
    </div>
  );
}

export default QuestionCard;
