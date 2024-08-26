import React, { useState } from 'react';
import GridView from '../components/GridView';
import TileView from '../components/TileView';
import DetailView from '../components/DetailView';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const HomePage = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [view, setView] = useState('grid');

  const handleTileClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDetail = () => {
    setSelectedStudent(null);
  };

  return (
    <div className='p-4'>
     
      <ButtonGroup className='mb-4' aria-label="Basic example">
      <Button onClick={() => setView('grid')}>Grid View</Button>
      <Button onClick={() => setView('tile')}>Tile View</Button>
    </ButtonGroup>

      {view === 'grid' ? (
        <GridView students={students} />
      ) : (
        <TileView students={students} onTileClick={handleTileClick} />
      )}

      {selectedStudent && (
        <DetailView
          student={selectedStudent}
          show={!!selectedStudent} 
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default HomePage;
