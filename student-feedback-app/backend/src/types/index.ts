export interface Feedback {
    id: string;
    studentId: string;
    courseId: string;
    rating: number;
    comments: string;
    createdAt: Date;
}

export interface FeedbackRequest {
    studentId: string;
    courseId: string;
    rating: number;
    comments: string;
}