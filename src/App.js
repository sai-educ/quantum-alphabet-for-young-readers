import React, { useState } from 'react';
import './App.css';

const quantumConcepts = {
  A: { name: "Atom", color: "#6B46C1" },
  B: { name: "Bell's Theorem", color: "#EC4899" },
  C: { name: "Complementarity", color: "#10B981" },
  D: { name: "Decoherence", color: "#8B5CF6" },
  E: { name: "Entanglement", color: "#F97316" },
  F: { name: "Fundamental Forces", color: "#059669" },
  G: { name: "Graviton", color: "#7C3AED" },
  H: { name: "Heisenberg Principle", color: "#F59E0B" },
  I: { name: "Interference", color: "#0EA5E9" },
  J: { name: "Josephson Junction", color: "#DC2626" },
  K: { name: "Kinetic Energy", color: "#65A30D" },
  L: { name: "Light Particle", color: "#3B82F6" },
  M: { name: "Measurement", color: "#BE185D" },
  N: { name: "Neutron", color: "#0891B2" },
  O: { name: "Orbital", color: "#7C2D12" },
  P: { name: "Photon", color: "#9333EA" },
  Q: { name: "Qubit", color: "#059669" },
  R: { name: "Radiation", color: "#DC2626" },
  S: { name: "Superposition", color: "#7C3AED" },
  T: { name: "Tunneling", color: "#0D9488" },
  U: { name: "Uncertainty", color: "#C2410C" },
  V: { name: "Virtual Particle", color: "#BE123C" },
  W: { name: "Wave Function", color: "#4338CA" },
  X: { name: "X-ray", color: "#7C2D12" },
  Y: { name: "Young's Experiment", color: "#CA8A04" },
  Z: { name: "Zero Point Energy", color: "#BE185D" }
};

const explanations = {
  A: "An atom is like a tiny LEGO block that everything is made of! It's so small you can't see it, but everything around you - your toys, your food, even you - is made of billions and billions of atoms stuck together.",
  B: "Bell's Theorem shows us that particles can be mysteriously connected, even when they're far apart! It's like having two magic coins that always land on opposite sides, no matter how far apart you flip them.",
  C: "Complementarity means that tiny particles can act like both a ball and a wave at the same time! It's like a coin that is both heads AND tails until you look at it.",
  D: "Decoherence is what happens when the quantum world meets our everyday world. It's like when a soap bubble pops - the magical quantum effects disappear when particles interact with their surroundings.",
  E: "Entanglement is when two particles become best friends forever! When something happens to one particle, the other particle instantly knows about it, even if they're on opposite sides of the universe!",
  F: "There are four fundamental forces that control everything in the universe: gravity (keeps you on the ground), electromagnetic (makes magnets work), and two nuclear forces that hold atoms together.",
  G: "A graviton is a theoretical particle that carries the force of gravity. Think of it as tiny invisible messengers that tell objects how to attract each other, like Earth pulling you down.",
  H: "Heisenberg's Principle says you can't know everything about a tiny particle at once. It's like trying to measure a bouncing ball in the dark - the more you know where it is, the less you know how fast it's moving!",
  I: "Interference happens when waves meet each other. Sometimes they add up to make bigger waves, and sometimes they cancel out. It's like when you and your friend both throw stones in a pond at the same time!",
  J: "A Josephson Junction is a special connection between superconductors (materials with no electrical resistance). It's used in quantum computers and very sensitive detectors.",
  K: "Kinetic Energy is the energy something has when it's moving. A rolling ball has kinetic energy, and even tiny atoms bouncing around have kinetic energy that we feel as heat!",
  L: "Light can act like tiny particles called photons or like waves in water. This dual nature is one of the most amazing things about quantum physics!",
  M: "In quantum physics, measuring something actually changes it! It's like the particles are shy and behave differently when you're watching them versus when you're not looking.",
  N: "A neutron is one of the building blocks inside the center (nucleus) of an atom. It has no electric charge, which is why it's called 'neutral' - neutron!",
  O: "An orbital is like a cloud where electrons like to hang out around an atom's center. Think of it as the electron's favorite neighborhood - they're probably somewhere in that area, but they move around a lot!",
  P: "A photon is a tiny packet of light energy. Every ray of sunlight, every rainbow, and every flashlight beam is made of billions of these light particles zooming around!",
  Q: "A qubit is like a magical coin used in quantum computers. Unlike regular computer bits that are either 0 or 1, a qubit can be 0, 1, or both at the same time until you measure it!",
  R: "Radiation is energy that travels through space. Some radiation we can see (like light), some we can feel (like heat from the sun), and some is invisible but useful (like radio waves).",
  S: "Superposition means a quantum particle can be in multiple states at once, like a spinning coin that's both heads and tails until it lands. Only when we measure it does it 'choose' one state!",
  T: "Quantum tunneling is when particles can magically pass through walls that should be too high for them to climb over. It's like a ball rolling through a hill instead of over it!",
  U: "Uncertainty in quantum physics means there are some things we simply cannot know exactly at the same time. It's not because we don't have good enough tools - it's just how nature works!",
  V: "Virtual particles are like quantum 'ghosts' that pop in and out of existence so quickly we can barely detect them. They help carry forces between other particles.",
  W: "A wave function is like a mathematical description of all the possible states a quantum particle could be in. It's like a recipe that tells us the probability of finding the particle in different places.",
  X: "X-rays are high-energy light waves that can pass through your body but not through your bones. That's why doctors can take pictures of your skeleton to see if anything is broken!",
  Y: "Young's Double-Slit Experiment shows that light can act like both particles and waves. When light goes through two slits, it creates a striped pattern that proves its wave-like nature.",
  Z: "Zero Point Energy is the lowest possible energy that quantum systems can have. Even when everything seems perfectly still and cold, there's still a tiny bit of energy jiggling around!"
};

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handleBack = () => {
    setSelectedLetter(null);
  };

  if (selectedLetter) {
    return (
      <div className="app">
        <div className="explanation-container">
          <button className="back-button" onClick={handleBack}>
            ← Back to Alphabet
          </button>
          <div className="explanation-content">
            <div 
              className="letter-display"
              style={{ backgroundColor: quantumConcepts[selectedLetter].color }}
            >
              {selectedLetter}
            </div>
            <h1>{quantumConcepts[selectedLetter].name}</h1>
            <div className="explanation-text">
              {explanations[selectedLetter]}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Choose a Word in the Quantum Alphabet</h1>
      </header>
      
      <div className="alphabet-grid">
        {Object.entries(quantumConcepts).map(([letter, concept]) => (
          <button
            key={letter}
            className="alphabet-button"
            style={{ backgroundColor: concept.color }}
            onClick={() => handleLetterClick(letter)}
          >
            <span className="letter">{letter}</span>
            <span className="concept-name">{concept.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;