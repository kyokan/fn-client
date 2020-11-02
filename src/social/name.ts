export type DomainName = {
  tld: string;
  subdomain?: string;
}

export const parseDomain = (domain = ''): DomainName => {
  const [subdomain = '', tld = ''] = domain.split('.');

  return !tld
    ? { tld: subdomain }
    : { subdomain, tld };
};

export const serializeDomain = (domain: {subdomain?: string; tld: string}): string => {
  const {subdomain, tld} = domain;


  return subdomain
      ? `${domain.subdomain}.${domain.tld}`
      : tld;
};
