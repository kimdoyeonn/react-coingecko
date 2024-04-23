import constants from '../constants'

const useBookmark = () => {
  const bookmarks = JSON.parse(localStorage.getItem(constants.bookmark.key) ?? '[]') as string[]

  const saveBookmark = (bookmarks: string[]) => {
    localStorage.setItem(constants.bookmark.key, JSON.stringify(bookmarks))
  }

  const addBookmark = (id: string) => {
    const newBookmarks = [...bookmarks, id]
    saveBookmark(newBookmarks)
  }

  const removeBookmark = (targetId: string) => {
    const newBookmarks = bookmarks.filter((id) => id !== targetId)
    saveBookmark(newBookmarks)
  }

  const getIsBookmarked = (target: string) => {
    return bookmarks.filter((id) => id === target).length > 0
  }

  return { bookmarks, addBookmark, removeBookmark, getIsBookmarked }
}

export default useBookmark
