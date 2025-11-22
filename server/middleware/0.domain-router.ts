export default eventHandler((event) => {
  const host = getHeader(event, 'host') || getHeader(event, 'x-forwarded-host') || ''
  const isDashboardSubdomain = host.includes('links.')

  // If accessing /dashboard on non-links subdomain, redirect to root
  if (event.path.startsWith('/dashboard') && host && !isDashboardSubdomain) {
    return sendRedirect(event, '/', 301)
  }
})
