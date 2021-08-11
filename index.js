document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const data = {
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
const config = {
    type: 'pie',
    data: data,
    options: {
        layout: {
            padding: {
               left: 5,
               right: 5,
               bottom: 5
            }
        },
    }
};
var myChart = new Chart(
    document.getElementById('task-pie-chart'),
    config
);