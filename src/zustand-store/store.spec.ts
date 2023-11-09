import { describe, it, expect, beforeEach } from "vitest";
import { useStore as store } from ".";

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Getting Started with React',
      lessons: [
        { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
        { id: 'w-DW4DhDfcw', title: 'Styling the Post', duration: '10:05' },
      ],
    },
    {
      id: 2,
      title: 'Application Structure',
      lessons: [
        { id: 'gE48FQXRZ_o', title: 'Comment Component', duration: '13:45' },
        { id: 'Ng_Vk4tBl0g', title: 'Responsiveness', duration: '10:05' },
      ],
    },
  ],
}

const initialState = store.getState()

describe('Zustand store', () => {
  beforeEach(() => {
    store.setState(initialState)
  })

  it("should be able to play", () => {
    const { play } = store.getState()

    play([1, 2])

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })

  it("should be able to play next video", () => {
    store.setState({ course })

    const { next } = store.getState()

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(0)
    expect(currentLessonIndex).toEqual(1)
  })

  it("should be able to jump to the next module", () => {
    store.setState({ course })

    const { next } = store.getState()

    store.setState({ currentLessonIndex: 1 })

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(0)
  })

  it("shouldn't jump to next module if doesn't exists", () => {
    store.setState({ course })

    const { next } = store.getState()

    store.setState({
      currentLessonIndex: 1,
      currentModuleIndex: 1
    })

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(1)
  })
})