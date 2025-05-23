import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { name: 'My Profile', path: '/settings/profile' },
        { name: 'Linked Accounts', path: '/settings/linked-accounts' },
        { name: 'Brand Values', path: '/settings/brand-values' },
        { name: 'Target Audience', path: '/settings/target-audience' },
      ],
    },
    {
      title: 'Competitors',
      items: [
        { name: 'Competitor Settings', path: '/settings/competitors' },
        { name: 'Add Competitor', path: '/settings/competitors/add' },
        { name: 'Delete Competitor', path: '/settings/competitors/delete' },
        { name: 'Start Competitor Sync', path: '/settings/competitors/sync' },
      ],
    },
    {
      title: 'Billing',
      items: [
        { name: 'Billing Address', path: '/settings/billing/address' },
        { name: 'Payment History', path: '/settings/billing/history' },
        { name: 'Edit Payment Plan', path: '/settings/billing/plan' },
      ],
    },
    {
      title: 'Trust',
      items: [
        { name: 'C7 Data Collection', path: '/settings/trust/data-collection' },
        { name: 'Our Mission', path: '/settings/trust/mission' },
        { name: 'FAQ', path: '/settings/trust/faq' },
        { name: 'Support', path: '/settings/trust/support' },
      ],
    },
    {
      title: 'Help & Contact',
      items: [
        { name: 'Help & Contact', path: '/settings/help' },
        { name: 'Feedback', path: '/settings/feedback' },
        { name: 'Report an Issue', path: '/settings/report-issue' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { name: 'Terms & Conditions', path: '/settings/legal/terms' },
        { name: 'Privacy Policy', path: '/settings/legal/privacy' },
        { name: 'C7 Promise', path: '/settings/legal/promise' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <nav className="space-y-1">
              {settingsSections.map((section) => (
                <div key={section.title} className="mb-8">
                  <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <div className="mt-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                          router.pathname === item.path
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <main className="mt-8 lg:mt-0 lg:col-span-9">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 