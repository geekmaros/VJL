import { BLOG_API } from '../constants/blog.constants'

export const fetchAllPosts = async () => {
  try {
    const response = await fetch(BLOG_API.FETCH_POSTS_API)

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error(`Failed to fetch posts. Status code: ${response.status}`)
    }
  } catch (error) {
    console.error(error)
  }
}
