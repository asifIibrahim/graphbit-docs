export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Graphbit</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Build powerful AI agents and multi-agent systems with Graphbit -
              the modern agentic AI framework for developers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Documentation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/agents"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Agents
                </a>
              </li>
              <li>
                <a
                  href="/graphs"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Graphs
                </a>
              </li>
              <li>
                <a
                  href="/examples"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="/model-providers"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Model Providers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/common-tools"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="/multi-agent"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Multi-Agent
                </a>
              </li>
              <li>
                <a
                  href="/model-context"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Model Context
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © 2024 Graphbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
