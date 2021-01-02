import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yml';

export default () => {
  return {
    ...yaml.load(readFileSync(join(YAML_CONFIG_FILENAME), 'utf8')),
    serviceAccountConfig: {
      type: 'service_account',
      project_id: 'quickstart-1604992042012',
      private_key_id: '7dccb77ab932165007b2e976bef90f3e2d8513c6',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDOAFYdup0MGN69\nqWaXWjDi7HyxYGuRYZNTrY1vp10EU089E6OMzifxbmUvtEbHvzUPkFDsdKc5iuOc\nVcAwqPCl1k4G0XiVYnmqFFPiiR/27dIPHotnzeJ1Kgubp6v5dAP64/RDGLxQZMLW\nCyDZ5swzqbxFyDYZOM1DsRa3Szo8PRLljYZQrWoyNHrCTMD0nUnuvJnLvn/ROonw\nVBCbLb0UHAmylE5b13QoUGMI8L5xc+SJMwOCPyQWbQXtgfwYTvR9QFNiHafdKKwm\n5VsXASiqrgizcNNBGXTDIWhRR2xqu3crWxp0ut7ySDk9dzFz7ZCvMz7bNthU+D/U\n9KcmUvhXAgMBAAECggEAGTfzUupghXWZ9xAA7jBtYapfzXsnUAHo/kp10SBlA72L\nKsf3sqoeO7EvE/r220cuILyjG39gZWv6V04sHAjihPrKTI1iPK90g3y/lDEDR8Bv\ngchUep26xmsiRqjtJbmtLw6u/XPOwezD6V4tZF+bygtScByFeur4Pfw08rVz6KG8\n3/5V1GI4M/LHB9GQnQAyw50n/KvkPlvenOFMIsE0QLkCx7pHkFWDQmS5fqll7GII\nJcXaCH2JiJisMOYk+AjWy2E0YiD+lthU0oZ2lqijbYqwtNFX3MnaSFvWRlwIVWXc\nWDN5Oe5OfA5T57M0u/shdq1ABjZXY9xNCdmSWqoWQQKBgQD/E+cBux2Fy2x8dY04\nrgB+kvOttgQPFR8q3giu4BNXA5k/WDbgV7jnNVcSj2xQV1iWOYDy0uhXwUJl05zG\nE3maLSScZXrSv9k1ul5fO3MmMiI5noQjY5XyBbYwrf3hh7M4x67hN32uhCrnpB76\n0DJ8Mb9ealej5J6O/o5Jza/M9wKBgQDOvwJjL2wSiRVOyQs0d3hUqnD2v2uZBuVy\ngvckuHnN3UorTHN4FFuzJXQJf5VSos2XpIondN1rGpu3Do6l6lsNyjihmQGkE5zh\n9ZiX8u+tltLD1XUa4aOThFTD/vtYXMGLEBxeFJIlywmRmyjpWg8Uj1zAtZczWPix\nYAhbO5Y3oQKBgA8p57m6ne6uQSzE8DhGX9Eme0YAZA1hfBDYUjvTJlMt65ZQcDK2\nBE/6Y8q+q/m6t5F2qavFzfopiwDyq4c68SexN1P01HBi507CXYnbxuSmZlJ2kfRo\nnylcHZCXR1h48LaXaFYLLnWJdeN/ZjgS2G15p569Q6iClsp5Z4wLpj/RAoGAWYQq\nrHdj+8KPD0XNLDJuT3pc3vmSxPdPcX1zNNsLIi+mZYj8lgl6it60l0g+h0Emc3oy\nt1LKbA1hTqlm6j/GnPnp+04cf8ZeLxf/sgrl6+tZ5qENy03XXY/2g8ZrXZ8LzgJz\nxehyPxriUcE0vZTY4rYQGwCFLx5ez64c8COkrwECgYBl4KiqAyQApDaC6R1TdQBq\nN3Ov1/xLMwj+7IHxVXFWlZYFaoqUqmVLRw7J2y/ovPPwoOl26PW2SkixAgCMWolw\nxG+KQEL51itje+f8yXNiwfelFPsK5PRekuJnZMevBvXhZS+q5TQFpAoHLOedh5/W\n7m0IAQ3DgjUXSrl8DvRmdQ==\n-----END PRIVATE KEY-----\n',
      client_email:
        'sheets-bot@quickstart-1604992042012.iam.gserviceaccount.com',
      client_id: '108218520490673029007',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/sheets-bot%40quickstart-1604992042012.iam.gserviceaccount.com',
    },
  };
};

export * from './constants';
