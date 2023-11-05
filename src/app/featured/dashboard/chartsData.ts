import { ApexPlotOptions, ApexOptions} from "ng-apexcharts";

export const salesChart: ApexPlotOptions | ApexOptions =  {
    series: [
      {
        name: "Sales",
        data: [30, 41, 35, 51, 49, 46, 43],
        color: "var(--secondary)",
      }
    ],
    chart: {
      height: 350,
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