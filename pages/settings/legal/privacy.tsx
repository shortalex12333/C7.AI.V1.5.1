import SettingsPage from '../../../components/SettingsPage';

export default function PrivacyPage() {
  return (
    <SettingsPage
      title="Privacy Policy"
      description="Read C7's privacy policy"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Privacy Policy</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the Privacy Policy page. C7's privacy policy and data handling practices will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 