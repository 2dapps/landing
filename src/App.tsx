import { ArrowRight, Code2, Smartphone, Zap, Mail, ExternalLink, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="w-7 h-7" />
              <span className="text-xl font-semibold">2dapps</span>
            </div>
            <a
              href="https://daniakash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <span>by DaniAkash</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-sm bg-white/5">
              <Sparkles className="w-4 h-4" />
              <span className="text-gray-300">Coming Soon</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              Crafting Apps
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                That Matter
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into powerful, user-centric applications.
              Expert development services tailored to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a
                href="mailto:contact@2dapps.com"
                className="group inline-flex items-center justify-center space-x-2 bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://daniakash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 border border-white/10 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                <span>About the Creator</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/5 transition-all duration-200">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile First</h3>
              <p className="text-gray-400 leading-relaxed">
                Beautiful, responsive applications optimized for every device and screen size.
              </p>
            </div>

            <div className="group border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/5 transition-all duration-200">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/20">
                  <Zap className="w-6 h-6 text-pink-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Built with modern technologies for blazing speed and optimal performance.
              </p>
            </div>

            <div className="group border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/5 transition-all duration-200">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/20">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-400 leading-relaxed">
                Maintainable, scalable architecture with industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-400">
              End-to-end development services for modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Web Applications',
              'Mobile Applications',
              'Progressive Web Apps',
              'API Development & Integration',
              'Custom Software Solutions',
              'Technical Consulting'
            ].map((service, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-lg p-5 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-pink-400"></div>
                  <span className="text-gray-200">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative border border-white/10 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-pink-500/10 to-purple-500/10"></div>
            <div className="relative text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Let's discuss your project and bring your ideas to reality.
              </p>
              <div className="pt-4">
                <a
                  href="mailto:contact@2dapps.com"
                  className="inline-flex items-center space-x-2 bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Code2 className="w-5 h-5" />
              <span className="text-sm">2dapps</span>
            </div>
            <div className="text-gray-500 text-sm">
              Created by{' '}
              <a
                href="https://daniakash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                DaniAkash
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
