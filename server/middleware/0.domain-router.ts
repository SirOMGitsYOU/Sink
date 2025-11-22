export default eventHandler((event) => {
  const host = getHeader(event, 'host') || ''
  const isDashboardSubdomain = host.startsWith('links.')

  // If accessing /dashboard on non-links subdomain, redirect to root
  if (event.path.startsWith('/dashboard') && !isDashboardSubdomain) {
    return sendRedirect(event, '/', 301)
  }
})
