import Head from 'next/head';
import Link from 'next/link';

export default function SuccessfulLink() {
  return (
    <>
      <Head>
        <title>Account Linked Successfully - Celeste7</title>
        <meta name="description" content="Your Facebook account has been successfully linked" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Account Linked Successfully
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <p>Your Facebook account has been successfully linked to your Celeste7 account.</p>
              </div>
              <div className="mt-5">
                <Link
                  href="/linked-accounts"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Return to Linked Accounts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 