export class Examuser {

    constructor(
    
        public  examid :string="",
        public  courseid :string="",
        public  fullname :string="",
        public  examdate : Date = new Date(),
        public createdby :string="",
        public email :string="",
        public roleid :string="",
        public mobile :string="",
        public gender    :string="",
        public username   :string="",
        public password   :string="",
    ){}
}
