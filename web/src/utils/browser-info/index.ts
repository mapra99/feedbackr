import invariant from 'tiny-invariant';
import { headers } from 'next/headers'
import useragent from 'express-useragent';

export default function browserInfo() {
  const headersList = headers()
  const userAgentHeader = headersList.get('user-agent');
  invariant(userAgentHeader, 'user-agent header is missing');

  const userAgent = useragent.parse(userAgentHeader);

  return {
    browser: userAgent.browser,
    isMobile: userAgent.isMobile,
    isPhone: userAgent.isMobile && !userAgent.isTablet,
    isTablet: userAgent.isTablet
  };
}
