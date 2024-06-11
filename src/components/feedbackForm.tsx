import React, { useState } from 'react';

interface FeedbackFormProps {
    onSubmit: (name: string, feedback: string) => void;
    disabledBtn: boolean;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit, disabledBtn }) => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, feedback);
        setName('');
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit} className="formContainer">
            <h1> Management system </h1>
            <div className='formCard'>
                <div className='formSection'>
                    <label>Name:</label>
                    <input
                        className='input'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='formSection'>
                    <label>Feedback:</label>
                    <textarea
                        className='input'
                        style={{ height: '80px' }}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                </div>
                <button className='btnsubmit' disabled={disabledBtn} type="submit">Submit</button>
            </div>
        </form>
    );
};

export default FeedbackForm;
