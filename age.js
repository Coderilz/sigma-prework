let presentDate = new Date();

let presentDay = presentDate.getDate(),
  presentMonth = presentDate.getMonth() + 1,
  presentYear = presentDate.getFullYear();

let birthDate = prompt("Enter your birthdate in the format, YYYY-MM-DD: "),
  birthDateArr = birthDate.split("-");

let birthDay = birthDateArr[2],
  birthMonth = birthDateArr[1],
  birthYear = birthDateArr[0];

let age = presentYear - birthYear;
if (presentMonth < birthMonth) {
  age--;
} else if (presentMonth == birthMonth) {
  if (presentDay < birthDay) {
    age--;
  }
}
console.log(age);
