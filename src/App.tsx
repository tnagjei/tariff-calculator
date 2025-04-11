import { useState } from 'react';
import Header from './components/Header';
import TariffCalculator from './components/TariffCalculator';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 container mx-auto px-4 py-6">
        {activeTab === 'calculator' && <TariffCalculator />}
        {activeTab === 'about' && (
          <div className="calculator-container">
            <h2 className="text-2xl font-semibold mb-4">About Tariff Calculator</h2>
            <p className="text-gray-700">
              The International Tariff Calculator helps businesses and individuals calculate import/export tariffs
              for global trade between the United States and other countries.
            </p>
          </div>
        )}
        {activeTab === 'resources' && (
          <div className="calculator-container">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <p className="text-gray-700">
              Useful resources and links for international trade and tariff information.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
