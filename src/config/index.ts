interface IDBAuth {
  username: string;
  password: string;
}

export interface ICouchDB {
  auth: IDBAuth;
}

const config = {
  name: process.env.REACT_APP_NAME,
  couchDBUrl: process.env.REACT_APP_DB_URL || "localhost",
  couchDBAuth: {
    username: process.env.REACT_APP_DB_USERNAME || "bukanadmin",
    password: process.env.REACT_APP_DB_PASSWORD || "password",
  },
  version: process.env.REACT_APP_VERSION,
};

export default config;
