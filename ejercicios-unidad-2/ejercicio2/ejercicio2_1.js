const name = 'Javier';
const surname = 'Pardiñas';
const age = 27;
const birthYear= 1994;

//this function alerts the single quotes
const alertSingleQuotes = () => {
    alert(" '' ");
};

//this function alerts the full name
const alertFullName = () => {
    alert(`
    Name: ${name};
    Surname: ${surname};
    `);
};

//this function alerts the sum of age and birth year
const alertAgeBirthYearSum = () => {
    alert(`${age} + ${birthYear} = ${age+birthYear}`);
};

//this function alerts the sum of variables
const alertVariablesSum = () => {
    alert(`sum of variables: ${name+surname+age+birthYear}`);
};

