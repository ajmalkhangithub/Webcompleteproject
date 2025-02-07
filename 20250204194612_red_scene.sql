/*
  # Add profile creation policy
  
  1. Changes
    - Add policy to allow users to create their own profile during registration
  
  2. Security
    - Only allows users to create a profile with their own auth.uid()
    - Maintains existing RLS policies
*/

CREATE POLICY "Users can create their own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);