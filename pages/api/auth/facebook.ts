import type { NextApiRequest, NextApiResponse } from 'next';
import { facebookConfig } from '../../../config/facebook';

type ResponseData = {
  success: boolean;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).json({ success: false, error: 'Access token is required' });
  }

  try {
    // Verify the access token with Facebook
    const response = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error('Failed to verify Facebook token');
    }

    const userData = await response.json();

    // Here you would typically:
    // 1. Check if the user exists in your database
    // 2. Create or update the user record
    // 3. Create a session or JWT token
    // 4. Store the Facebook access token securely

    return res.status(200).json({
      success: true,
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
      },
    });
  } catch (error) {
    console.error('Facebook authentication error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to authenticate with Facebook',
    });
  }
} 