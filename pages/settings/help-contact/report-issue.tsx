import SettingsPage from '../../../components/SettingsPage';

export default function ReportIssuePage() {
  return (
    <SettingsPage
      title="Report Issue"
      description="Report problems or issues with C7"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Report Issue</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the Report Issue page. You can report any problems or issues you encounter with C7 here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 