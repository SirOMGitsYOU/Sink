export default eventHandler((event) => {
  const host = getHeader(event, 'host') || getHeader(event, 'x-forwarded-host') || ''

  // If subdomain is links., allow everything through
  if (host.includes('links.')) {
    return
  } // If accessing /dashboard on root domain, redirect to root
  else if (!host.includes('links.') && event.path.startsWith('/dashboard')) {
    return sendRedirect(event, '/', 301)
  }
})
