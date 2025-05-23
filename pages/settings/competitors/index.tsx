import SettingsPage from '../../../components/SettingsPage';

export default function CompetitorsPage() {
  return (
    <SettingsPage
      title="Competitor Settings"
      description="Manage your competitor tracking and analysis settings"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Competitor Management</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the Competitor Settings page. Your competitor tracking and analysis settings will be configured here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 