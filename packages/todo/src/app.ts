import nextApp from '@shared/server/modules/nextjs/app';
import conf from './conf';

const { port } = conf;
const { startServer } = nextApp;

startServer({ port });
