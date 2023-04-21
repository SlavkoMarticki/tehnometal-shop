import algoliasearch from 'algoliasearch';

const client = algoliasearch('V8QPFEFAP3', '676db738a90d6941f7538b35ff3d4c68'); // APP_ID , API_KEY
export const searchIndex = client.initIndex('tehnometal-shop');
