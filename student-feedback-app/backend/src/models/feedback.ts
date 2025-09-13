class Feedback {
    constructor(
        public id: string,
        public studentName: string,
        public course: string,
        public feedbackText: string,
        public rating: number
    ) {}

    validate() {
        if (!this.studentName || !this.course || !this.feedbackText || this.rating < 1 || this.rating > 5) {
            throw new Error("Invalid feedback data");
        }
    }
}

export default Feedback;