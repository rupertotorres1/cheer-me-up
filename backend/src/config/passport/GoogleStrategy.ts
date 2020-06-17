import {
  Strategy,
  StrategyOptions,
  Profile,
  VerifyCallback,
} from 'passport-google-oauth20';
import { getUserByProviderId, createUser } from '../../services/users';
import { User } from '../../types/users';

const verifyHandler = async (
  _accessToken: string,
  _refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => {
  let user: User = await getUserByProviderId(profile.id);
  if (!user) {
    const userId = await createUser(profile.id, profile.displayName);
    user = {
      id: userId,
      providerId: profile.id,
      name: profile.displayName,
    };
  }
  return done(undefined, user);
};

const options: StrategyOptions = {
  callbackURL: '/api/v1/auth/google/callback',
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  scope: ['email', 'profile'],
};

const strategy = new Strategy(options, verifyHandler);

export default strategy;
