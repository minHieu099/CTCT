export const getQuestions = (req, res) => {
    const questions = [
      {
        id: 1,
        question: 'Câu 1: Năm 2013, đồng chí Nguyễn Phú Trọng...',
        options: ['A. 40 năm', 'B. 50 năm', 'C. 60 năm', 'D. 70 năm'],
        type: 'multiple-choice',
      },
      {
        id: 2,
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
        id: 3,
        question: 'Câu 3: Viết một đoạn văn ngắn về văn hóa Việt Nam.',
        type: 'open-ended',
      },
    ];
    res.json(questions);
  };
  
  export const submitAnswers = (req, res) => {
    const answers = req.body;
    console.log('Received answers:', answers);
    res.json({ message: 'Answers submitted successfully' });
  };