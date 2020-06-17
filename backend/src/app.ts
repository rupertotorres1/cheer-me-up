import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import passport from 'passport';
import router from './routes';
import configPassport from './config/passport';
import session from 'express-session';

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET! }));

// authentication
configPassport();
app.use(passport.initialize());
app.use(passport.session());

// static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// routing
app.use('/api/v1', router);
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname + '../../frontend/build/index.html'));
// });

module.exports = app;
