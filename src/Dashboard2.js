import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const participants = [
    { srNo: 1, name: 'Himanshi Negi', redemption: '✔', arcadeGame: 100, promptDesign: 100, genAIApps: 100, totalCompletion: 'Yes' },
    { srNo: 2, name: 'Vihaan Arora', redemption: '✔', arcadeGame: 100, promptDesign: 100, genAIApps: 100, totalCompletion: 'Yes' },
    { srNo: 3, name: 'JALAJ MISHRA', redemption: '✔', arcadeGame: 100, promptDesign: 100, genAIApps: 100, totalCompletion: 'Yes' },
    { srNo: 4, name: 'Krishnam Katiyar', redemption: '✔', arcadeGame: 100, promptDesign: 100, genAIApps: 100, totalCompletion: 'Yes' }
  ];

  return (
    <div className="dashboard">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Redemption Status</th>
            <th>Gen AI Arcade Game</th>
            <th>Prompt Design in Vertex AI</th>
            <th>Develop GenAI Apps with Gemini and Streamlit</th>
            <th>Total Completion</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant) => (
            <tr key={participant.srNo}>
              <td>{participant.srNo}</td>
              <td>{participant.name}</td>
              <td>{participant.redemption}</td>
              <td>{participant.arcadeGame}</td>
              <td>{participant.promptDesign}</td>
              <td>{participant.genAIApps}</td>
              <td>{participant.totalCompletion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
