import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Web Speech API Text-to-Speech Function
const speakText = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1.1;
    utterance.volume = 0.9;
    speechSynthesis.speak(utterance);
  }
};

// Quantum concepts with enhanced particle configurations
const quantumConcepts = [
  {
    type: 'cover',
    title: 'The Quantum AI Alphabet',
    subtitle: 'By Sai Gattupalli, PhD',
    description: '2025 International Year of Quantum Science & Technology'
  },
  {
    letter: 'A',
    word: 'Atom',
    text: 'Atoms are the tiny building blocks of everything, like tiny LEGOs for the whole universe! In quantum computing, we use atoms to do amazing things.',
    background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
    particles: [
      { type: 'nucleus', count: 1, behavior: 'stationary' },
      { type: 'electron', count: 3, behavior: 'orbital' }
    ]
  },
  {
    letter: 'B',
    word: 'Bell\'s Theorem',
    text: 'Bell\'s Theorem shows us that particles can be mysteriously connected, even when they\'re far apart! It\'s like having two magic coins that always land on opposite sides.',
    background: 'linear-gradient(135deg, #A8E6CF 0%, #FF8A80 100%)',
    particles: [
      { type: 'entangled', count: 2, behavior: 'synchronized' },
      { type: 'connection', count: 4, behavior: 'bridge' }
    ]
  },
  {
    letter: 'C',
    word: 'Complementarity',
    text: 'Complementarity means that tiny particles can act like both a ball and a wave at the same time! It\'s like a coin that is both heads AND tails until you look at it.',
    background: 'linear-gradient(135deg, #FFD93D 0%, #6BCF7F 100%)',
    particles: [
      { type: 'dual', count: 2, behavior: 'waveparticle' },
      { type: 'observer', count: 1, behavior: 'watching' }
    ]
  },
  {
    letter: 'D',
    word: 'Decoherence',
    text: 'Decoherence is what happens when the quantum world meets our everyday world. It\'s like when a soap bubble pops - the magical quantum effects disappear.',
    background: 'linear-gradient(135deg, #FF9A8B 0%, #A8E6CF 100%)',
    particles: [
      { type: 'coherent', count: 3, behavior: 'dissolving' },
      { type: 'environment', count: 6, behavior: 'interference' }
    ]
  },
  {
    letter: 'E',
    word: 'Entanglement',
    text: 'Entanglement is when two particles become best friends forever! When something happens to one particle, the other instantly knows about it, even across the universe!',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    particles: [
      { type: 'entangled', count: 2, behavior: 'mirrored' },
      { type: 'connection', count: 8, behavior: 'instantaneous' }
    ]
  },
  {
    letter: 'F',
    word: 'Fundamental Forces',
    text: 'There are four fundamental forces that control everything: gravity (keeps you on the ground), electromagnetic (makes magnets work), and two nuclear forces.',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    particles: [
      { type: 'gravity', count: 2, behavior: 'attracting' },
      { type: 'electromagnetic', count: 2, behavior: 'repelling' },
      { type: 'nuclear', count: 4, behavior: 'binding' }
    ]
  },
  {
    letter: 'G',
    word: 'Graviton',
    text: 'A graviton is like a tiny invisible messenger that tells objects how to attract each other, like Earth pulling you down when you jump!',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    particles: [
      { type: 'graviton', count: 5, behavior: 'messenger' },
      { type: 'mass', count: 2, behavior: 'attracting' }
    ]
  },
  {
    letter: 'H',
    word: 'Heisenberg Principle',
    text: 'Heisenberg\'s Principle says you can\'t know everything about a tiny particle at once. It\'s like trying to measure a bouncing ball in the dark!',
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    particles: [
      { type: 'uncertain', count: 4, behavior: 'unpredictable' },
      { type: 'measurement', count: 2, behavior: 'disturbing' }
    ]
  },
  {
    letter: 'I',
    word: 'Interference',
    text: 'Interference happens when waves meet each other. Sometimes they make bigger waves, sometimes they cancel out. Like ripples in a pond!',
    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    particles: [
      { type: 'wave', count: 6, behavior: 'interfering' },
      { type: 'pattern', count: 3, behavior: 'constructive' }
    ]
  },
  {
    letter: 'J',
    word: 'Josephson Junction',
    text: 'A Josephson Junction is a special connection used in quantum computers. It\'s like a magical bridge that lets quantum information flow!',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    particles: [
      { type: 'junction', count: 1, behavior: 'bridging' },
      { type: 'current', count: 4, behavior: 'tunneling' }
    ]
  },
  {
    letter: 'K',
    word: 'Kinetic Energy',
    text: 'Kinetic Energy is the energy something has when it\'s moving. A rolling ball has kinetic energy, and even tiny atoms bouncing around create heat!',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    particles: [
      { type: 'kinetic', count: 7, behavior: 'moving' },
      { type: 'heat', count: 3, behavior: 'vibrating' }
    ]
  },
  {
    letter: 'L',
    word: 'Light Particle',
    text: 'Light can act like tiny particles called photons or like waves in water. This amazing dual nature is one of quantum physics\' coolest mysteries!',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    particles: [
      { type: 'photon', count: 5, behavior: 'lightspeed' },
      { type: 'wave', count: 4, behavior: 'undulating' }
    ]
  },
  {
    letter: 'M',
    word: 'Measurement',
    text: 'In quantum physics, measuring something actually changes it! It\'s like particles are shy and behave differently when you\'re watching them.',
    background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    particles: [
      { type: 'observer', count: 1, behavior: 'measuring' },
      { type: 'quantum', count: 4, behavior: 'collapsing' }
    ]
  },
  {
    letter: 'N',
    word: 'Neutron',
    text: 'A neutron is one of the building blocks inside an atom\'s center. It has no electric charge, which is why it\'s called \'neutral\' - neutron!',
    background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    particles: [
      { type: 'neutron', count: 3, behavior: 'neutral' },
      { type: 'nucleus', count: 1, behavior: 'central' }
    ]
  },
  {
    letter: 'O',
    word: 'Orbital',
    text: 'An orbital is like a cloud where electrons like to hang out around an atom\'s center. Think of it as the electron\'s favorite neighborhood!',
    background: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
    particles: [
      { type: 'electron', count: 3, behavior: 'orbital' },
      { type: 'cloud', count: 5, behavior: 'probabilistic' }
    ]
  },
  {
    letter: 'P',
    word: 'Photon',
    text: 'A photon is a tiny packet of light energy. Every ray of sunlight, every rainbow, and every flashlight beam is made of billions of these light particles!',
    background: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
    particles: [
      { type: 'photon', count: 8, behavior: 'radiating' },
      { type: 'energy', count: 4, behavior: 'pulsing' }
    ]
  },
  {
    letter: 'Q',
    word: 'Qubit',
    text: 'A qubit is like a magical coin used in quantum computers. Unlike regular bits that are 0 or 1, a qubit can be 0, 1, or both at the same time!',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    particles: [
      { type: 'qubit', count: 2, behavior: 'superposition' },
      { type: 'state', count: 6, behavior: 'quantum' }
    ]
  },
  {
    letter: 'R',
    word: 'Radiation',
    text: 'Radiation is energy that travels through space. Some we can see (like light), some we feel (like heat), and some is invisible but useful (like radio waves)!',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    particles: [
      { type: 'radiation', count: 6, behavior: 'radiating' },
      { type: 'wave', count: 4, behavior: 'traveling' }
    ]
  },
  {
    letter: 'S',
    word: 'Superposition',
    text: 'Superposition means a quantum particle can be in multiple states at once, like a spinning coin that\'s both heads and tails until it lands!',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    particles: [
      { type: 'superposed', count: 3, behavior: 'multiple' },
      { type: 'state', count: 6, behavior: 'overlapping' }
    ]
  },
  {
    letter: 'T',
    word: 'Tunneling',
    text: 'Quantum tunneling is when particles can magically pass through walls! It\'s like a ball rolling through a hill instead of over it!',
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    particles: [
      { type: 'particle', count: 2, behavior: 'tunneling' },
      { type: 'barrier', count: 1, behavior: 'barrier' },
      { type: 'tunnel', count: 4, behavior: 'passing' }
    ]
  },
  {
    letter: 'U',
    word: 'Uncertainty',
    text: 'Uncertainty means there are some things we simply cannot know exactly at the same time. It\'s not our tools - it\'s just how nature works!',
    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    particles: [
      { type: 'uncertain', count: 5, behavior: 'fuzzy' },
      { type: 'principle', count: 2, behavior: 'limiting' }
    ]
  },
  {
    letter: 'V',
    word: 'Virtual Particle',
    text: 'Virtual particles are like quantum \'ghosts\' that pop in and out of existence so quickly we can barely detect them. They help carry forces!',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    particles: [
      { type: 'virtual', count: 6, behavior: 'popping' },
      { type: 'force', count: 3, behavior: 'carrying' }
    ]
  },
  {
    letter: 'W',
    word: 'Wave Function',
    text: 'A wave function is like a mathematical recipe that tells us the probability of finding a particle in different places. It\'s quantum\'s instruction manual!',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    particles: [
      { type: 'wave', count: 4, behavior: 'probability' },
      { type: 'function', count: 5, behavior: 'mathematical' }
    ]
  },
  {
    letter: 'X',
    word: 'X-ray',
    text: 'X-rays are high-energy light waves that can pass through your body but not through bones. That\'s how doctors can see your skeleton!',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    particles: [
      { type: 'xray', count: 4, behavior: 'penetrating' },
      { type: 'bone', count: 2, behavior: 'blocking' }
    ]
  },
  {
    letter: 'Y',
    word: 'Young\'s Experiment',
    text: 'Young\'s Double-Slit Experiment shows that light acts like both particles and waves. It creates a striped pattern that proves light\'s wave nature!',
    background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    particles: [
      { type: 'slit', count: 2, behavior: 'splitting' },
      { type: 'pattern', count: 6, behavior: 'interfering' }
    ]
  },
  {
    letter: 'Z',
    word: 'Zero Point Energy',
    text: 'Zero Point Energy is the lowest possible energy quantum systems can have. Even when everything seems still, there\'s still tiny energy jiggling around!',
    background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    particles: [
      { type: 'zeropoint', count: 7, behavior: 'minimal' },
      { type: 'vacuum', count: 3, behavior: 'fluctuating' }
    ]
  }
];

