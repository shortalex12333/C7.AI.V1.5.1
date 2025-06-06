import SettingsPage from '../../../components/SettingsPage';

export default function DataCollectionPage() {
  return (
    <SettingsPage
      title="C7 Data Collection"
      description="Learn about how we collect and use your data"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Data Collection Policy</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the C7 Data Collection page. Information about our data collection practices will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 