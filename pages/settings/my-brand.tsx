import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function MyBrand() {
  const [brandName, setBrandName] = useState('');
  const [brandDescription, setBrandDescription] = useState('');
  const [brandLogo, setBrandLogo] = useState<File | null>(null);
  const [brandColors, setBrandColors] = useState({
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#3B82F6'
  });
  const [brandVoice, setBrandVoice] = useState('professional');
  const [brandValues, setBrandValues] = useState<string[]>([]);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setBrandLogo(event.target.files[0]);
    }
  };

  const handleColorChange = (colorType: string, value: string) => {
    setBrandColors(prev => ({
      ...prev,
      [colorType]: value
    }));
  };

  const handleBrandValueChange = (value: string) => {
    if (!brandValues.includes(value)) {
      setBrandValues([...brandValues, value]);
    }
  };

  const removeBrandValue = (value: string) => {
    setBrandValues(brandValues.filter(v => v !== value));
  };

  return (
    <>
      <Head>
        <title>My Brand - Celeste7</title>
        <meta name="description" content="Manage your brand settings and preferences" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-8">
                My Brand
              </h1>

              <div className="space-y-8">
                {/* Brand Identity Section */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Brand Identity
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Brand Name */}
                    <div>
                      <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
                        Brand Name
                      </label>
                      <input
                        type="text"
                        id="brandName"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Enter your brand name"
                      />
                    </div>

                    {/* Brand Description */}
                    <div>
                      <label htmlFor="brandDescription" className="block text-sm font-medium text-gray-700">
                        Brand Description
                      </label>
                      <textarea
                        id="brandDescription"
                        value={brandDescription}
                        onChange={(e) => setBrandDescription(e.target.value)}
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Describe your brand's mission and values"
                      />
                    </div>

                    {/* Brand Logo Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Brand Logo
                      </label>
                      <div className="mt-1 flex items-center space-x-4">
                        <div className="h-24 w-24 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                          {brandLogo ? (
                            <Image
                              src={URL.createObjectURL(brandLogo)}
                              alt="Brand logo preview"
                              width={96}
                              height={96}
                              className="rounded-lg object-contain"
                            />
                          ) : (
                            <span className="text-gray-400">No logo</span>
                          )}
                        </div>
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="hidden"
                            id="logo-upload"
                          />
                          <label
                            htmlFor="logo-upload"
                            className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Upload Logo
                          </label>
                          <p className="mt-1 text-xs text-gray-500">
                            PNG, JPG, GIF up to 2MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Colors Section */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Brand Colors
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">
                        Primary Color
                      </label>
                      <div className="mt-1 flex items-center space-x-2">
                        <input
                          type="color"
                          id="primaryColor"
                          value={brandColors.primary}
                          onChange={(e) => handleColorChange('primary', e.target.value)}
                          className="h-8 w-8 rounded-md border border-gray-300"
                        />
                        <input
                          type="text"
                          value={brandColors.primary}
                          onChange={(e) => handleColorChange('primary', e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">
                        Secondary Color
                      </label>
                      <div className="mt-1 flex items-center space-x-2">
                        <input
                          type="color"
                          id="secondaryColor"
                          value={brandColors.secondary}
                          onChange={(e) => handleColorChange('secondary', e.target.value)}
                          className="h-8 w-8 rounded-md border border-gray-300"
                        />
                        <input
                          type="text"
                          value={brandColors.secondary}
                          onChange={(e) => handleColorChange('secondary', e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="accentColor" className="block text-sm font-medium text-gray-700">
                        Accent Color
                      </label>
                      <div className="mt-1 flex items-center space-x-2">
                        <input
                          type="color"
                          id="accentColor"
                          value={brandColors.accent}
                          onChange={(e) => handleColorChange('accent', e.target.value)}
                          className="h-8 w-8 rounded-md border border-gray-300"
                        />
                        <input
                          type="text"
                          value={brandColors.accent}
                          onChange={(e) => handleColorChange('accent', e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Voice Section */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Brand Voice
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="brandVoice" className="block text-sm font-medium text-gray-700">
                        Select Brand Voice
                      </label>
                      <select
                        id="brandVoice"
                        value={brandVoice}
                        onChange={(e) => setBrandVoice(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      >
                        <option value="professional">Professional</option>
                        <option value="casual">Casual</option>
                        <option value="friendly">Friendly</option>
                        <option value="authoritative">Authoritative</option>
                        <option value="humorous">Humorous</option>
                      </select>
                    </div>

                    {/* Brand Values */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Brand Values
                      </label>
                      <div className="mt-2">
                        <div className="flex flex-wrap gap-2">
                          {brandValues.map((value) => (
                            <span
                              key={value}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                            >
                              {value}
                              <button
                                type="button"
                                onClick={() => removeBrandValue(value)}
                                className="ml-2 inline-flex items-center p-0.5 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                              >
                                <span className="sr-only">Remove value</span>
                                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </span>
                          ))}
                        </div>
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Add a brand value"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                const input = e.target as HTMLInputElement;
                                handleBrandValueChange(input.value);
                                input.value = '';
                              }
                            }}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 