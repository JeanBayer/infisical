import { 
  IIntegrationAuth, 
  IntegrationAuth, 
  Integration,
  Bot,
  BotKey
} from '../models';
import {
  INTEGRATION_HEROKU,
  INTEGRATION_VERCEL,
  INTEGRATION_NETLIFY,
  INTEGRATION_GITHUB,
  INTEGRATION_GITLAB,
} from '../variables';

const revokeAccess = async ({
  integrationAuth,
  accessToken
}: {
  integrationAuth: IIntegrationAuth;
  accessToken: string;
}) => {
  let deletedIntegrationAuth;
  // add any integration-specific revocation logic
  switch (integrationAuth.integration) {
    case INTEGRATION_HEROKU:
      break;
    case INTEGRATION_VERCEL:
      break;
    case INTEGRATION_NETLIFY:
      break;
    case INTEGRATION_GITHUB:
      break;
    case INTEGRATION_GITLAB:
      break;
  }

  deletedIntegrationAuth = await IntegrationAuth.findOneAndDelete({
    _id: integrationAuth._id
  });

  if (deletedIntegrationAuth) {
    await Integration.deleteMany({
      integrationAuth: deletedIntegrationAuth._id
    });
  }
  
  return deletedIntegrationAuth;
};

export { revokeAccess };
