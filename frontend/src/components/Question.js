import React from 'react';
import { Radio, Input, Slider } from 'antd';

const Question = ({ question, options, onSelect, selected, type }) => {
  return (
    <div className="question">
      <h3>{question}</h3>
      {type === 'multiple-choice' ? (
        <Radio.Group
          className="radio-group"
          onChange={(e) => onSelect(e.target.value)}
          value={selected}
        >
          {options.map((option, index) => (
            <Radio key={index} value={index}>
              {option}
            </Radio>
          ))}
        </Radio.Group>
      ) : type === 'slider' ? (
        <Slider
          min={0}
          max={10}
          onChange={onSelect}
          value={typeof selected === 'number' ? selected : 0}
        />
      ) : (
        <Input.TextArea
          rows={4}
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          placeholder="Nhập câu trả lời của bạn..."
        />
      )}
    </div>
  );
};

export default Question; 