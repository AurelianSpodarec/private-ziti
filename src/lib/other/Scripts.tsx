// src/components/Scripts.tsx

'use client'

import Script from 'next/script'

const segmentScript = `
!function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://ziti.io/analytics/segment/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="XjmCXlcNgbHfoQiorgvw78GBHZmcx8tT";;analytics.SNIPPET_VERSION="5.2.0";
analytics.load("XjmCXlcNgbHfoQiorgvw78GBHZmcx8tT");
analytics.page();
}}();
`

const hotjarScript = `
(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:4982317,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`

const Scripts = (): JSX.Element | undefined => {
  // const enableAllScripts = process.env.NEXT_PUBLIC_ENABLE_ALL_SCRIPTS === 'true'
  // const enableSegment = process.env.NEXT_PUBLIC_ENABLE_SEGMENT === 'true' && enableAllScripts
  // const enableHotjar = process.env.NEXT_PUBLIC_ENABLE_HOTJAR === 'true' && enableAllScripts
  const enableSegment = false
  const enableHotjar = false

  // Check if the code is running in the browser environment
  if (typeof window !== 'undefined') {
    // Check if hostname is exactly 'ziti.io'
    if (window.location.hostname === 'ziti.io') {
      return (
      <>
        {enableSegment && (
          <Script
            id="segment-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: segmentScript }}
          />
        )}
        {enableHotjar && (
          <Script
            id="hotjar-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: hotjarScript }}
          />
        )}
        {/* Add more scripts here as needed */}
      </>
      )
    } else {
      console.log('Scripts initialization skipped outside of production deployment.')
    }
  }

  // Return undefined if hostname is not 'ziti.io'
}

export default Scripts
