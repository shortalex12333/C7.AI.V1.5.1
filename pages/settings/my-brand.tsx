import { useState } from 'react';
import Head from 'next/head';
import SettingsLayout from '../../components/SettingsLayout';

interface BrandField {
  value: string;
  placeholder: string;
  prefill: string[];
}

export default function MyBrand() {
  const [brandFields, setBrandFields] = useState<Record<string, BrandField>>({
    values: {
      value: '',
      placeholder: 'What do you want to sound like?',
      prefill: ['Calm', 'Humble', 'Confident', 'Aggressive', 'Emotional', 'Visionary', 'Serious', 'Humorous']
    },
    beliefAnchor: {
      value: '',
      placeholder: 'What do you stand for?',
      prefill: ['Discipline over motivation', 'Authenticity over attention', 'No fluff']
    },
    audiencePositioning: {
      value: '',
      placeholder: 'Who do you want to attract?',
      prefill: ['Creators', 'High-performers', 'Lifestyle optimisers', 'Fitness', 'Gen Z']
    },
    personalRules: {
      value: '',
      placeholder: 'What do you avoid at all costs?',
      prefill: ['No emojis', 'Never sound salesy', 'Avoid personal stories']
    },
    contentStyle: {
      value: '',
      placeholder: 'What content styles do you lean toward?',
      prefill: ['Tactical', 'How-to\'s', 'Narrative', 'Visual', 'Carousel heavy', 'Motivational']
    },
    painPoint: {
      value: '',
      placeholder: 'What deep problem does your brand speak to?',
      prefill: ['Fear of being average', 'Lack of purpose', 'Anxiety over status', 'Social isolation', 'Lack of tribe']
    },
    desiredOutcome: {
      value: '',
      placeholder: 'What transformation do you want from your audience?',
      prefill: ['From consumer to creator', 'Broke to wealth', 'Passive to driven', 'Silent to outspoken']
    },
    brandArchetype: {
      value: '',
      placeholder: 'Which archetype best represents your brand?',
      prefill: ['The mentor', 'The creator', 'The leader', 'The outsider', 'The rebel']
    },
    contentRedFlags: {
      value: '',
      placeholder: 'What should AI never do?',
      prefill: ['No clichés', 'Don\'t sound like a coach', 'Avoid "unlock your potential"', 'No guru tone']
    },
    visualIdentity: {
      value: '',
      placeholder: 'Any specific colours, fonts, or visual tone for your brand?',
      prefill: ['Monochrome with bold accents', 'Modern serif fonts', 'Clean layout', 'No gradients', 'Brutalist elements']
    }
  });

  const handleFieldChange = (field: string, value: string) => {
    setBrandFields(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        value
      }
    }));
  };

  const handlePrefillClick = (field: string, prefill: string) => {
    setBrandFields(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        value: prev[field].value ? `${prev[field].value}, ${prefill}` : prefill
      }
    }));
  };

  return (
    <SettingsLayout>
      <Head>
        <title>My Brand - Celeste7</title>
        <meta name="description" content="Define your brand identity and voice" />
      </Head>

      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Define Your Brand
        </h1>

        <div className="space-y-8">
          {Object.entries(brandFields).map(([key, field]) => (
            <div key={key} className="bg-white rounded-lg border border-gray-200 p-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                {field.placeholder}
              </label>
              <textarea
                value={field.value}
                onChange={(e) => handleFieldChange(key, e.target.value)}
                placeholder={field.placeholder}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-y min-h-[100px]"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {field.prefill.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handlePrefillClick(key, item)}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Brand Settings
            </button>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
} 