import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/feedbackForm';
import FeedbackList from './components/feedbackList';
import './App.css';


interface Feedback {
  id: number;
  name: string;
  feedback: string;
}

const App: React.FC =() => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [disabledBtn, setdisabledBtn] = useState(false)

  useEffect(() => {
    const worker = new Worker(new URL('./worker/feedbackWorker', import.meta.url));

    worker.onmessage = (event) => {
      setFeedbacks(event.data);
    };

    worker.postMessage('fetchFeedbacks');

    return () => {
      worker.terminate();
    };
  }, []);

  const handleFormSubmit = async (name: string, feedback: string) => {
    try {
      const response = await fetch('http://localhost:8000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, feedback }),
      });
      const newFeedback = await response.json();
      setFeedbacks([...feedbacks, newFeedback]);
      setdisabledBtn(true)
      setTimeout(() => {
        setdisabledBtn(false);
      }, 10000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="App">
          <FeedbackForm onSubmit={handleFormSubmit} disabledBtn={disabledBtn} />
          <FeedbackList feedbacks={feedbacks} />
        </div>
  );
}

export default App;
