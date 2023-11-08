import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../store/slices/player'
import { useAppDispatch } from '../store'

export function Video() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()

  function handleNextVideo() {
    dispatch(next())
  }

  if (!currentLesson) {
    return null
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        onEnded={handleNextVideo}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
}
