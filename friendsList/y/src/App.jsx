import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css'; // Імпортуємо стилі (створимо нижче)

const Statistics = ({ title, stats }) => {
  // Функція для генерації випадкового кольору (необов'язково)
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      
      <ul className="stat-list">
        {stats.map((item) => (
          <li 
            className="item" 
            key={item.id}
            style={{ backgroundColor: getRandomColor() }} // Необов'язковий стиль
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default Statistics;
