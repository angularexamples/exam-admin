class CourseModel {
    constructor(
        public name: string,
        public description:string,
        public status: string,
        public id?: number
    ) {}
}
class CourseFormModel {
    constructor(
        public name : string,
        public description:string,
        public status : string
    ){}
}

export { CourseModel,CourseFormModel}