export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const { accessKey, photoApiBaseUrl } = useRuntimeConfig(event)

  const result = await $fetch(
    `${photoApiBaseUrl}/collections/${id}/?client_id=${accessKey}&orientation=landscape`,
  )

  const collectionPhotos = await $fetch(
    `${photoApiBaseUrl}/collections/${id}/photos/?client_id=${accessKey}&per_page=16`,
  )

  const collection = ({ cover_photo: photo, id, title, description }) => {
    return {
      id: id,
      title: title,
      description: description,
      photo: {
        id: photo.id,
        url: photo.urls.raw,
        alt_description: photo.alt_description
          ? photo.alt_description
          : photo.description,
        description: photo.description
          ? photo.description
          : photo.alt_description,
      },
    }
  }

  const related = ({
    id,
    urls,
    alt_description,
    description,
    user,
    height,
    width,
  }) => {
    return {
      photo: {
        id: id,
        url: urls.raw,
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

  const collectionDetails = collection(result)
  const collectionRelatedPhotos = collectionPhotos.map(related)
  return { collectionDetails, collectionRelatedPhotos }
})
