// https://www.chartjs.org/docs/latest/
// task distribution chart
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
        hoverOffset: 10
    }]
};
const task_config = {
    type: 'pie',
    data: task_data,
    options: {
        plugins: {
            legend: {
                display: true,
                position: "right"
            }
        },
        // make sure the chart doesn't get clipped on the left
        layout: {
            padding: {
               left: 25 
            }
        },
    }
};
var myChart = new Chart(
    document.getElementById('task-pie-chart'),
    task_config
);


// subject distribution chart
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
// d3 is a library that creates data schemes for charts
// https://github.com/d3/d3-scale-chromatic
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
        hoverOffset: 10
    }]
};
const subject_config = {
    type: 'pie',
    data: subject_data,
    options: {
        plugins: {
            legend: {
                display: true,
                position: "right"
            }
        },
        layout: {
            padding: {
               left: 25 
            }
        },
    }
};
var myChart = new Chart(
    document.getElementById('subject-pie-chart'),
    subject_config
);
