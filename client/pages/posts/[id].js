import MainContainer from "../../components/MainContainer";
import Link from "next/link";
import BtnBack from "../../components/BtnBack";
import styled from "styled-components";
import Image from "next/image";
import {StyleButton} from "../../components/AppButton";
import PostService from "../../API/PostService";
import {useRouter} from "next/router";

const SinglePost = styled.article`
  margin: 135px auto 50px;
  padding: 35px;
  padding-bottom: 56px;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const PostContent = styled.div`
  flex: 0 0 50%;
  margin-right: 25px;
`
const PostTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 25px;
  color: ${props => props.theme.colors.primary};
`
const PostText = styled.p`
  font-weight: 300;
`
const ImageWrapper = styled.div`
  flex: 0 0 45%;
`
const RemoveBtn = styled(StyleButton)`
  padding: 4px 18px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background: ${props => props.theme.colors.secondary};
`

const Post = ({post}) => {
  const router = useRouter()

  const removePost = async (post) => {
    await PostService.removePost(post._id)
    await router.push('/')
  }

  return (
    <MainContainer title={post.title}>
      <Link href={'/'}>
        <BtnBack>Назад</BtnBack>
      </Link>
      <SinglePost>
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostText>{post.text}</PostText>
        </PostContent>
        <ImageWrapper>
          <Image
            src={post.imgUrl}
            alt={post.title}
            width={540}
            height={340}
          />
        </ImageWrapper>
        <RemoveBtn onClick={() => removePost(post)}>Удалить статью</RemoveBtn>
      </SinglePost>
    </MainContainer>
  );
};

export async function getServerSideProps({query}) {
  const post = await PostService.getPostById(query.id)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post
    }
  }
}

export default Post;
