document.addEventListener("DOMContentLoaded", () => {
  // Sidebar interactivity
  const sidebarItems = document.querySelectorAll(".sidebar ul li");

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      sidebarItems.forEach(i => i.classList.remove("active"));
      // Add active class to the clicked item
      item.classList.add("active");
    });
  });

  // Chart setup
  const createBarChart = (canvasId, labels, data, options) => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  };

  const hoursData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Not Spent',
        data: [6, 4, 7, 5, 3, 6, 4], // Example values
        backgroundColor: 'rgba(0, 0, 139, 0.9)', // dark blue
        stack: 'hours'
      },
      {
        label: 'Spent',
        data: [2, 4, 1, 3, 5, 2, 4], // Example values
        backgroundColor: 'rgba(173, 216, 230, 0.7)', // light blue
        stack: 'hours'
      }
    ]
  };

  const hoursChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 8 // Max 8 hours per day
      }
    }
  };

  // Create the hours chart
  createBarChart('hoursChart', hoursData.labels, hoursData, hoursChartOptions);

  // Performance chart setup (similar structure)
  // For example, assume the performance chart uses a gauge or other specific chart
  const performanceData = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [
      {
        label: 'Performance',
        data: [3, 6, 8], // Example values for performance levels
        backgroundColor: ['#FF0000', '#FFFF00', '#00FF00']
      }
    ]
  };

  const performanceChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true,
        beginAtZero: true
      }
    }
  };

  // Create the performance chart (adjust chart type as needed)
  createBarChart('performanceChart', performanceData.labels, performanceData, performanceChartOptions);
});
