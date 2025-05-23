import SettingsPage from '../../../components/SettingsPage';

export default function FAQPage() {
  return (
    <SettingsPage
      title="Frequently Asked Questions"
      description="Find answers to common questions about C7"
    >
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">FAQ</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This is the FAQ page. Common questions and answers about C7 will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsPage>
  );
} 