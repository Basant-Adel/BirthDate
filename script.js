const day = document.getElementById('date');
const month = document.getElementById("month");
const year = document.getElementById("year");
const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];

let dayOption = '<option selected>Select Day</option>';

for (let i = 1; i <= 31; i++) {
    dayOption = dayOption + ('<option>' + i + '</option>');
}
day.innerHTML = dayOption;

let monthOption = '<option selected>Select Month</option>';

for (let i = 0; i < months.length; i++) {
    monthOption = monthOption + ('<option>' + months[i] + '</option>');
}
month.innerHTML = monthOption;

let yearOption = '<option selected>Select Year</option>';

for (let i = 1900; i <= 2024; i++) {
    yearOption = yearOption + ('<option>' + i + '</option>');
}
year.innerHTML = yearOption;