import { create } from 'zustand'

const useStore = create((set) => ({
  isFullWidth: false,
  toggleFullWidth: set((state) => ({
    isFullWidth: !state.isFullWidth,
  })),
}))

export const { isFullWidth } = useStore.getState()
