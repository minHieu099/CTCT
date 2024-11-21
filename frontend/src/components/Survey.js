import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import Question from './Question';
import './Survey.css';

const { Header, Content, Sider } = Layout;

const Survey = () => {
  const [answers, setAnswers] = useState(Array(20).fill(null));

  const questions = [
    {
      question: 'Câu 1: Năm 2013, đồng chí Nguyễn Phú Trọng...',
      options: ['A. 40 năm', 'B. 50 năm', 'C. 60 năm', 'D. 70 năm'],
      type: 'multiple-choice',
    },
    {
      question: 'Câu 2: Phương án nào đúng...',
      options: [
        'A. Văn hóa là động lực...',
        'B. Văn hóa là một lĩnh vực...',
        'C. Văn hóa là mục tiêu...',
        'D. Văn hóa vừa là mục tiêu...',
      ],
      type: 'multiple-choice',
    },
    {
      question: 'Câu 3: Viết một đoạn văn ngắn về văn hóa Việt Nam.',
      type: 'open-ended',
    },
    {
      question: 'Câu 4: Đánh giá mức độ hài lòng của bạn từ 0 đến 10.',
      type: 'slider',
    },
  ];

  const handleSelect = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  return (
    <Layout>
      <Header className="header">
        <h1>Khảo sát ý kiến</h1>
      </Header>
      <Layout>
        <Content className="content">
          <h2>Bài thi:</h2>
          {questions.map((q, index) => (
            <Question
              key={index}
              question={q.question}
              options={q.options}
              onSelect={(answer) => handleSelect(index, answer)}
              selected={answers[index]}
              type={q.type}
            />
          ))}
        </Content>
        <Sider className="sider" width={200}>
          <div className="question-nav">
            {questions.map((_, i) => (
              <Button
                key={i}
                className={answers[i] !== null ? 'nav-button active' : 'nav-button'}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Button type="primary" className="submit-button">
            Nộp bài
          </Button>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Survey; 