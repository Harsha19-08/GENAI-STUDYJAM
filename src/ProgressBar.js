// ProgressBar.js
import React, { useEffect, useState } from 'react';
import './ProgressBar.css'; // Import the CSS for the progress bar

const ProgressBar = ({ csvData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const parsedData = csvData.split('\n').slice(1).map(row => {
      const columns = row.split(',');
      return {
        name: columns[0].replace(/"/g, ''),
        email: columns[1].replace(/"/g, ''),
        profileStatus: columns[3].replace(/"/g, ''),
        redemptionStatus: columns[4].replace(/"/g, ''),
        skillBadgesCompleted: parseInt(columns[6]),
        arcadeGamesCompleted: parseInt(columns[8]),
      };
    });

    setData(parsedData);
  }, [csvData]);

  const totalParticipants = data.length;
  const completedRedemption = data.filter(item => item.redemptionStatus === 'Yes').length;

  const completionPercentage = ((completedRedemption / totalParticipants) * 100) || 0;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${completionPercentage}%` }}></div>
      <div className="progress-text">
        {completedRedemption} out of {totalParticipants} redeemed ({Math.round(completionPercentage)}%)
      </div>
    </div>
  );
};

export default ProgressBar;
