export interface QuizQuestion {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  language: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What will be the output of the following JavaScript code?",
    code: `console.log(typeof null);`,
    options: [
      "null",
      "undefined",
      "object",
      "boolean"
    ],
    correctAnswer: 2,
    explanation: "In JavaScript, typeof null returns 'object'. This is a well-known quirk in JavaScript and is considered a bug in the language, but it's maintained for backward compatibility.",
    difficulty: 'medium',
    language: 'JavaScript'
  },
  {
    id: 2,
    question: "Which of the following is the correct way to declare a variable in Python?",
    options: [
      "var x = 5",
      "let x = 5",
      "x = 5",
      "int x = 5"
    ],
    correctAnswer: 2,
    explanation: "In Python, variables are declared simply by assigning a value to them. Python is dynamically typed, so you don't need to specify the data type.",
    difficulty: 'easy',
    language: 'Python'
  },
  {
    id: 3,
    question: "What is the time complexity of accessing an element in an array by index?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    correctAnswer: 0,
    explanation: "Accessing an element in an array by index is O(1) or constant time because arrays provide direct access to elements using their memory address calculation.",
    difficulty: 'easy',
    language: 'General'
  },
  {
    id: 4,
    question: "Which CSS property is used to change the text color of an element?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correctAnswer: 2,
    explanation: "The 'color' property in CSS is used to set the color of text content in an element.",
    difficulty: 'easy',
    language: 'CSS'
  },
  {
    id: 5,
    question: "What will be the output of this Python code?",
    code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
    options: [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "[4]",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "In Python, when you assign a list to another variable, both variables point to the same list object in memory. So modifying y also affects x.",
    difficulty: 'medium',
    language: 'Python'
  },
  {
    id: 6,
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    correctAnswer: 1,
    explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML. The href attribute specifies the URL of the page the link goes to.",
    difficulty: 'easy',
    language: 'HTML'
  },
  {
    id: 7,
    question: "What is the result of 3 + '3' in JavaScript?",
    options: [
      "6",
      "33",
      "Error",
      "undefined"
    ],
    correctAnswer: 1,
    explanation: "JavaScript performs type coercion. When adding a number and a string, the number is converted to a string and concatenated, resulting in '33'.",
    difficulty: 'medium',
    language: 'JavaScript'
  },
  {
    id: 8,
    question: "Which of the following is NOT a valid way to comment in CSS?",
    options: [
      "/* This is a comment */",
      "// This is a comment",
      "<!-- This is a comment -->",
      "All of the above are invalid"
    ],
    correctAnswer: 1,
    explanation: "CSS only supports /* */ for comments. // is used in JavaScript and other languages, while <!-- --> is used in HTML.",
    difficulty: 'easy',
    language: 'CSS'
  },
  {
    id: 9,
    question: "What does the 'git clone' command do?",
    options: [
      "Creates a new branch",
      "Copies a repository from remote to local",
      "Merges two branches",
      "Deletes a repository"
    ],
    correctAnswer: 1,
    explanation: "'git clone' creates a local copy of a remote repository, including all files, history, and branches.",
    difficulty: 'easy',
    language: 'Git'
  },
  {
    id: 10,
    question: "Which data structure follows the LIFO (Last In, First Out) principle?",
    options: [
      "Queue",
      "Array",
      "Stack",
      "Linked List"
    ],
    correctAnswer: 2,
    explanation: "A stack follows the LIFO principle where the last element added is the first one to be removed, like a stack of plates.",
    difficulty: 'easy',
    language: 'Data Structures'
  }
];