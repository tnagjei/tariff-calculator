import { useState } from 'react';

// Sample country list
const COUNTRIES = [
  'United States',
  'Canada',
  'Mexico',
  'China',
  'Japan',
  'South Korea',
  'United Kingdom',
  'Germany',
  'France',
  'India',
  'Brazil',
  'Australia',
];

const TariffCalculator = () => {
  const [destinationCountry, setDestinationCountry] = useState('');
  const [costOfGoods, setCostOfGoods] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [result, setResult] = useState<null | { rate: number; amount: number }>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, we would call an API to get the actual tariff rates
    // For this demo, we'll use a simple random calculation
    const tariffRate = Math.random() * 0.25; // Random tariff rate between 0-25%
    const cost = parseFloat(costOfGoods) || 0;
    const tariffAmount = cost * tariffRate;

    setResult({
      rate: tariffRate * 100,
      amount: tariffAmount
    });
  };

  return (
    <div className="calculator-container">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">International Tariff Calculator</h2>
        <p className="text-gray-600">Calculate tariffs for global trade between the U.S. and other countries</p>
      </div>

      <form onSubmit={handleCalculate}>
        <div className="mb-6">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Destination Country
          </label>
          <select
            id="country"
            className="select-field"
            value={destinationCountry}
            onChange={(e) => setDestinationCountry(e.target.value)}
          >
            <option value="">Select a country</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-500 mt-1">
            Select the country where goods will be exported to
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700 mb-1">
            Cost of Goods (USD)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="cost"
              className="input-field pl-7"
              placeholder="0.00"
              value={costOfGoods}
              onChange={(e) => setCostOfGoods(e.target.value)}
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Enter the total cost of goods in US Dollars
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Product Description (Optional)
          </label>
          <input
            type="text"
            id="description"
            className="input-field"
            placeholder="e.g. Electronics, automotive parts, textiles"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">
            Describe your product to get more detailed AI analysis
          </p>
        </div>

        <button type="submit" className="btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6 2H4C3.44772 2 3 2.44772 3 3V17C3 17.5523 3.44772 18 4 18H16C16.5523 18 17 17.5523 17 17V3C17 2.44772 16.5523 2 16 2H14M6 2C6 1.44772 6.44772 1 7 1H13C13.5523 1 14 1.44772 14 2M6 2C6 2.55228 6.44772 3 7 3H13C13.5523 3 14 2.55228 14 2M5 8H15M5 12H15M8 5H12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none" />
          </svg>
          Calculate Tariffs
        </button>
      </form>

      {result && (
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Tariff Calculation Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Estimated Tariff Rate:</p>
              <p className="text-xl font-semibold">{result.rate.toFixed(2)}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Estimated Tariff Amount:</p>
              <p className="text-xl font-semibold">${result.amount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TariffCalculator;