// About Page Component
const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <Link to="/" className="back-link">← Back to Storybook</Link>
      </header>
      <div className="about-content">
        <div className="quantum-year-logo">
          <div className="logo-container">
            <img 
              src="/media/International_Year_of_Quantum_logo.png" 
              alt="2025 International Year of Quantum Science & Technology"
              className="official-logo"
            />
            <h1>2025</h1>
            <p>International Year of Quantum Science & Technology</p>
            <div className="un-badge">United Nations</div>
          </div>
        </div>
        
        <section className="purpose-section">
          <h2>Purpose of This Tool</h2>
          <p>The Quantum Alphabet for Young Readers serves as an innovative educational resource designed to introduce fundamental quantum physics concepts to early-grade learners in an accessible, engaging, and age-appropriate manner.</p>
          <p>This initiative supports the United Nations' designation of 2025 as the International Year of Quantum Science and Technology, promoting quantum literacy from an early age.</p>
        </section>

        <section className="curriculum-section">
          <h2>Curriculum Alignment</h2>
          <div className="standards-grid">
            <div className="standard-item">
              <h3>Science Standards</h3>
              <ul>
                <li>NGSS Physical Science K-2: Matter and Its Properties</li>
                <li>NGSS Physical Science 3-5: Energy and Matter</li>
                <li>State Science Standards: Scientific Inquiry and Reasoning</li>
              </ul>
            </div>
            <div className="standard-item">
              <h3>Reading & Language Arts</h3>
              <ul>
                <li>Common Core ELA K-3: Reading Comprehension</li>
                <li>Vocabulary Development and Scientific Language</li>
                <li>Text-to-Speech for Accessibility and Inclusion</li>
              </ul>
            </div>
            <div className="standard-item">
              <h3>Digital Literacy</h3>
              <ul>
                <li>ISTE Standards for Students: Digital Citizenship</li>
                <li>Interactive Learning and Technology Integration</li>
                <li>21st Century Skills Development</li>
              </ul>
            </div>
          </div>
          
          <div className="quantum-year-focus">
            <h3>2025 International Year of Quantum Science & Technology Alignment</h3>
            <p>This resource directly supports UNESCO's mission to promote quantum literacy worldwide. By introducing quantum concepts at the elementary level, we're building foundational understanding for the next generation of quantum scientists, engineers, and informed citizens.</p>
            <ul>
              <li><strong>Global Awareness:</strong> Understanding quantum technology's role in modern society</li>
              <li><strong>Scientific Literacy:</strong> Building conceptual understanding of quantum phenomena</li>
              <li><strong>Future Readiness:</strong> Preparing students for a quantum-enabled future</li>
              <li><strong>Inclusive Education:</strong> Making quantum science accessible to all learners</li>
            </ul>
          </div>
        </section>

        <section className="oer-section">
          <h2>Open Education Resource</h2>
          <div className="oer-details">
            <h3>Creative Commons Licensing</h3>
            <p>This resource is freely available under Creative Commons Attribution 4.0 International License, supporting global access to quality quantum science education.</p>
            
            <h3>UNESCO OER Alignment</h3>
            <p>Aligned with UNESCO's commitment to inclusive, equitable quality education for all, this resource supports:</p>
            <ul>
              <li><strong>Access:</strong> Free and open access to high-quality educational content</li>
              <li><strong>Equity:</strong> Breaking down barriers to quantum science education</li>
              <li><strong>Innovation:</strong> Leveraging technology for engaging learning experiences</li>
              <li><strong>Collaboration:</strong> Encouraging adaptation and localization by educators worldwide</li>
            </ul>
            
            <h3>Usage Rights</h3>
            <div className="usage-grid">
              <div className="usage-item">
                <h4>✓ Share</h4>
                <p>Copy and redistribute in any medium or format</p>
              </div>
              <div className="usage-item">
                <h4>✓ Adapt</h4>
                <p>Remix, transform, and build upon the material</p>
              </div>
              <div className="usage-item">
                <h4>✓ Commercial Use</h4>
                <p>Use for any purpose, even commercially</p>
              </div>
              <div className="usage-item">
                <h4>✓ Attribution</h4>
                <p>Give appropriate credit to original author</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="about-footer">
          <p><strong>Developed by Sai Gattupalli, PhD</strong></p>
          <p>For educators, learners, and the citizens of planet Earth</p>
          <div className="quantum-year-2025">
            <p>Contributing to the International Year of Quantum Science and Technology 2025</p>
            <p>Supporting UNESCO's Global Education Goals and Quantum Literacy Initiative</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Curriculum Alignment Page Component
