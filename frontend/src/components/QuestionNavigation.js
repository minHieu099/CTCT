import React from 'react';
import { Button } from 'antd';

const QuestionNavigation = ({ totalQuestions, current, onNavigate }) => {
  return (
    <div className="question-nav">
      {[...Array(totalQuestions)].map((_, i) => (
        <Button
          key={i}
          className={i === current ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate(i)}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
};

export default QuestionNavigation; 