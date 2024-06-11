import React, { useState, useEffect } from "react";

interface Feedback {
  id: number;
  name: string;
  feedback: string;
}

interface FeedbackListProps {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  const [visibleFeedbacks, setVisibleFeedbacks] = useState<Feedback[]>([]);
  const [userPerPage, setUserPerPage] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;
      if (scrollBottom >= documentHeight && !loading) {
        setLoading(true);
        setTimeout(() => {
          setUserPerPage((prevValue) => prevValue + 10);
          setLoading(false);
        }, 2000); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    setVisibleFeedbacks(feedbacks.slice(0, userPerPage));
  }, [feedbacks, userPerPage]);

  return (
    <div className="feedBackSection">
      {visibleFeedbacks.map((feedback) => (
        <div key={feedback.id} className="feedbackContainer">
          <div className="feedbackContainerFeedback">
            <h4>Feedback: </h4>
            <p>{feedback.feedback}</p>
            <div className="feedbackContainerName">
              <h3>Name: {feedback.name}</h3>
            </div>
          </div>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default FeedbackList;
