export default defineEventHandler(async (event) => {
  const { accessKey, photoApiBaseUrl } = useRuntimeConfig(event)

  const query = getQuery(event)
  const page = query.page ? parseInt(query.page, 10) : 1
  const perPage = query.per_page ? parseInt(query.per_page, 10) : 30

  try {
    const result = await $fetch(
      `${photoApiBaseUrl}/collections/?client_id=${accessKey}&page=${page}&per_page=${perPage}`,
    )

    const filteredResults = await result.filter(
      (photo) =>
        photo.user.username !== 'unsplashplus' &&
        photo.user.username !== 'plus',
    )

    const collections = ({
      cover_photo: photo,
      total_photos,
      id,
      title,
      description,
      user,
    }) => {
      return {
        id: id,
        totalPhotos: total_photos,
        title: title,
        description: description,
        user: user,
        photo: {
          id: photo.id,
          url: photo.urls.thumb,
          alt_description: photo.alt_description
            ? photo.alt_description
            : photo.description,
          description: photo.description
            ? photo.description
            : photo.alt_description,
          height: photo.height,
          width: photo.width,
        },
      }
    }

    const collectionResults = filteredResults.map(collections)
    return collectionResults
  } catch (error) {
    console.error('Error fetching collections:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})
