export default eventHandler((event) => {
  const host = getHeader(event, 'host') || ''
  const isDashboardSubdomain = host.startsWith('links.')

  // If accessing /dashboard on non-links subdomain, redirect to root domain
  if (event.path.startsWith('/dashboard') && !isDashboardSubdomain) {
    // Extract the root domain (e.g., vxl.to from www.vxl.to or vxl.to)
    const rootDomain = host.split(':')[0] // Remove port if present
    return sendRedirect(event, `https://${rootDomain}`, 301)
  }
})
