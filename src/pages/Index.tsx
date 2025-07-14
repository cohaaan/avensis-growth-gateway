
import { ArrowRight, Target, TrendingUp, Users, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Logo className="h-10 w-auto text-slate-900" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors">Our Story</a>
              <a href="#focus" className="text-slate-700 hover:text-slate-900 transition-colors">What We Back</a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">Let's Talk</a>
              <Button className="bg-slate-900 hover:bg-slate-800">
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              We back the bold ones
              <span className="text-blue-600 block">building tomorrow</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Avensis Financial, we don't just write checks—we roll up our sleeves. 
              Based in New Jersey, we partner with founders who aren't afraid to challenge 
              the status quo and create something that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                See What We're About
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3">
                Meet Our Companies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                We've been where you are
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Every entrepreneur we back reminds us of ourselves—hungry, determined, and maybe a little crazy. 
                We've walked the path of building something from nothing, which is why we get it when you say 
                "this will change everything" at 2 AM over coffee.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our approach is simple: find brilliant people solving real problems, then do everything 
                we can to help them succeed. No corporate speak, no endless meetings—just honest partnership 
                from day one.
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Real Partnership</h3>
                  <p className="text-slate-600">Not just capital, but genuine collaboration</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Early Stage Focus</h3>
                <p className="text-slate-600">
                  We love getting in early when the idea is still rough around the edges but the potential is enormous.
                </p>
              </Card>

              <Card className="border-0 shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Hands-On Support</h3>
                <p className="text-slate-600">
                  From late-night strategy calls to connecting you with the right people—we're in the trenches with you.
                </p>
              </Card>

              <Card className="border-0 shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Long-Term Thinking</h3>
                <p className="text-slate-600">
                  We're not looking for quick flips. We want to build something that lasts and makes a real impact.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section id="focus" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              The spaces that get us excited
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't chase trends—we look for founders tackling big problems in ways that haven't been done before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-3">Tech That Actually Helps</h3>
              <p className="text-slate-600">
                Software that solves real problems for real people, not just another app.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-3">Healthcare Revolution</h3>
              <p className="text-slate-600">
                Making healthcare more accessible, affordable, or just plain better.
              </p>
            </div>


            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-3">Everyday Innovation</h3>
              <p className="text-slate-600">
                Consumer products that make life genuinely better, not just different.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-3">Building Better</h3>
              <p className="text-slate-600">
                Industrial tech that's changing how we make and move things.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-3">Planet-First Business</h3>
              <p className="text-slate-600">
                Clean energy and sustainability that actually works at scale.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Don't see your industry? That's okay—we care more about the founder and the problem than the category.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Think we might be a fit?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're pre-revenue or ready to scale, we'd love to hear what you're building. 
              Seriously—even if it's just an idea on a napkin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Drop us a line</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-400 mr-4 mt-1" />
                  <div>
                    <a href="mailto:info@avensisfinancial.com" className="text-slate-300 hover:text-white transition-colors text-lg">
                      info@avensisfinancial.com
                    </a>
                    <p className="text-slate-400 text-sm mt-1">
                      We read every email personally (no interns, promise)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-400 mr-4 mt-1" />
                  <div>
                    <span className="text-slate-300 text-lg">New Jersey, United States</span>
                    <p className="text-slate-400 text-sm mt-1">
                      But we back great companies everywhere
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <Logo className="h-8 w-auto text-white mb-4" />
              <p className="text-slate-400 mb-4 max-w-md">
                A New Jersey-based venture capital firm backing early-stage companies 
                with big ideas and bigger ambitions.
              </p>
              <p className="text-sm text-slate-500">© 2024 Avensis Financial. All rights reserved.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legal Stuff</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
