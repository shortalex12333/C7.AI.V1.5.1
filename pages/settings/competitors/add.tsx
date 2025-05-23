import SettingsPage from '../../../components/SettingsPage';

export default function AddCompetitorPage() {
  return (
    <SettingsPage
      title="Add Competitor"
      description="Add a new competitor to track and analyze"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Competitor</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the Add Competitor page. You can add new competitors to track here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 