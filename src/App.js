import React, { useState } from 'react';

const QuantumStorybook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const quantumConcepts = [
    // Cover page
    {
      type: 'cover',
      title: 'The Quantum AI Alphabet',
      subtitle: 'By Sai Gattupalli',
      illustration: '🚀🤖⭐'
    },
    // A-Z pages
    { letter: 'A', word: 'Atom', text: 'Atoms are the tiny building blocks of everything, like tiny LEGOs for the whole universe! In quantum computing, we use atoms to do amazing things.' },
    { letter: 'B', word: 'Bell\'s Theorem', text: 'Bell\'s Theorem shows us that particles can be mysteriously connected, even when they\'re far apart! It\'s like having two magic coins that always land on opposite sides.' },
    { letter: 'C', word: 'Complementarity', text: 'Complementarity means that tiny particles can act like both a ball and a wave at the same time! It\'s like a coin that is both heads AND tails until you look at it.' },
    { letter: 'D', word: 'Decoherence', text: 'Decoherence is what happens when the quantum world meets our everyday world. It\'s like when a soap bubble pops - the magical quantum effects disappear.' },
    { letter: 'E', word: 'Entanglement', text: 'Entanglement is when two particles become best friends forever! When something happens to one particle, the other instantly knows about it, even across the universe!' },
    { letter: 'F', word: 'Fundamental Forces', text: 'There are four fundamental forces that control everything: gravity (keeps you on the ground), electromagnetic (makes magnets work), and two nuclear forces.' },
    { letter: 'G', word: 'Graviton', text: 'A graviton is like a tiny invisible messenger that tells objects how to attract each other, like Earth pulling you down when you jump!' },
    { letter: 'H', word: 'Heisenberg Principle', text: 'Heisenberg\'s Principle says you can\'t know everything about a tiny particle at once. It\'s like trying to measure a bouncing ball in the dark!' },
    { letter: 'I', word: 'Interference', text: 'Interference happens when waves meet each other. Sometimes they make bigger waves, sometimes they cancel out. Like ripples in a pond!' },
    { letter: 'J', word: 'Josephson Junction', text: 'A Josephson Junction is a special connection used in quantum computers. It\'s like a magical bridge that lets quantum information flow!' },
    { letter: 'K', word: 'Kinetic Energy', text: 'Kinetic Energy is the energy something has when it\'s moving. A rolling ball has kinetic energy, and even tiny atoms bouncing around create heat!' },
    { letter: 'L', word: 'Light Particle', text: 'Light can act like tiny particles called photons or like waves in water. This amazing dual nature is one of quantum physics\' coolest mysteries!' },
    { letter: 'M', word: 'Measurement', text: 'In quantum physics, measuring something actually changes it! It\'s like particles are shy and behave differently when you\'re watching them.' },
    { letter: 'N', word: 'Neutron', text: 'A neutron is one of the building blocks inside an atom\'s center. It has no electric charge, which is why it\'s called \'neutral\' - neutron!' },
    { letter: 'O', word: 'Orbital', text: 'An orbital is like a cloud where electrons like to hang out around an atom\'s center. Think of it as the electron\'s favorite neighborhood!' },
    { letter: 'P', word: 'Photon', text: 'A photon is a tiny packet of light energy. Every ray of sunlight, every rainbow, and every flashlight beam is made of billions of these light particles!' },
    { letter: 'Q', word: 'Qubit', text: 'A qubit is like a magical coin used in quantum computers. Unlike regular bits that are 0 or 1, a qubit can be 0, 1, or both at the same time!' },
    { letter: 'R', word: 'Radiation', text: 'Radiation is energy that travels through space. Some we can see (like light), some we feel (like heat), and some is invisible but useful (like radio waves)!' },
    { letter: 'S', word: 'Superposition', text: 'Superposition means a quantum particle can be in multiple states at once, like a spinning coin that\'s both heads and tails until it lands!' },
    { letter: 'T', word: 'Tunneling', text: 'Quantum tunneling is when particles can magically pass through walls! It\'s like a ball rolling through a hill instead of over it!' },
    { letter: 'U', word: 'Uncertainty', text: 'Uncertainty means there are some things we simply cannot know exactly at the same time. It\'s not our tools - it\'s just how nature works!' },
    { letter: 'V', word: 'Virtual Particle', text: 'Virtual particles are like quantum \'ghosts\' that pop in and out of existence so quickly we can barely detect them. They help carry forces!' },
    { letter: 'W', word: 'Wave Function', text: 'A wave function is like a mathematical recipe that tells us the probability of finding a particle in different places. It\'s quantum\'s instruction manual!' },
    { letter: 'X', word: 'X-ray', text: 'X-rays are high-energy light waves that can pass through your body but not through bones. That\'s how doctors can see your skeleton!' },
    { letter: 'Y', word: 'Young\'s Experiment', text: 'Young\'s Double-Slit Experiment shows that light acts like both particles and waves. It creates a striped pattern that proves light\'s wave nature!' },
    { letter: 'Z', word: 'Zero Point Energy', text: 'Zero Point Energy is the lowest possible energy quantum systems can have. Even when everything seems still, there\'s still tiny energy jiggling around!' }
  ];

  const nextPage = () => {
    if (isAnimating || currentPage >= quantumConcepts.length - 1) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const prevPage = () => {
    if (isAnimating || currentPage <= 0) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(prev => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const currentConcept = quantumConcepts[currentPage];

  const renderCover = () => (
    <div className="book-page cover-page">
      <div className="cosmic-background">
        <div className="stars"></div>
        <div className="cosmic-waves"></div>
      </div>
      <div className="cover-content">
        <div className="cover-illustration">
          <div className="floating-elements">
            <div className="robot">🤖</div>
            <div className="atom">⚛️</div>
            <div className="star">⭐</div>
            <div className="rocket">🚀</div>
          </div>
        </div>
        <div className="title-section">
          <h1 className="main-title">{currentConcept.title}</h1>
          <p className="author">{currentConcept.subtitle}</p>
        </div>
      </div>
    </div>
  );

  const renderPage = () => (
    <div className="book-spread">
      <div className="book-page left-page">
        <div className="illustration-container">
          <div className="quantum-illustration">
            <div className="letter-display">{currentConcept.letter}</div>
            <div className="visual-elements">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="wave-pattern"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="book-page right-page">
        <div className="text-content">
          <div className="concept-header">
            <span className="big-letter">{currentConcept.letter}</span>
            <span className="is-for">is for</span>
            <span className="concept-word">{currentConcept.word}</span>
          </div>
          <p className="concept-text">{currentConcept.text}</p>
          <div className="page-number">{currentPage}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="storybook-container" onClick={nextPage}>
      <div className={`book ${isAnimating ? 'page-turning' : ''}`}>
        {currentPage === 0 ? renderCover() : renderPage()}
        
        {/* Navigation buttons */}
        <div className="navigation">
          {currentPage > 0 && (
            <button 
              className="nav-button prev-button" 
              onClick={(e) => { e.stopPropagation(); prevPage(); }}
            >
              ← Previous
            </button>
          )}
          {currentPage < quantumConcepts.length - 1 && (
            <button 
              className="nav-button next-button"
              onClick={(e) => { e.stopPropagation(); nextPage(); }}
            >
              Next →
            </button>
          )}
        </div>
        
        {/* Progress indicator */}
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${(currentPage / (quantumConcepts.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <style jsx>{`
        .storybook-container {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
        }

        .book {
          width: 90vw;
          max-width: 1000px;
          height: 85vh;
          max-height: 700px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          position: relative;
          transition: transform 0.3s ease;
          overflow: hidden;
        }

        .book.page-turning {
          transform: scale(0.98);
        }

        .cover-page {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .cosmic-background {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6B46C1 0%, #EC4899 25%, #10B981 50%, #F59E0B 75%, #3B82F6 100%);
        }

        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 40px 70px, white, transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 160px 30px, white, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: twinkle 4s linear infinite;
        }

        .cosmic-waves {
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 50%),
            linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%);
          animation: wave 6s ease-in-out infinite;
        }

        .cover-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 60px 40px;
          z-index: 2;
        }

        .floating-elements {
          position: relative;
          width: 300px;
          height: 200px;
        }

        .robot, .atom, .star, .rocket {
          position: absolute;
          font-size: 3rem;
          animation: float 3s ease-in-out infinite;
        }

        .robot {
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }

        .atom {
          top: 60%;
          left: 20%;
          animation-delay: -1s;
        }

        .star {
          top: 10%;
          left: 40%;
          animation-delay: -2s;
        }

        .rocket {
          bottom: 10%;
          right: 30%;
          animation-delay: -1.5s;
        }

        .title-section {
          text-align: center;
          color: white;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          line-height: 1.2;
        }

        .author {
          font-size: 1.5rem;
          opacity: 0.9;
          font-style: italic;
        }

        .book-spread {
          display: flex;
          width: 100%;
          height: 100%;
        }

        .book-page {
          flex: 1;
          height: 100%;
          position: relative;
        }

        .left-page {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illustration-container {
          width: 80%;
          height: 80%;
          position: relative;
        }

        .quantum-illustration {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .letter-display {
          font-size: 8rem;
          font-weight: bold;
          color: white;
          text-shadow: 0 0 30px rgba(255,255,255,0.5);
          z-index: 2;
          position: relative;
        }

        .visual-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .particle {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.8);
          animation: orbit 4s linear infinite;
        }

        .particle-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 70%;
          right: 20%;
          animation-delay: -1.3s;
        }

        .particle-3 {
          bottom: 30%;
          left: 70%;
          animation-delay: -2.6s;
        }

        .wave-pattern {
          position: absolute;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          top: 50%;
          transform: translateY(-50%);
          animation: wave-move 2s ease-in-out infinite;
        }

        .right-page {
          background: #fefefe;
          padding: 60px 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text-content {
          max-width: 100%;
        }

        .concept-header {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .big-letter {
          font-size: 4rem;
          font-weight: bold;
          color: #2D3748;
          line-height: 1;
        }

        .is-for {
          font-size: 1.2rem;
          color: #718096;
          margin: 5px 0;
        }

        .concept-word {
          font-size: 2rem;
          font-weight: bold;
          color: #4A5568;
        }

        .concept-text {
          font-size: 1.3rem;
          line-height: 1.8;
          color: #2D3748;
          text-align: justify;
        }

        .page-number {
          position: absolute;
          bottom: 30px;
          right: 30px;
          font-size: 1rem;
          color: #A0AEC0;
        }

        .navigation {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
        }

        .nav-button {
          background: rgba(0,0,0,0.7);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.3s ease;
        }

        .nav-button:hover {
          background: rgba(0,0,0,0.9);
        }

        .progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(0,0,0,0.1);
        }

        .progress {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.3s ease;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }

        @keyframes wave-move {
          0%, 100% { transform: translateY(-50%) scaleX(1); }
          50% { transform: translateY(-50%) scaleX(1.2); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes wave {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (max-width: 768px) {
          .book {
            width: 95vw;
            height: 90vh;
          }
          
          .main-title {
            font-size: 2.5rem;
          }
          
          .letter-display {
            font-size: 6rem;
          }
          
          .right-page {
            padding: 40px 30px;
          }
          
          .big-letter {
            font-size: 3rem;
          }
          
          .concept-word {
            font-size: 1.5rem;
          }
          
          .concept-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default QuantumStorybook;