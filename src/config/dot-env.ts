import * as dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  default:
    path = `${__dirname}../../.env.development`;
}
console.log(path)
dotenv.config({ path: path });
console.log(process.env)

export default{
    PORT: process.env.PORT || 4001,
};
