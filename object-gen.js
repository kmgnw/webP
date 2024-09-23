//직접 객체 만들기
class Subject {
    constructor(korName, engName, classCode) {
        this.korName = korName;
        this.engName = engName;
        this.classCode = classCode;
        this.nStudent = 0;
    }

    register() {
        this.nStudent++;
    }

    unregister() {
        this.nStudent--;
    }

    getStudentCount() {
        return this.nStudent;
    }
}

const webProgramming = new Subject('웹프로그래밍', 'Web Programming', 'V024003');

webProgramming.register();
webProgramming.register();
console.log(webProgramming.getStudentCount());

//리터럴 표기법
const Subject = {
    korName: '웹프로그래밍',
    engName: 'Web Programming',
    classCode: 'V024003',
    nStudent: 0,
    register: function () {
        this.nStudent++
    },
    unregister: function () {
        this.nStudent--
    },
    getStudentCount: function (){
        return this.nStudent;
    }
};

//Prototype
function Subject(korName, engName, classCode) {
    this.korName = korName;
    this.engName = engName;
    this.classCode = classCode;
    this.nStudent = 0;
}

Subject.prototype.register = function() {
    this.nStudent++;
};

Subject.prototype.unregister = function() {
    this.nStudent--;
};

Subject.prototype.getStudentCount = function() {
    return this.nStudent;
};