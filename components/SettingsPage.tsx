import { ReactNode } from 'react';
import SettingsLayout from '../pages/settings';

interface SettingsPageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SettingsPage({ title, description, children }: SettingsPageProps) {
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        <div className="border-t border-gray-200 pt-6">
          {children}
        </div>
      </div>
    </SettingsLayout>
  );
} 