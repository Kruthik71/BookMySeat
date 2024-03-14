import { Doughnut } from "react-chartjs-2";

const ReceptionAttendancePieChart = ({
  remainingAttendeesData,
  attendeesData,
}) => {
  const sourceData = [
    {
      label: "Attendees",
        value: attendeesData,
    },
    {
      label: "Absentees",
        value: remainingAttendeesData,
    },
  ];
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <Doughnut
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Attendance",
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                  "rgba(217, 237, 146, 1)",
                "rgba(255, 0, 0, 0.8)",
              ],
              borderRadius: 10,
            },
          ],
          hoverOffset: 4,
        }}
        options={{
            animation: {
              onComplete: () => {
                console.log('Animation complete');
              },
              delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default') {
                  delay = context.dataIndex * 300 + context.datasetIndex * 300;
                }
                return delay;
              },
            },
          }}
        width={100}
        height={100}
      />
    </div>
  );
};

export default ReceptionAttendancePieChart;
