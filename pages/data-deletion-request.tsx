import Head from 'next/head';
import Link from 'next/link';

export default function DataDeletionRequest() {
  return (
    <>
      <Head>
        <title>Data Deletion Request - Celeste7</title>
        <meta name="description" content="Request data deletion from Celeste7" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                Data Deletion Request
              </h1>

              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600 mb-6">
                  We respect your privacy and your right to control your personal data. 
                  If you would like to request the deletion of your data from our systems, 
                  please follow the process below.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">
                        How to Request Data Deletion
                      </h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>
                          To request the deletion of your data, please send an email to{' '}
                          <a href="mailto:contact@ventruk.com" className="font-medium underline">
                            contact@ventruk.com
                          </a>
                          {' '}with the following information:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Subject line: "Data Deletion Request"</li>
                          <li>Your full name</li>
                          <li>Email address associated with your account</li>
                          <li>Reason for deletion (optional)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    What Happens Next?
                  </h2>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                    <li>We will acknowledge your request within 48 hours</li>
                    <li>We will verify your identity to protect your data</li>
                    <li>We will process your deletion request within 30 days</li>
                    <li>We will send you a confirmation email once completed</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        Important Information
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          Please note that some information may be retained for legal or regulatory purposes. 
                          We will inform you if any data must be kept and the reason for retention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 