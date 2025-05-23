import SettingsPage from '../../../components/SettingsPage';

export default function BillingAddressPage() {
  return (
    <SettingsPage
      title="Billing Address"
      description="Manage your billing address information"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Billing Address</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the Billing Address page. Your billing address information will be managed here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 