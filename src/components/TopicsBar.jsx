import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const TopicsBar = () => {
  const [topics, setTopics] = useState([]);
  const [choosenTopic, setChoosenTopic] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await axios.get('/api/topics');
      setTopics(response.data);
    };
    fetchTopics();
  }, []);

  return (
    <Container>
      <h2>Topics</h2>
      <Container>
        {topics.map((topic) => (
          <p key={topic.id} onClick={() => setChoosenTopic(choosenTopic)}>
            {topic.name}
          </p>
        ))}
      </Container>
    </Container>
  );
};

export default TopicsBar;
