import React, { useState } from 'react';
import '/src/css/Program.css';

const Program = () => {
  const programs = [
    { id: 1, title: 'Strækøvelser for ryggen', description: 'Lette strækøvelser til at lindre rygsmerter.', length: '10 min', rating: 4, category: 'Strækøvelser', image: '#c3c8b3' },
    { id: 2, title: 'Vejrtrækningsøvelser for ro', description: 'Enkle åndedrætsøvelser til stressreduktion.', length: '5 min', rating: 5, category: 'Vejrtrækning', image: '#a0a77d' },
    { id: 3, title: 'Meditation til afslapning', description: 'En guidet meditation til at slippe stress.', length: '15 min', rating: 3, category: 'Meditation', image: '#f2f2e9' },
    { id: 4, title: 'Strækøvelser for nakken', description: 'Øvelser til at afhjælpe nakkespændinger.', length: '12 min', rating: 4, category: 'Strækøvelser', image: '#e0e0e0' },
    { id: 5, title: 'Avanceret vejrtrækning', description: 'Lær dybe vejrtrækningsøvelser til ro og afslapning.', length: '8 min', rating: 5, category: 'Vejrtrækning', image: '#d0f2f0' },
    { id: 6, title: 'Kombineret meditation og vejrtrækning', description: 'Kombiner meditation med dyb vejrtrækning.', length: '20 min', rating: 4, category: 'Meditation', image: '#c8d8f0' },
    { id: 7, title: 'Yogastræk for benene', description: 'Strækøvelser for at forbedre benstyrke.', length: '8 min', rating: 5, category: 'Strækøvelser', image: '#f2f2e9' },
    { id: 8, title: 'Kombineret vejrtrækning og meditation', description: 'Lær at kombinere meditation og dybe vejrtrækningsøvelser.', length: '18 min', rating: 4, category: 'Meditation', image: '#c3c8b3' },
    { id: 9, title: 'Strækøvelser for skuldre', description: 'Skulderøvelser for afslapning og fleksibilitet.', length: '10 min', rating: 3, category: 'Strækøvelser', image: '#a0a77d' },
    { id: 10, title: 'Guidet meditation for søvn', description: 'En meditation for at hjælpe dig med at falde i søvn.', length: '15 min', rating: 5, category: 'Meditation', image: '#f2f2e9' }
  ];

  const [filterCategory, setFilterCategory] = useState('all');
  const [filterSort, setFilterSort] = useState('none');
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePrograms, setVisiblePrograms] = useState(6);
  const [isShowMore, setIsShowMore] = useState(true);
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const filteredPrograms = programs
    .filter(program => {
      const matchesCategory = filterCategory === 'all' || program.category === filterCategory;
      const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || program.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (filterSort === 'popular') return b.rating - a.rating;
      if (filterSort === 'newest') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = (category) => {
    setFilterCategory(category);
  };

  const handleSortChange = (sortType) => {
    setFilterSort(sortType);
  };

  const handleShowToggle = () => {
    setIsShowMore(!isShowMore);
    setVisiblePrograms(isShowMore ? filteredPrograms.length : 6);
  };

  const handleFavoriteClick = (id) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(id) ? prevFavorites.filter(favId => favId !== id) : [...prevFavorites, id]
    );
  };

  const handleExpandDescription = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  return (
    <div>
      <div className="title-section">
        <h1>Programmer</h1>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Søg efter programmer..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="filter-buttons-container">
          <button className="filter-btn" onClick={() => handleFilterClick('all')}>Alle</button>
          <button className="filter-btn" onClick={() => handleFilterClick('Strækøvelser')}>Strækøvelser</button>
          <button className="filter-btn" onClick={() => handleFilterClick('Vejrtrækning')}>Vejrtrækning</button>
          <button className="filter-btn" onClick={() => handleFilterClick('Meditation')}>Meditation</button>
          <button className="filter-btn" onClick={() => handleSortChange('popular')}>Populære</button>
          <button className="filter-btn" onClick={() => handleSortChange('newest')}>Nyeste</button>
        </div>
      </div>

      <div className="program-list">
        {filteredPrograms.slice(0, visiblePrograms).map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-image" style={{ backgroundColor: program.image }}></div>
            <div className="program-content">
              <h2>{program.title}</h2>
              <p>
                {expandedProgram === program.id ? program.description : `${program.description.slice(0, 100)}...`}
                <span onClick={() => handleExpandDescription(program.id)}>{expandedProgram === program.id ? 'Læs mindre' : 'Læs mere'}</span>
              </p>
              <p className="program-length">Længde: {program.length}</p>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} style={{ color: star <= program.rating ? 'gold' : '#ccc' }}>
                    &#9733;
                  </span>
                ))}
              </div>
              <div onClick={() => handleFavoriteClick(program.id)} style={{ cursor: 'pointer', fontSize: '20px' }}>
                {favorites.includes(program.id) ? '❤️' : '🤍'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPrograms.length > 6 && (
        <div className="show-more-btn">
          <button onClick={handleShowToggle}>
            {isShowMore ? 'Vis mere' : 'Vis mindre'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Program;