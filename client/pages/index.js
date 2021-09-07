import MainContainer from "../components/MainContainer";
import styled from "styled-components";
import Link from "next/link";
import PostService from "../API/PostService";

const Posts = styled.section`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
`
const PostWrapper = styled.article`
  width: 31.5%;
  height: 270px;
  overflow: hidden;
  transition: transform .3s;
  margin-bottom: 50px;
  border-radius: ${props => props.theme.radius.medium};

  &:hover {
    transform: scale(1.1);
    transition: transform .3s;
  }
`
const Post = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  background: url(${props => props.url}) no-repeat center/cover;
`
const PostTitle = styled.h2`
  padding: 15px 20px;
  min-height: 50px;
  font-size: 18px;
  width: 100%;
  border: 1px solid white;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
`

export default function Home({posts = []}) {
  return (
    <MainContainer title="Список постов">
      <Posts>
        {posts.map(post => (
          <PostWrapper key={post._id}>
            <Link href={'/posts/[id]'} as={`/posts/${post._id}`}>
              <Post url={post.imgUrl}>
                <PostTitle>{post.title}</PostTitle>
              </Post>
            </Link>
          </PostWrapper>
        ))}
      </Posts>
    </MainContainer>
  )
}

export async function getStaticProps() {
  const posts = await PostService.getAllPost()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts
    }
  }
}
