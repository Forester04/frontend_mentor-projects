function calculate() {
    // Get input values
    const initialDeposit = parseFloat(document.getElementById("initialDeposit").value);
    const contributions = parseFloat(document.getElementById("contributions").value);
    const frequency = document.querySelector('input[name="frequency"]:checked').value;
    const yearsToGrow = parseInt(document.getElementById("yearsToGrow").value);
    const annualReturn = parseFloat(document.getElementById("annualReturn").value) / 100;

    // Calculate the number of contributions per year based on frequency
    let contributionsPerYear = 0;
    if (frequency === "annual") {
        contributionsPerYear = 1;
    } else if (frequency === "monthly") {
        contributionsPerYear = 12;
    } else if (frequency === "weekly") {
        contributionsPerYear = 52;
    } else if (frequency === "daily") {
        contributionsPerYear = 365;
    }

    // Calculate the total contributions amount and final amount
    const totalContributions = yearsToGrow * contributionsPerYear;
    const totalContributionsAmount = contributions * totalContributions;
    const finalAmount = initialDeposit * Math.pow(1 + annualReturn, yearsToGrow) + 
                        totalContributionsAmount * ((Math.pow(1 + annualReturn, yearsToGrow) - 1) / annualReturn);

    // Display the result
    document.getElementById("result").textContent = "Estimated Final Amount: $" + finalAmount.toFixed(2);

    // Prepare data for chart
    let currentAmount = initialDeposit;
    myChart.data.labels = []; // Clear previous labels
    myChart.data.datasets[0].data = []; // Clear previous data

    for (let i = 1; i <= yearsToGrow; i++) {
        const interestEarned = currentAmount * annualReturn;
        currentAmount += interestEarned + (contributionsPerYear * contributions);

        // Populate chart data
        myChart.data.labels.push(`Year ${i}`);
        myChart.data.datasets[0].data.push(currentAmount);
    }

    // Update the chart after setting data
    myChart.update();
}

// Initialize Chart.js chart with 3D plugin
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Switch to bar chart for a more pronounced 3D effect
    data: {
        labels: [], // We'll populate this in calculate()
        datasets: [{
            label: 'Investment Growth',
            data: [], // We'll populate this in calculate()
            backgroundColor: '#4CAF50',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        plugins: {
            chartJsPlugin3d: {
                shadowOffsetX: 10,
                shadowOffsetY: 10,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                perspective: 1, // Adjust for more or less 3D depth
                ambientLight: 0.4 // Adjust for lighting effect
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
