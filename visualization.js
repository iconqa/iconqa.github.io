document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const task_data = {
    labels: [
        'Image MCQ',
        'Text MCQ',
        'Fill-in-the-blank'
    ],
    datasets: [{
        label: 'Task Distr.',
        data: [57672, 31578, 18189],
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
const task_config = {
    type: 'pie',
    data: task_data,
};
var myChart = new Chart(
    document.getElementById('task-pie-chart'),
    task_config
);


var labels = [
    'Geometry',
    'Counting',
    'Comparing',
    'Spatial',
    'Scene',
    'Pattern',
    'Time',
    'Fraction',
    'Estimation',
    'Algebra',
    'Measurement', 
    'Common Sense',
    'Probability'
];
var data = [40.5, 34.9, 13.8, 9.8, 9.2, 8.5, 8.3, 7.3, 7.1, 7.1, 6.0, 5.3, 4.9];
var colors = [];
for (let i = 0; i < data.length; i++) {
    colors.push(d3.interpolateTurbo(1 - i / data.length));
}

const subject_data = {
    labels: labels,
    datasets: [{
        label: 'Subject Distr.',
        data: data,
        backgroundColor: colors,
        hoverOffset: 4
    }]
};
const subject_config = {
    type: 'pie',
    data: subject_data,
    options: {
        plugins: {
            legend: {
                display: true
            }
        }
    }
};
var myChart = new Chart(
    document.getElementById('subject-pie-chart'),
    subject_config
);
