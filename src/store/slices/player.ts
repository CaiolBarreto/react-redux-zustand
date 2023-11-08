import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Getting Started with React',
          lessons: [
            { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
            { id: 'w-DW4DhDfcw', title: 'Styling the Post', duration: '10:05' },
            { id: 'D83-55LUdKE', title: 'Header Component', duration: '06:33' },
            { id: 'W_ATsETujaY', title: 'Sidebar Component', duration: '09:12' },
            { id: 'Pj8dPeameYo', title: 'Global CSS', duration: '03:23' },
            { id: '8KBq2vhwbac', title: 'Comment Form', duration: '11:34' },
          ],
        },
        {
          id: '2',
          title: 'Application Structure',
          lessons: [
            { id: 'gE48FQXRZ_o', title: 'Comment Component', duration: '13:45' },
            { id: 'Ng_Vk4tBl0g', title: 'Responsiveness', duration: '10:05' },
            { id: 'h5JA3wfuW1k', title: 'Interactions in JSX', duration: '06:33' },
            { id: '1G0vSTqWELg', title: 'Using State', duration: '09:12' },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0
  },
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },

    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson = state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course.modules[nextModuleIndex]

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0;
        }
      }
    }
  }
})

export const player = playerSlice.reducer

export const { play, next } = playerSlice.actions

export function useCurrentLesson() {
  return useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}
