document.getElementById("year").innerHTML = new Date().getFullYear();
ageCalculator("1986-11-01", "MathiasAge");
ageCalculator("2017-04-03", "girlOneAge");
ageCalculator("2019-08-27", "boyOneAge");
ageCalculator("2025-12-28", "girlTwoAge");
ageCalculator("2015-05-30", "marriedAge");

function ageCalculator(birth, elementId) {
    var dob = new Date(birth);
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    //display the calculated age
    const elementById = document.getElementById(elementId);
    const textnode = elementById.nextSibling;
    textnode.insertData(0, age)
}
