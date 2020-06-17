import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { User } from '../types/users';

export const googleSignIn = async (req: Request, res: Response) => {
  passport.authenticate('google', { scope: ['email', 'profile'] })(req, res);
};

export const googleCallback = async (req: Request, res: Response) => {
  passport.authenticate('google', (err, user) => {
    if (err) return res.sendStatus(500);
    if (!user) return res.sendStatus(404);
    req.login(user, (err) =>
      err ? res.sendStatus(500) : res.redirect('http://localhost:3000')
    );
  })(req, res);
};

// Middleware function to ensure user is authenticated before accessing certain routes
// probably doesn't belong here?
export const ensureAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    // TODO: doesn't work for now
    // res.redirect('/api/v1/auth/google');
    res.sendStatus(401);
  }
};
