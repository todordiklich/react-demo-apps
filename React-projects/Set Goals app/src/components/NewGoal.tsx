import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalInputRef = useRef<HTMLInputElement>(null);
  const summaryInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalInputRef.current!.value;
    const enteredSummary = summaryInputRef.current!.value;

    if (enteredGoal === '' || enteredSummary === '') {
      return;
    }

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" ref={goalInputRef} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summaryInputRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