const CurriculumPage = () => {
  return (
    <div className="curriculum-page">
      <header className="page-header">
        <Link to="/" className="back-link">← Back to Storybook</Link>
        <h1>Curriculum Alignment</h1>
      </header>
      <div className="curriculum-content">
        <section className="standards-section">
          <h2>Science Standards Alignment</h2>
          <div className="standards-detail">
            <div className="grade-level">
              <h3>Grades K-2: NGSS Physical Science</h3>
              <ul>
                <li><strong>K-PS1-1:</strong> Plan and conduct investigations to compare properties of different materials</li>
                <li><strong>1-PS1-1:</strong> Use materials to design solutions to human problems</li>
                <li><strong>2-PS1-1:</strong> Plan and conduct investigations to describe and classify materials</li>
              </ul>
            </div>
            <div className="grade-level">
              <h3>Grades 3-5: NGSS Physical Science</h3>
              <ul>
                <li><strong>3-PS2-3:</strong> Ask questions about what happens when objects collide</li>
                <li><strong>4-PS3-2:</strong> Make observations to provide evidence that energy can be transferred</li>
                <li><strong>5-PS1-1:</strong> Develop models to describe that matter is made of particles</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="quantum-literacy-section">
          <h2>2025 International Year of Quantum Science & Technology</h2>
          <div className="quantum-focus">
            <div className="quantum-goals">
              <h3>Educational Goals</h3>
              <ul>
                <li>Build foundational understanding of quantum concepts</li>
                <li>Develop scientific vocabulary and reasoning skills</li>
                <li>Foster curiosity about the quantum world</li>
                <li>Prepare students for future STEM learning</li>
              </ul>
            </div>
            <div className="quantum-concepts">
              <h3>Age-Appropriate Quantum Concepts</h3>
              <ul>
                <li><strong>Atoms:</strong> Building blocks of everything around us</li>
                <li><strong>Energy:</strong> How particles move and interact</li>
                <li><strong>Light:</strong> Wave-particle duality in simple terms</li>
                <li><strong>Measurement:</strong> How observation affects tiny particles</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="implementation-section">
          <h2>Classroom Implementation</h2>
          <div className="implementation-grid">
            <div className="implementation-item">
              <h3>Reading Integration</h3>
              <p>Use as guided reading material with vocabulary support and comprehension activities.</p>
            </div>
            <div className="implementation-item">
              <h3>Science Exploration</h3>
              <p>Introduce each concept before hands-on experiments and demonstrations.</p>
            </div>
            <div className="implementation-item">
              <h3>Technology Skills</h3>
              <p>Develop digital literacy through interactive navigation and text-to-speech features.</p>
            </div>
            <div className="implementation-item">
              <h3>Cross-Curricular</h3>
              <p>Connect to art, mathematics, and social studies through quantum applications.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Open Education Resource Page Component
const OERPage = () => {
  return (
    <div className="oer-page">
      <header className="page-header">
        <Link to="/" className="back-link">← Back to Storybook</Link>
        <h1>Open Education Resource</h1>
      </header>
      <div className="oer-content">
        <section className="oer-intro">
          <h2>Committed to Open Access Education</h2>
          <p>The Quantum Alphabet for Young Readers is proudly offered as an Open Education Resource (OER), supporting UNESCO's vision of education as a fundamental human right and public good.</p>
        </section>

        <section className="licensing-section">
          <h2>Creative Commons License</h2>
          <div className="license-details">
            <div className="license-badge">
              <h3>CC BY 4.0</h3>
              <p>Creative Commons Attribution 4.0 International</p>
            </div>
            <div className="license-permissions">
              <h3>You are free to:</h3>
              <div className="permission-grid">
                <div className="permission">
                  <h4>🔄 Share</h4>
                  <p>Copy and redistribute the material in any medium or format</p>
                </div>
                <div className="permission">
                  <h4>🔧 Adapt</h4>
                  <p>Remix, transform, and build upon the material</p>
                </div>
                <div className="permission">
                  <h4>💼 Commercial Use</h4>
                  <p>Use the material for any purpose, even commercially</p>
                </div>
                <div className="permission">
                  <h4>🌍 No Geographic Restrictions</h4>
                  <p>Use anywhere in the world without limitation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="unesco-alignment">
          <h2>UNESCO OER Recommendation Alignment</h2>
          <div className="unesco-principles">
            <div className="principle">
              <h3>🎯 Access</h3>
              <p>Removing financial, technological, and legal barriers to high-quality educational resources</p>
            </div>
            <div className="principle">
              <h3>⚖️ Equity</h3>
              <p>Ensuring all learners have access to quantum science education regardless of location or economic status</p>
            </div>
            <div className="principle">
              <h3>🔬 Quality</h3>
              <p>Providing scientifically accurate, age-appropriate content developed by education professionals</p>
            </div>
            <div className="principle">
              <h3>🤝 Collaboration</h3>
              <p>Encouraging educators worldwide to adapt, translate, and improve the resource</p>
            </div>
          </div>
        </section>

        <section className="quantum-2025-oer">
          <h2>Supporting the 2025 International Year</h2>
          <div className="year-support">
            <p>This OER directly contributes to the goals of the 2025 International Year of Quantum Science and Technology by:</p>
            <ul>
              <li><strong>Building Global Quantum Literacy:</strong> Making quantum concepts accessible worldwide</li>
              <li><strong>Supporting Educators:</strong> Providing ready-to-use educational materials</li>
              <li><strong>Fostering Innovation:</strong> Encouraging creative adaptations and implementations</li>
              <li><strong>Promoting Inclusion:</strong> Ensuring quantum education reaches diverse learners</li>
            </ul>
          </div>
        </section>

        <section className="usage-guidelines">
          <h2>Usage Guidelines</h2>
          <div className="guidelines-grid">
            <div className="guideline">
              <h3>Attribution Required</h3>
              <p>Please include: "Quantum Alphabet for Young Readers by Sai Gattupalli, PhD, licensed under CC BY 4.0"</p>
            </div>
            <div className="guideline">
              <h3>Adaptation Encouraged</h3>
              <p>Feel free to translate, modify, or adapt the content for your specific educational context</p>
            </div>
            <div className="guideline">
              <h3>Share Improvements</h3>
              <p>We encourage sharing your adaptations and improvements with the global education community</p>
            </div>
            <div className="guideline">
              <h3>Technical Support</h3>
              <p>The source code is available on GitHub for technical adaptations and improvements</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Main Storybook Component
const QuantumStorybook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const nextPage = (e) => {
    if (e) e.stopPropagation();
    if (isAnimating || currentPage >= quantumConcepts.length - 1) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const prevPage = (e) => {
    if (e) e.stopPropagation();
    if (isAnimating || currentPage <= 0) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(prev => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleSpeak = (text) => {
    speakText(text);
  };

  const currentConcept = quantumConcepts[currentPage];

  // Generate particles based on concept configuration
  const renderParticles = (particleConfig) => {
    if (!particleConfig) return null;

    return particleConfig.map((config, configIndex) => {
      const particles = [];
      for (let i = 0; i < config.count; i++) {
        particles.push(
          <div
            key={`${configIndex}-${i}`}
            className={`particle particle-${config.type} behavior-${config.behavior}`}
            style={{
              animationDelay: `${(i + configIndex) * 0.5}s`,
              '--particle-index': i,
              '--total-particles': config.count
            }}
          ></div>
        );
      }
      return particles;
    }).flat();
  };

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
          <p className="description">{currentConcept.description}</p>
        </div>
        <div className="quantum-logo-bottom">
          <img 
            src="/media/International_Year_of_Quantum_logo.png" 
            alt="2025 International Year of Quantum Science & Technology"
            className="quantum-logo"
          />
        </div>
      </div>
    </div>
  );

  const renderPage = () => (
    <div className="book-spread">
      <div 
        className="book-page left-page"
        style={{ background: currentConcept.background }}
      >
        <div className="illustration-container">
          <div className="quantum-illustration">
            <div className="letter-display">{currentConcept.letter}</div>
            <div className="visual-elements">
              {renderParticles(currentConcept.particles)}
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
          <button 
            className="speak-button"
            onClick={() => handleSpeak(currentConcept.text)}
            title="Listen to definition"
          >
            🔊 Listen
          </button>
          <div className="page-number">{currentPage}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="storybook-container">
      <div className={`book ${isAnimating ? 'page-turning' : ''}`}>
        {currentPage === 0 ? renderCover() : renderPage()}
        
        {/* Navigation buttons - moved to bottom right */}
        <div className="navigation">
          {currentPage > 0 && (
            <button 
              className="nav-button prev-button" 
              onClick={prevPage}
            >
              ← Previous
            </button>
          )}
          {currentPage < quantumConcepts.length - 1 && (
            <button 
              className="nav-button next-button"
              onClick={nextPage}
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
      
      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/about" className="footer-link">About This Resource</Link>
            <span className="separator">|</span>
            <Link to="/curriculum" className="footer-link">Curriculum Alignment</Link>
            <span className="separator">|</span>
            <Link to="/oer" className="footer-link">Open Education Resource</Link>
          </div>
          <div className="footer-credits">
            <p><strong>Developed by Sai Gattupalli, PhD</strong></p>
            <p>For educators, learners, and the citizens of planet Earth</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Main App Component with Router
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<QuantumStorybook />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/oer" element={<OERPage />} />
        </Routes>
        
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Open Sans', sans-serif;
            background: #000000;
            min-height: 100vh;
          }

          .app {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background: #000000;
          }

          .storybook-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px 20px 0 20px;
            overflow: hidden;
            background: #000000;
          }

          .book {
            width: 90vw;
            max-width: 1000px;
            height: 75vh;
            max-height: 600px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(255,255,255,0.1);
            position: relative;
            transition: transform 0.3s ease;
            overflow: hidden;
          }

          .nav-button.page-turning {
            transform: scale(0.95);
          }

          /* Cover Page Styles */
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
            padding: 40px 40px 20px 40px;
            z-index: 2;
          }

          .floating-elements {
            position: relative;
            width: 300px;
            height: 150px;
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
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .main-title {
            font-family: 'Open Sans', sans-serif;
            font-size: 3.2rem;
            font-weight: 800;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            line-height: 1.1;
          }

          .author {
            font-size: 1.3rem;
            opacity: 0.95;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .description {
            font-size: 1rem;
            opacity: 0.9;
            font-style: italic;
          }

          .quantum-logo-bottom {
            margin-top: auto;
          }

          .quantum-logo {
            height: 80px;
            width: auto;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
          }

          /* Book Spread Styles */
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
            font-family: 'Open Sans', sans-serif;
            font-size: 8rem;
            font-weight: 800;
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

          /* Enhanced Particle System */
          .particle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.8);
          }

          /* Atom particles */
          .particle-nucleus {
            width: 20px;
            height: 20px;
            background: #FF6B6B;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s ease-in-out infinite;
          }

          .particle-electron {
            width: 8px;
            height: 8px;
            background: #4ECDC4;
            animation: orbit 3s linear infinite;
          }

          .particle-electron:nth-of-type(1) { animation-delay: 0s; }
          .particle-electron:nth-of-type(2) { animation-delay: -1s; }
          .particle-electron:nth-of-type(3) { animation-delay: -2s; }

          /* Bell's Theorem particles */
          .particle-entangled {
            width: 15px;
            height: 15px;
            background: #A8E6CF;
            animation: synchronized 2s ease-in-out infinite;
          }

          .particle-connection {
            width: 4px;
            height: 50px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
            border-radius: 2px;
            animation: bridge 1.5s ease-in-out infinite;
          }

          /* Text-to-speech button */
          .speak-button {
            background: #4299E1;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9rem;
            margin: 20px 0;
            transition: all 0.3s ease;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
          }

          .speak-button:hover {
            background: #3182CE;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
          }

          .right-page {
            background: #fefefe;
            padding: 50px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .text-content {
            max-width: 100%;
          }

          .concept-header {
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .big-letter {
            font-family: 'Open Sans', sans-serif;
            font-size: 4rem;
            font-weight: 800;
            color: #2D3748;
            line-height: 1;
          }

          .is-for {
            font-size: 1.1rem;
            color: #718096;
            margin: 5px 0;
            font-weight: 400;
          }

          .concept-word {
            font-family: 'Open Sans', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            color: #4A5568;
          }

          .concept-text {
            font-family: 'Open Sans', sans-serif;
            font-size: 1.2rem;
            line-height: 1.7;
            color: #2D3748;
            text-align: justify;
            font-weight: 400;
          }

          .page-number {
            position: absolute;
            bottom: 20px;
            right: 30px;
            font-size: 1rem;
            color: #A0AEC0;
            font-weight: 600;
          }

          /* Navigation - moved to bottom right */
          .navigation {
            position: absolute;
            bottom: 15px;
            right: 15px;
            display: flex;
            gap: 10px;
            z-index: 10;
          }

          .nav-button {
            background: rgba(0,0,0,0.8);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.85rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .nav-button:hover {
            background: rgba(0,0,0,0.95);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          }

          .nav-button:active {
            transform: scale(0.95);
          }

          /* Progress Bar */
          .progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(0,0,0,0.1);
            z-index: 5;
          }

          .progress {
            height: 100%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transition: width 0.3s ease;
          }

          /* Footer */
          .app-footer {
            background: #000000;
            color: white;
            padding: 15px 0;
            margin-top: 0;
            border-top: 1px solid #333;
          }

          .footer-content {
            max-width: 100vw;
            margin: 0;
            text-align: center;
            width: 100%;
          }

          .footer-links {
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
          }

          .footer-link {
            color: white;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
            font-size: 0.95rem;
          }

          .footer-link:hover {
            color: #4299E1;
          }

          .separator {
            margin: 0 10px;
            opacity: 0.5;
            color: white;
          }

          .footer-credits p {
            margin: 3px 0;
            font-size: 0.85rem;
            color: #ccc;
          }

          /* Page Styles */
          .about-page, .curriculum-page, .oer-page {
            min-height: 100vh;
            background: #000000;
            color: white;
            padding: 20px;
            font-family: 'Open Sans', sans-serif;
          }

          .page-header {
            max-width: 1200px;
            margin: 0 auto 40px auto;
          }

          .page-header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #4299E1;
            margin-top: 20px;
          }

          .back-link {
            color: #4299E1;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .back-link:hover {
            color: #63B3ED;
          }

          .about-content, .curriculum-content, .oer-content {
            max-width: 1000px;
            margin: 0 auto;
          }

          .about-content section, .curriculum-content section, .oer-content section {
            margin-bottom: 40px;
            background: rgba(255,255,255,0.05);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(5px);
          }

          .about-content h2, .curriculum-content h2, .oer-content h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #4299E1;
          }

          .about-content h3, .curriculum-content h3, .oer-content h3 {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: #63B3ED;
          }

          .about-content p, .curriculum-content p, .oer-content p {
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 15px;
          }

          .about-content ul, .curriculum-content ul, .oer-content ul {
            list-style: none;
            padding-left: 0;
            margin-bottom: 20px;
          }

          .about-content li, .curriculum-content li, .oer-content li {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
          }

          .about-content li::before, .curriculum-content li::before, .oer-content li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: #4299E1;
            font-weight: bold;
          }

          .official-logo {
            max-height: 150px;
            width: auto;
            margin-bottom: 20px;
          }

          /* Grid layouts for better organization */
          .standards-grid, .implementation-grid, .permission-grid, .guidelines-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
          }

          .standard-item, .implementation-item, .permission, .guideline {
            background: rgba(255,255,255,0.08);
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #4299E1;
          }

          /* Advanced Animations */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
          }

          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
          }

          @keyframes synchronized {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.1); }
          }

          @keyframes bridge {
            0%, 100% { opacity: 0.3; transform: rotate(0deg); }
            50% { opacity: 1; transform: rotate(5deg); }
          }

          @keyframes twinkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          @keyframes wave {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .book {
              width: 95vw;
              height: 80vh;
            }
            
            .main-title {
              font-size: 2.2rem;
            }
            
            .letter-display {
              font-size: 5rem;
            }
            
            .right-page {
              padding: 30px 25px;
            }
            
            .big-letter {
              font-size: 2.5rem;
            }
            
            .concept-word {
              font-size: 1.4rem;
            }
            
            .concept-text {
              font-size: 1rem;
            }

            .navigation {
              bottom: 10px;
              right: 10px;
            }

            .nav-button {
              padding: 6px 12px;
              font-size: 0.8rem;
            }

            .footer-links {
              flex-direction: column;
              gap: 5px;
            }

            .separator {
              display: none;
            }

            .standards-grid, .implementation-grid, .permission-grid, .guidelines-grid {
              grid-template-columns: 1fr;
              gap: 15px;
            }
          }

          @media (max-width: 480px) {
            .storybook-container {
              padding: 10px 10px 0 10px;
            }
            
            .book {
              width: 98vw;
              height: 75vh;
            }
            
            .main-title {
              font-size: 1.8rem;
            }
            
            .letter-display {
              font-size: 4rem;
            }
            
            .right-page {
              padding: 20px 15px;
            }
            
            .big-letter {
              font-size: 2rem;
            }
            
            .concept-word {
              font-size: 1.2rem;
            }
            
            .concept-text {
              font-size: 0.95rem;
            }

            .quantum-logo {
              height: 60px;
            }
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
