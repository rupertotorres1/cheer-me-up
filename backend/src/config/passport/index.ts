import GoogleStrategy from './GoogleStrategy';
import passport from 'passport';
import { User } from '../../types/users';
import { getUserById } from '../../services/users';

const configPassport = () => {
  passport.use(GoogleStrategy);

  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: string, done) => {
    return getUserById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });
};

export default configPassport;
