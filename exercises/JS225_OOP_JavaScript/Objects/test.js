console.log([
  {
  name: 'paul',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
},

{
  name: 'Mary',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}
].find(student => student.name === 'paual'))