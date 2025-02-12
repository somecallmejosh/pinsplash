export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const { accessKey, photoApiBaseUrl } = useRuntimeConfig(event)

  const result = await $fetch(
    `${photoApiBaseUrl}/photos/${id}/?client_id=${accessKey}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const photo = ({
    alt_description,
    created_at,
    description,
    downloads,
    height,
    width,
    links,
    related_collections,
    urls,
    user,
    views,
  }) => {
    return {
      alt_description,
      created_at,
      description,
      downloads,
      height,
      links,
      related_collections,
      urls,
      user,
      views,
      width,
    }
  }

  // return photo(result)
  return result
})
