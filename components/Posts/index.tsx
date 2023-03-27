import PostItem from "./PostItem"

interface PostFeedProps {
  username: string
}

export default function PostFeed({ username }: PostFeedProps) {
  const posts = [
    {
      id: 1,
      name: "Dam Son",
      username: "damson",
      body: "Hello",
      createdAt: 2023,
      commentsCount: 2,
      likesCount: 2
    },
    {
      id: 2,
      name: "Hoo Lee Sheet",
      username: "holeshet",
      body: "Hello",
      createdAt: 2023,
      commentsCount: 2,
      likesCount: 2
    }
  ]

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem username={username} key={post.id} data={post} />
      ))}
    </>
  )
}
