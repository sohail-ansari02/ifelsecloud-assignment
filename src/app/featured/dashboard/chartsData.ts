import { ApexPlotOptions, ApexOptions } from "ng-apexcharts";
type chartOptions = ApexPlotOptions | ApexOptions
export const salesChart: chartOptions = {
  series: [
    {
      name: "Sales",
      data: [30, 41, 35, 51, 49, 46, 43],
      color: "var(--secondary)",
    }
  ],
  chart: {
    height: 220, // Set the height to control the diameter
    type: "line",
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Sales Statistics",
    align: "left",
    style: {
      fontFamily: 'Roboto',
      color: 'var(--black)',
      fontSize: '1rem',
      fontWeight: 'bolder'
    },
    offsetY: 11
  },
  grid: {
    row: {
      colors: ["var(--secondary)",],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ]
  },
  yaxis: {
    labels: {
      formatter(value: any) {
        return '$' + value;
      },
    }
  }
};

export const balanceChart: chartOptions = {
  series: [
    {
      name: "Income",
      data: [44, 55, 41, 67, 22, 43, 13, 23, 20, 8, 13, 27],
      color: 'var(--secondary)'
    },
    {
      name: "Borrow",
      data: [13, 23, 20, 8, 13, 27, 44, 55, 41, 67, 22, 43,],
      color: '#7f92e0'
    },
  ],
  title: {
    text: "Balance Overview",
    align: "left",
    style: {
      fontFamily: 'Roboto',
      color: 'var(--black)',
      fontSize: '1rem',
      fontWeight: 'bolder'
    },
    offsetY: 11
  },
  chart: {
    type: "bar",
    height: 220, // Set the height to control the diameter
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: 8,
      borderRadiusApplication: 'around',

    }
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
  },
  legend: {
    position: "top",
    offsetY: -34,
    offsetX: 154,
    fontSize: '10px'
  },
  fill: {
    opacity: 1
  },
  stroke: {
    width: 8
  }
}

export const donucChart: chartOptions = {
  series: [44, 55, 13,],
  chart: {
    type: "donut",
    width: 220,  // Set the width to control the diameter
    height: 230, // Set the height to control the diameter
  },
  labels: ["Men", "Electronic", "Women",],
  title: {
    text: "Top Products",
    align: "left",
    style: {
      fontFamily: 'Roboto',
      color: 'var(--black)',
      fontSize: '1rem',
      fontWeight: 'bolder'
    },
    offsetY: 8
  },
  legend: {
    show: true,
    position: 'bottom', // Show the legend at the bottom
    horizontalAlign: 'center',
    labels: { // Specify colors for the legend labels
      colors: ["#666"],
      
    },
    markers: {
      fillColors: ["#506de2", "#7386d0", "#8e99c1"]
    }
  },
  plotOptions: {
  },
  fill: {
    colors: ["#506de2", "#7386d0", "#8e99c1"] // Set custom colors for the segments
  },
  tooltip: {
    enabled: false
  }

};