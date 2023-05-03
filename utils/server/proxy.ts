import { HttpsProxyAgent } from 'hpagent';

const OPENAI_API_PROXY = process.env.OPENAI_API_PROXY;

export const httpsProxyAgent = OPENAI_API_PROXY
  ? new HttpsProxyAgent({
      keepAlive: true,
      timeout: 30000,
      keepAliveMsecs: 1000,
      maxSockets: 256,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      proxy: OPENAI_API_PROXY,
    })
  : undefined;
