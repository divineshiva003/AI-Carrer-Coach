'use client'; 

import { useState } from "react";
import questions from "../data/question";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelect = (qid, option) => {
    setSelectedAnswers(prev => ({ ...prev, [qid]: option }));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {questions.map((q) => {
        const selected = selectedAnswers[q.id];
        const isCorrect = selected === q.answer;
        const ans=q.answer;

        return (
          <div key={q.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-3">{q.id}.  {q.question}</h2>
            <ul className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = selected === opt;
                const wrongAnswer = isSelected && !isCorrect;

                return (
                  <li
                    key={i}
                    onClick={() => handleSelect(q.id, opt)}
                    className={`cursor-pointer px-4 py-2 rounded border transition
                      ${isSelected ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-muted'}
                    `}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>

            {selected && (
              <p className="mt-2 bg-green-300">
                {isCorrect ? "✅ Correct!" : ans}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
