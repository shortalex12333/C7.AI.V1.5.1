import SettingsPage from '../../components/SettingsPage';

export default function TargetAudiencePage() {
  return (
    <SettingsPage
      title="Target Audience"
      description="Configure your target audience demographics and preferences"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Audience Settings</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the Target Audience page. Your audience demographics and preferences will be managed here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 