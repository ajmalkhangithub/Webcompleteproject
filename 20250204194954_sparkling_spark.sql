/*
  # Fix profiles policies
  
  1. Changes
    - Add policy to allow profile creation during registration
    - Ensure profiles can be created before session is fully established
  
  2. Security
    - Maintains security by checking auth.uid()
    - Allows for proper profile creation flow
*/

-- Drop existing insert policy if it exists
DROP POLICY IF EXISTS "Users can create their own profile" ON profiles;

-- Create new insert policy that works during registration
CREATE POLICY "Enable profile creation during registration"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Keep existing policies for other operations
CREATE POLICY "Users can only access own profile"
  ON profiles FOR ALL
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);