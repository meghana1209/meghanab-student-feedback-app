export interface Feedback {
    id: string;
    studentId: string;
    courseId: string;
    rating: number;
    comments: string;
}

export interface FeedbackResponse {
    success: boolean;
    message: string;
    data?: Feedback;
}