export default eventHandler((event) => {
  const host = getHeader(event, 'host') || getHeader(event, 'x-forwarded-host') || ''
  console.log('[domain-router] host:', host, 'path:', event.path)

  // If subdomain is links., allow everything through
  if (host.includes('links.')) {
    console.log('[domain-router] links subdomain detected, allowing through')
    return
  }

  // If accessing /dashboard on root domain, redirect to root
  if (event.path.startsWith('/dashboard')) {
    console.log('[domain-router] redirecting dashboard access on root domain')
    return sendRedirect(event, '/', 301)
  }
})
