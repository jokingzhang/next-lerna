import nextApp from '@shared/server_12.1/modules/nextjs/app';
import conf from './conf';

const { port } = conf;
const { startServer } = nextApp;

startServer({ port });
