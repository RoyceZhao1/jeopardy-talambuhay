import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Which state do gas station workers give you service?',
        answer: 'New Jersey',
    },
    {
        points: 200,
        question:
            'What is the name of my first pet?',
        answer: 'Cookie',
    },
    {
        points: 300,
        question:
            'which country did I visit in during the summer of 2022?',
        answer: 'Italy',
    },
    {
        points: 400,
        question: 'Which state are my cousins living in? ',
        answer: 'California',
    },
    {
        points: 500,
        question: 'when is my birthday?',
        answer: 'August 20th'
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'where is my house?',
            answer: 'Scarsdale',
        },
        {
            points: 200,
            question: 'what place is this?',
            answer: 'Chipotle',
        },
        {
            points: 300,
            question: 'which train station is this?',
            answer: 'Hartsdale Train Station',
        },
        {
            points: 400,
            question: '',
            answer: 'blank',
        },
        {
            points: 500,
            question: 'blank',
            answer: 'blank',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    }
]);


const categories = [
    {
        title: 'Background',
        questions: pastQuestions
    },
    {
        title: `Places I've been`,
        questions: presentQuestions
    },
    {
        title: "Fun Facts",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}