import SettingsPage from '../../components/SettingsPage';

export default function ProfilePage() {
  return (
    <SettingsPage
      title="My Profile"
      description="Manage your personal information and preferences"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the My Profile page. Your profile information will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 