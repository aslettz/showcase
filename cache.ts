import { InMemoryCache } from '@apollo/client';
import appConfigVar from './appConfigVar';

const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                appConfig: {
                    read() {
                        return appConfigVar();
                    }
                }
            }
        }
    }
});

export default cache;