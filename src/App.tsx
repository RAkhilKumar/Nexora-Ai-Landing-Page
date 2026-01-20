import { ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Custom Styles for the Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 mx-2 mt-2 md:mx-4 md:mt-4">
        <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-full px-4 py-3 md:px-6 md:py-4 flex items-center justify-between max-w-7xl mx-auto shadow-sm">
          <div className="flex items-center space-x-8">
            <div className="text-lg md:text-xl font-semibold pl-2 text-black">
              NEXORA<sup className="text-xs">®</sup>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-800 hover:text-black transition-colors text-sm font-medium">Insights</a>
              <a href="#" className="text-gray-800 hover:text-black transition-colors text-sm font-medium">Solutions</a>
              <a href="#" className="text-gray-800 hover:text-black transition-colors text-sm font-medium">Pricing</a>
            </div>
          </div>
          <div className="flex items-center space-x-3 md:space-x-4">
            <a href="#" className="hidden md:block text-gray-800 hover:text-black transition-colors text-sm font-medium">Login</a>
            <button className="bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm md:text-base">
              Try Now
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative h-[100dvh] flex flex-col justify-between overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
            style={{
              backgroundImage: 'url(/heroimage.png)',
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40 pointer-events-none" />

          {/* TOP SECTION: Title and Sub-matter */}
          {/* Reduced pt-32 to pt-24 to decrease gap from navbar */}
          <div className="relative z-10 w-full pt-24 md:pt-36 px-6 flex flex-col items-center">
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] tracking-tight text-black text-center mb-4">
              Bold Ideas That<br />Start With Vision.
            </h1>

            {/* Sub-matter: Single line on desktop (whitespace-nowrap) */}
            <p className="text-sm md:text-m text-black text-center font-medium md:whitespace-nowrap">
              We help modern brands craft digital stories that inspire action and drive results.
            </p>
          </div>

          {/* BOTTOM SECTION: CTA Button */}
          <div className="relative z-10 w-full pb-10 md:pb-16 px-6 flex flex-col items-center justify-end">
            
            {/* CTA Button with Continuous Shine */}
            <button className="relative overflow-hidden inline-flex items-center justify-center space-x-2 bg-black text-white px-8 py-3 md:px-10 md:py-4 rounded-full transition-transform hover:scale-105 duration-300 text-sm md:text-lg shadow-lg group">
              
              {/* The Shine Effect Layer */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine z-0 pointer-events-none" />

              {/* Button Content */}
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>

          </div>

        </section>
      </main>
    </div>
  );
}

export default App;