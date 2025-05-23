import { useRouter } from 'next/router';
import Link from 'next/link';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

const settingsPages = [
  { name: 'My Brand', path: '/settings/my-brand' },
  { name: 'Linked Accounts', path: '/settings/linkedaccounts' },
  { name: 'Data Deletion', path: '/settings/data-deletion-request' },
  { name: 'Deauthorize', path: '/settings/deauthorise-callback' },
  { name: 'Profile', path: '/settings/profile' },
  { name: 'Security', path: '/settings/security' },
  { name: 'Notifications', path: '/settings/notifications' },
  { name: 'Billing', path: '/settings/billing' },
  { name: 'API Keys', path: '/settings/api-keys' },
  { name: 'Team', path: '/settings/team' },
  { name: 'Integrations', path: '/settings/integrations' },
  { name: 'Preferences', path: '/settings/preferences' }
];

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900">Settings</h2>
              <p className="mt-1 text-sm text-gray-500">Manage your account settings</p>
            </div>
            <nav className="space-y-2">
              {settingsPages.map((page) => {
                const isActive = router.pathname === page.path;
                return (
                  <Link
                    key={page.path}
                    href={page.path}
                    className={`block font-display text-lg ${
                      isActive
                        ? 'text-gray-900 font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {page.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Main content */}
          <div className="mt-8 lg:mt-0 lg:col-span-9">
            <div className="bg-white shadow sm:rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 