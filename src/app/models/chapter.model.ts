class ChapterModel {
    constructor(
        public name: string,
        public description:string,
        public total_qns:string,
        public duration:string,
        public status: string,
        public courseId?:number,
        public id?: number
    ) {}
}
class ChapterFormModel {
    constructor(
        public name : string,
        public description:string,
        public total_qns:string,
        public duration:string,
        public status : string,
        public courseId?:number,
    ){}
}

export { ChapterModel,ChapterFormModel}