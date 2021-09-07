import MainContainer from "../components/MainContainer";
import styled from "styled-components";
import Link from "next/link";

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

export default function Home() {
  return (
    <MainContainer title="Список постов">
      <Posts>
        <PostWrapper>
          <Link href={'/posts/[id]'} as={`/posts/1`}>
            <Post url={'/static/post_1.png'}>
              <PostTitle>Мальдивы. Рай или пафос ? </PostTitle>
            </Post>
          </Link>
        </PostWrapper>
        <PostWrapper>
          <Link href={'/posts/[id]'} as={`/posts/2`}>
            <Post url={'/static/post_2.png'}>
              <PostTitle>Швейцария. Красота природы. </PostTitle>
            </Post>
          </Link>
        </PostWrapper>
        <PostWrapper>
          <Link href={'/posts/[id]'} as={`/posts/3`}>
            <Post url={'/static/post_3.png'}>
              <PostTitle>Италия. Остров Капри. Обзор. </PostTitle>
            </Post>
          </Link>
        </PostWrapper>
        <PostWrapper>
          <Link href={'/posts/[id]'} as={`/posts/4`}>
            <Post url={'/static/post_4.png'}>
              <PostTitle>США. Сан-Франциско, дорого ?</PostTitle>
            </Post>
          </Link>
        </PostWrapper>
        <PostWrapper>
          <Link href={'/posts/[id]'} as={`/posts/5`}>
            <Post url={'/static/post_5.png'}>
              <PostTitle>Канада. Пейзажи вблизи Онтарио.</PostTitle>
            </Post>
          </Link>
        </PostWrapper>
        <PostWrapper>
          <Link href={'/posts/[id]'} as={`/posts/6`}>
            <Post url={'/static/post_6.png'}>
              <PostTitle> </PostTitle>
            </Post>
          </Link>
        </PostWrapper>

      </Posts>


    </MainContainer>
  )
}
