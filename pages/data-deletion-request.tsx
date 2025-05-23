import Head from 'next/head';
import Link from 'next/link';

export default function DataDeletionRequest() {
  return (
    <>
      <Head>
        <title>Data Deletion Request - Celeste7</title>
        <meta name="description" content="Request deletion of your data from Celeste7" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Data Deletion Request
              </h1>

              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600 mb-4">
                  At Celeste7, we respect your privacy and your right to control your personal data. 
                  This page explains how you can request the deletion of your data from our platform.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  How to Request Data Deletion
                </h2>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 mb-2">
                    To request the deletion of your data, please send an email to{' '}
                    <a 
                      href="mailto:contact@ventruk.com" 
                      className="text-blue-600 hover:text-blue-800"
                    >
                      contact@ventruk.com
                    </a>
                    {' '}with the following information:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Subject line: "Data Deletion Request"</li>
                    <li>Your full name</li>
                    <li>Email address associated with your account</li>
                    <li>User ID or username (if available)</li>
                    <li>Platform through which you accessed our service (e.g., Facebook, TikTok, etc.)</li>
                    <li>Reason for deletion (optional)</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  What Happens After Your Request
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Once we receive your request, we will:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Verify your identity to protect your privacy</li>
                    <li>Process your request within 30 days</li>
                    <li>Delete your personal data from our systems</li>
                    <li>Send you a confirmation email once the deletion is complete</li>
                  </ol>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Data Retention
                </h2>

                <p className="text-gray-600 mb-4">
                  Please note that we may retain certain information for legal, security, or business purposes, 
                  as required by applicable laws and regulations. This may include:
                </p>

                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>Records of transactions for tax and accounting purposes</li>
                  <li>Information required to prevent fraud or abuse</li>
                  <li>Data necessary to comply with legal obligations</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
                  <p className="text-blue-700">
                    For more information about how we handle your data, please review our{' '}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 