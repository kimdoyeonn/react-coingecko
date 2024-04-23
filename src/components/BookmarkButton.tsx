import { useContext, useState } from 'react'
import ToastContext from '../contexts/ToastContext'
import constants from '../constants'
import useBookmark from '../hooks/useBookmark'

const BookmarkButton = ({ id, size }: { id: string; size?: number }) => {
  const { addToast } = useContext(ToastContext)
  const { addBookmark, removeBookmark, getIsBookmarked } = useBookmark()
  const [isBookmarked, setIsBookmarked] = useState(getIsBookmarked(id))

  const handleBookmark = (target: string) => {
    if (isBookmarked) {
      removeBookmark(target)
      setIsBookmarked(false)
      addToast({ message: constants.bookmark.toast.remove })
    } else {
      addBookmark(target)
      setIsBookmarked(true)
      addToast({ message: constants.bookmark.toast.add })
    }
  }

  return (
    <button onClick={() => handleBookmark(id)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size ?? '40'} height={size ?? '39'} viewBox="0 0 14 13">
        <path
          id="star"
          d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
          transform="translate(-2 -2)"
          fill={isBookmarked ? '#966fd6' : '#b1b1b1'}
        />
      </svg>
    </button>
  )
}

export default BookmarkButton
