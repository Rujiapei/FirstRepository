import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  background: linear-gradient(135deg, #00B4DB, #0083B0);
  border-radius: 15px;
  padding: 2rem 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: white;
  font-family: 'Arial', sans-serif;
  text-align: center;
  min-width: 320px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TimeText = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const DateText = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
  white-space: nowrap;
`;

const TimeCard: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  };

  return (
    <Card>
      <TimeText>{formatTime(time)}</TimeText>
      <DateText>{formatDate(time)}</DateText>
    </Card>
  );
};

export default TimeCard; 