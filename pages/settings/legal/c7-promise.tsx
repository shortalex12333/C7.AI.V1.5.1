import SettingsPage from '../../../components/SettingsPage';

export default function C7PromisePage() {
  return (
    <SettingsPage
      title="C7 Promise"
      description="Learn about C7's commitment to you"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">C7 Promise</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the C7 Promise page. Information about C7's commitment to quality and service will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 