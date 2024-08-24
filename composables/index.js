import { ref } from 'vue'

export async function useFetchBlogs(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  try {
    data.value = await fetch(url).then(res => res.json())
  } catch(err) {
    error.value = err
  } finally {
    loading.value = false
  }

  return { data, loading, error }
} 

