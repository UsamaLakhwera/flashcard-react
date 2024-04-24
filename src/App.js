import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Toolbar from './components/Toolbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useFlashcards } from './hooks/useFlashcards';
import useLocalStorage from "use-local-storage"
function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDark", false)
  const [allCards] = useFlashcards();
  const totalCards = allCards.length;
  const [curCardId, setCurCardId] = useState(1);

  let goToPrev = () => {
    if (isValidId(curCardId - 1)) {
      setCurCardId(curCardId - 1);
    }
    else {
      setCurCardId(totalCards);
    }
  }

  let goToNext = () => {
    if (isValidId(curCardId + 1)) {
      setCurCardId(curCardId + 1);
    }
    else {
      setCurCardId(1);
    }
  };

  function isValidId(id) {
    return (id <= totalCards && id >= 1);
  }

  return (
    <div className="main-wrapper " data-theme={isDarkMode ? "dark" : "light"}>
      <Toolbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Toolbar>
      <Container className="container-main">
        <Card {...allCards.find(item => item.id === curCardId)}></Card>
        <div className="action-buttons">
          <Button variant="warning" className="me-4 prev-btn" onClick={goToPrev}>Prev</Button>
          <Button variant="success" className="ms-4 next-btn" onClick={goToNext}>Next</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
