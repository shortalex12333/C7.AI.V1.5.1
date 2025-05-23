import SettingsPage from '../../../components/SettingsPage';

export default function PaymentPlanPage() {
  return (
    <SettingsPage
      title="Edit Payment Plan"
      description="Manage your subscription and payment plan"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Payment Plan</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the Edit Payment Plan page. Your subscription and payment plan can be modified here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 