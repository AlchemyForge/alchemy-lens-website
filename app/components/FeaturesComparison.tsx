import { AnimatedSection } from "./AnimatedSection";

export const FeaturesComparison = () => {
  return (
    <AnimatedSection id="features" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="label-md text-teal-600 font-bold tracking-[0.18em] uppercase block mb-4">Features</span>
          <h2 className="type-display font-bold text-gray-900 leading-[0.95]">
            Everything You Need to Succeed
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-700 text-white">
                <th className="px-6 py-4 text-left font-semibold text-lg">
                  Feature
                </th>
                <th className="px-6 py-4 text-center font-semibold text-lg">
                  Alchemy Lens
                </th>
                <th className="px-6 py-4 text-center font-semibold text-lg">
                  Traditional Tools
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">
                  AI-Powered Chat Assistant
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-red-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">
                  AI Schedule Generation
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-red-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Semantic Search (Vector Search)
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-red-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Unified Project Dashboard
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-gray-500">Limited</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Automation Rules Engine
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-red-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Financial Management (Budgets, Invoices, Expenses)
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-gray-500">Separate Tools</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Photo Management with Annotations
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-gray-500">Basic Only</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Gantt Chart Scheduling
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Mobile App (iOS & Android)
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-gray-500">Varies</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Automated Report Generation
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-gray-500">Manual</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Task Management with Comments & Attachments
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Document Management
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Contact Management
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-gray-500">Basic</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Real-time Notifications
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="w-6 h-6 text-green-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-gray-500">Limited</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>
  );
};
