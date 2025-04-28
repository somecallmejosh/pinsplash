export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const { accessKey, photoApiBaseUrl } = useRuntimeConfig(event)

  try {
    const result = await $fetch(
      `${photoApiBaseUrl}/photos/${id}/?client_id=${accessKey}&orientation=landscape`,
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
      blur_hash,
    }) => {
      return {
        alt_description,
        created_at,
        description,
        downloads,
        height,
        links,
        urls,
        user,
        views,
        width,
        blur_hash,
        related_collections: related_collections.results.map((collection) => {
          return {
            photo: {
              id: collection.cover_photo.id,
              slug: collection.cover_photo.slug,
              title: collection.title,
              alt_description: collection.cover_photo.alt_description,
              description: collection.cover_photo.description,
              height: collection.cover_photo.height,
              width: collection.cover_photo.width,
              url: collection.cover_photo.urls.regular,
            },
            user: {
              id: collection.user.id,
              name: collection.user.name ? collection.user.name : collection.user.username,
              profileImage: collection.user.profile_image.small,
            }
          }
        })
      }
    }




    return photo(result)
  } catch (error) {
    console.error('Error fetching photo:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})
