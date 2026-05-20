import axios from 'axios'

export async function getCourseWork(
  courseId: string
) {

  const token =
    localStorage.getItem(
      'google_access_token'
    )

  console.log(token)

  const response =
    await axios.get(

      `https://classroom.googleapis.com/v1/courses/${courseId}/courseWork?courseWorkStates=PUBLISHED`,

      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }

    )

  return response.data

}