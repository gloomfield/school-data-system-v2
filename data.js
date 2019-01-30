// Students
let studentsData = [
    {
        id: 1000,
        name: "Hans Werner",
        address: "Kleinholzgasse 8, 7000 Eisenstadt",
        class: "3-A" 
    },
    {
        id: 1001,
        name: "Carina Hofmeister",
        address: "Dunkelwaldstraße 32, 7301 Deutschkreutz",
        class: "1-C" 
    },
    {
        id: 1002,
        name: "Agatha Christie",
        address: "Sackgasse 100, 7350 Oberpullendorf",
        class: "2-B" 
    },
    {
        id: 1003,
        name: "Joseph Klinik",
        address: "Stadtweg 11, 1130 Wien",
        class: "1-A" 
    },
    {
        id: 1004,
        name: "Gregor Gutmann",
        address: "Waldweg 3, 7050 Niemalsland",
        class: "3-C" 
    }
]

// Courses
let coursesData = [
    {
        id: 100,
        name: "Networking",
        description: "Any description for the course called 'Networking'"
    },
    {
        id: 101,
        name: "Physics",
        description: "Any description for the course called 'Physics'"
    }, 
    {
        id: 102,
        name: "Software Developing",
        description: "Any description for the course called 'Software Developing'"
    },
    {
        id: 103,
        name: "Maths",
        description: "Any description for the course called 'Maths'"
    }, 
    {
        id: 104,
        name: "Project Management",
        description: "Any description for the course called 'Project Management'"
    },
    {
        id: 105,
        name: "Biology",
        description: "Any description for the course called 'Biology'"
    }
]

// every student has his own courses including their grades
let courseGrades = [

    {
        studentID: 1000,
        courses: [
            {courseID: 101, grade: 2},
            {courseID: 103, grade: 4},
            {courseID: 104, grade: 1},
            {courseID: 105, grade: 1}
        ]
    },
    {
        studentID: 1001,
        courses: [
            {courseID: 100, grade: 1},
            {courseID: 101, grade: 2},
            {courseID: 103, grade: 2},
            {courseID: 105, grade: 3}
        ]
    },
    {
        studentID: 1002,
        courses: [
            {courseID: 100, grade: 1},
            {courseID: 101, grade: 1},
            {courseID: 102, grade: 2},
            {courseID: 103, grade: 2},
            {courseID: 105, grade: 4}
        ]
    }
]

module.exports = {studentsData}
