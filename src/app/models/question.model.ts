class QuestionModel {
    constructor(
        public question: string,
        public options: OptionsModel,                                                                                
        public chapterId?: number,
        public id?: number
    ) { }
}
class QuestionFormModel {
    constructor(
        public question: string,
        public options: OptionsFormModel,
        public chapterId?: number
    ) { }
}
class OptionsModel {
    constructor(
    public option1: string,
    public option2: string,
    public option3: string,
    public option4: string,
    public is_correct: string
   
){}
}
class OptionsFormModel {
    constructor(
        public option1: string,
        public option2: string,
        public option3: string,
        public option4: string,
        public is_correct: string
    ) { }
}
export { QuestionModel, QuestionFormModel ,OptionsModel,OptionsFormModel}