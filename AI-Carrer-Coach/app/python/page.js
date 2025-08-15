'use client'; 

import { useState } from "react";
import questions from "../data/python";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answered, setAnswered] = useState({}); 

  const handleSelect = (qid, option) => {
    if (answered[qid]) return; 
    setSelectedAnswers(prev => ({ ...prev, [qid]: option }));
    setAnswered((prev) => ({ ...prev, [qid]: true }));
  };
var score=0;
  return (<>

 
    <div className="container mx-auto py-15">
    <div className="flex flex-col space-y-2">
      <Link href="/practice">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Practice
          </Button>
        </Link>
      {questions.map((q) => {
        const selected = selectedAnswers[q.id];
        const isCorrect = selected === q.answer;
        const ans=q.answer;
        const locked = answered[q.id];
        
        return (
          <div key={q.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-3">{q.id}.  {q.question}</h2>
            <ul className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = selected === opt;
                const wrongAnswer = isSelected && !isCorrect;
                  const showX = locked && isSelected && !isCorrect;
                const showCheck = locked && isSelected && isCorrect;


                return (
                  <li
                    key={i}
                    onClick={() => handleSelect(q.id, opt)}
                    className={`cursor-pointer px-4 py-2 rounded border transition
                       ${locked ? 'pointer-events-none' : ''}
                     ${isSelected ? (isCorrect ? <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0"/>  : <XCircle className="h-5 w-5 text-red-500 flex-shrink-0"/>) : 'bg-muted '}
                    `}
                  ><span className="flex relative">
                      {opt}
                    {showX && <XCircle className="text-red-500 w-5 h-5 flex-shrink-0 my-1 absolute right-2 " />}
                    {showCheck && <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0 my-1 absolute right-2 " />}
                  </span>
                    
                  </li>
                );
              })}
            </ul>

            {selected && (
              <p className="mt-2 bg-green-300 ">
                {isCorrect ? "✅ Correct!" : ans }
              </p>
            )}
            {
              isCorrect&&(
                <h1>+1 for Correct <span className="hidden">{score=score+1}</span></h1>
              )
            }
          </div>
        );
      })}
    </div>
    </div>
     <h1 className="text-2xl flex justify-center align-center">You scored = {score}</h1>
    </>
  );
}
