
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">Avensis Financial</h1>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-700">
                By accessing and using the Avensis Financial website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Definitions</h2>
              <p className="text-slate-700 mb-4">For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>"Company" (referred to as "we," "us," or "our") refers to Avensis Financial</li>
                <li>"Service" refers to the website and investment services provided by Avensis Financial</li>
                <li>"User" or "you" refers to the individual accessing or using the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Use License</h2>
              <p className="text-slate-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on Avensis Financial's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Investment Disclaimer</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                <p className="text-slate-700 font-medium mb-2">⚠️ Important Investment Disclaimer</p>
                <p className="text-slate-700">
                  The information provided on this website is for informational purposes only and does not constitute investment advice, financial advice, trading advice, or any other sort of advice. Investment in private equity and venture capital involves substantial risk and is suitable only for sophisticated investors.
                </p>
              </div>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Past performance does not guarantee future results</li>
                <li>All investments carry the risk of loss</li>
                <li>You should consult with qualified financial advisors before making investment decisions</li>
                <li>We do not guarantee the accuracy or completeness of any information provided</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Disclaimer</h2>
              <p className="text-slate-700">
                The materials on Avensis Financial's website are provided on an 'as is' basis. Avensis Financial makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitations</h2>
              <p className="text-slate-700">
                In no event shall Avensis Financial or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Avensis Financial's website, even if Avensis Financial or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Accuracy of Materials</h2>
              <p className="text-slate-700">
                The materials appearing on Avensis Financial's website could include technical, typographical, or photographic errors. Avensis Financial does not warrant that any of the materials on its website are accurate, complete, or current. Avensis Financial may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Links</h2>
              <p className="text-slate-700">
                Avensis Financial has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Avensis Financial of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Privacy Policy</h2>
              <p className="text-slate-700">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Prohibited Uses</h2>
              <p className="text-slate-700 mb-4">You may not use our Service:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Governing Law</h2>
              <p className="text-slate-700">
                These terms and conditions are governed by and construed in accordance with the laws of New Jersey and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Contact Information</h2>
              <p className="text-slate-700">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-700">
                  <strong>Avensis Financial</strong><br />
                  Email: <a href="mailto:info@avensisfinancial.com" className="text-blue-600 hover:underline">info@avensisfinancial.com</a><br />
                  Location: New Jersey, United States
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Changes to Terms</h2>
              <p className="text-slate-700">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
