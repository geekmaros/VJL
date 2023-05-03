import { defineStore, acceptHMRUpdate } from 'pinia'
import blogData from '../api/blogData.json'
import { fetchAllPosts } from '../api/useBlog'

export const useBlog = defineStore('module/blog', {
  state: () => ({
    blogs: []
  }),
  getters: {
    getAllBlogs: (state) => state.blogs
  },
  actions: {
    async fetchBlogs() {
      try {
        const posts = await fetchAllPosts()
        this.blogs = posts
      } catch (error) {
        console.error(error)
      }
      // this.blogs = blogData
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlog, import.meta.hot))
}
