import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Which state do gas station workers give you service?',
        imgSrc:
        "https://i.ytimg.com/vi/_RsF57sH9fo/maxresdefault.jpg",
        answer: 'New Jersey',
    },
    {
        points: 200,
        question:
            'What is the name of my first pet?',
            imgSrc:
            "https://www.dessertfortwo.com/wp-content/uploads/2023/04/Single-Serve-Chocolate-Chip-Cookie-5-540x720.jpg",
        answer: 'Cookie',
    },
    {
        points: 300,
        question:
            'which country did I visit in during the summer of 2022?',
            imgSrc:
            "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
        answer: 'Italy',
    },
    {
        points: 400,
        question: 'Which state were my cousins living in? ',
        imgSrc:
        "https://i.natgeofe.com/k/5af79b71-007d-46f8-8efe-bf37a504195b/california-golden-gate-bridge_4x3.jpg",
        answer: 'California',
    },
    {
        points: 500,
        question: 'when was I born?',
        imgSrc:
        "https://city-png.b-cdn.net/thumbnail/thumbnail_public/temp/august-131763827157iyzyv4ry2u.webp?v=2026092307",
        answer: 'August 20th',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'where do I live?',
                imgSrc:
                "https://u.realgeeks.media/fivecornersscarsdalerealestate/map-of-scarsdale.jpg",
            answer: 'Scarsdale',
        },
        {
            points: 200,
            question: 'what food place is this?',
            imgSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ec/aa/ae/chipotle-mexican-grill.jpg?w=500&h=-1&s=1",
            answer: 'Chipotle',
        },
        {
            points: 300,
            question: 'which train station is this?',
            imgSrc:
            "https://ssl.cdn-redfin.com/photo/269/islphoto/447/genIslnoResize.859447_31_1.webp",
            answer: 'Hartsdale',
        },
        {
            points: 400,
            question: 'What town do I commute to afterschool?',
            imgSrc:
            "https://patch.com/img/cdn20/users/24856073/20221013/015930/styles/raw/public/processed_images/Mamaroneck%20Avenue%202022.jpg",
            answer: 'Mamaroneck',
        },
        {
            points: 500,
            question: 'Which park is this?',
            imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcbHhKsRZLoP86emA2kNwM59vBVX0HmtzGUCU2HMFPg&s",
            answer: 'Greenacres',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What meal with eggs can I make?',
        imgSrc:
            "https://www.seriouseats.com/thmb/BJjCEDw9OZe95hpZxmNcD3rJnHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg",
        answer: 'Egg fried rice',
    },
    {
        points: 200,
        question:
            'Whats my favorite drink?',
        imgSrc:
            "https://i5.walmartimages.com/seo/Dr-Brown-s-Soda-Cream-Soda-12-Fl-Oz-6-Ct_61fe3020-d2d2-459e-94be-9ede3044ff3c_1.bf865fd9c62c4d76203097c53903862f.jpeg",
        answer: 'Cream soda',
    },
    {
        points: 300,
        question:
            'what instrument did I use to play?',
        imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA71280GEMDQc3_AyVo7wiW0YkvWXDIshu1lxOUniYlg&s=10",
        answer: 'Flute',
    },
    {
        points: 400,
        question:
            'Whats the most unique food ive tried while travelling?',
        imgSrc:
            "https://assets.bonappetit.com/photos/57d6f638d95fe0db248232dc/master/w_1600%2Cc_limit/undefined",
        answer: 'scorpion lollipop',
    },
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