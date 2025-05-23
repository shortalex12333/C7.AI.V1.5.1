import React from 'react';

const UserDataDeletion = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Data Deletion Request</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg mb-4">
          If you wish to request deletion of your data from our platform, please contact us at{' '}
          <a href="mailto:contact@ventruk.com" className="text-blue-600 hover:text-blue-800">
            contact@ventruk.com
          </a>{' '}
          with your account details.
        </p>
        <p className="text-lg">
          We will process your request in accordance with our{' '}
          <a href="/privacy" className="text-blue-600 hover:text-blue-800">
            privacy policy
          </a>.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">What to Include in Your Request</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your full name</li>
          <li>Email address associated with your account</li>
          <li>Account username (if applicable)</li>
          <li>Reason for data deletion (optional)</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDataDeletion; 