interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="bg-primary-light text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2L2 6V22H18V18H22V2H6Z" fill="#4CAF50" stroke="#388E3C" strokeWidth="1" />
              <path d="M6 12H14M6 16H12M6 8H14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 6V18M14 10V18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h1 className="text-xl font-semibold">Tariff Calculator</h1>
          </div>
          <div className="text-center">✨ Now AI Powered ✨</div>
          <nav className="flex space-x-6">
            <button
              className={`py-2 px-1 ${activeTab === 'calculator' ? 'border-b-2 border-white font-medium' : 'text-white/80 hover:text-white'}`}
              onClick={() => setActiveTab('calculator')}
            >
              Calculator
            </button>
            <button
              className={`py-2 px-1 ${activeTab === 'about' ? 'border-b-2 border-white font-medium' : 'text-white/80 hover:text-white'}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button
              className={`py-2 px-1 ${activeTab === 'resources' ? 'border-b-2 border-white font-medium' : 'text-white/80 hover:text-white'}`}
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
