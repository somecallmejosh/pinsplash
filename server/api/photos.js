export default defineEventHandler(async (event) => {
  const { accessKey, photoApiBaseUrl } = useRuntimeConfig(event)

  const query = getQuery(event)
  const page = query.page ? query.page : '1'
  const perPage = query.per_page ? query.per_page : '16'

  try {
    const result = await $fetch(
      `${photoApiBaseUrl}/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}`,
    )
    const photos = ({
      id,
      slug,
      urls,
      alt_description,
      description,
      height,
      width,
      user,
    }) => {
      return {
        photo: {
          id: id,
          slug: slug,
          url: urls.regular,
          alt_description: alt_description ? alt_description : description,
          description: description ? description : alt_description,
          height: height,
          width: width,
        },
        user: {
          id: user.id,
          name: user.name ? user.name : user.username,
          profileImage: user.profile_image.small,
        },
      }
    }
    const photoResults = result.map(photos)
    return photoResults
  } catch (error) {
    console.error('Error fetching photos:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})
