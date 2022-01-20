import { useState } from 'react';
function Question(props) {
    const {item} = props;
    const [reveal, setReveal] = useState(false);
    const handleClick = () => {
        setReveal(prev => !prev);
    }

    return (
        <>
            {item &&
                <div className='card'>
                    <h2>Category: {item.category.title}</h2>
                    <h2>Points: {item.value}</h2>
                    <h2>{reveal ? 'Answer: ' + item.answer : 'Question: ' + item.question}</h2>
                    <button onClick={handleClick}>Click to Reveal {reveal ? 'Question' : 'Answer'}</button>
                </div>
            }
        </>
    );
}

export default Question;