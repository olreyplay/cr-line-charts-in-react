import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function App() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Active Users",
            data: [120, 200, 150, 170, 180, 210, 240],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: false },
        },
      },
    });

    chartRef.current = chart;
    return () => chart.destroy();
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      <div style={{ height: 400 }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default App;
