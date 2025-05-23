import SettingsPage from '../../components/SettingsPage';

export default function BrandValuesPage() {
  return (
    <SettingsPage
      title="Brand Values"
      description="Define and manage your brand's core values and messaging"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Brand Values</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the Brand Values page. Your brand's core values and messaging will be configured here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 