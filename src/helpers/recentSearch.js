const KEY = 'recentSearch'

export function getRecentSearch() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch (err) {
    return []
  }
}

export function addRecentSearch(value) {
  const recent = getRecentSearch()
  const newRecent = [...new Set([value, ...recent])]
  localStorage.setItem(KEY, JSON.stringify(newRecent))
  return newRecent
}

export function removeRecentSearch(value) {
  const recent = getRecentSearch()
  const newRecent = recent.filter(item => item !== value)
  localStorage.setItem(KEY, JSON.stringify(newRecent))
  return newRecent
}
