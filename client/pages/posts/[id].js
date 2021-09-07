import MainContainer from "../../components/MainContainer";
import Link from "next/link";
import BtnBack from "../../components/BtnBack";
import styled from "styled-components";
import Image from "next/image";
import {StyleButton} from "../../components/AppButton";

const SinglePost = styled.article`
  margin: 135px auto 0;
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

const Post = () => {
  return (
    <MainContainer title="Страница поста">
      <Link href={'/'}>
        <BtnBack>Назад</BtnBack>
      </Link>
      <SinglePost>
        <PostContent>
          <PostTitle>Альпы. Покори вершину с нами !</PostTitle>
          <PostText>А́льпы (фр. Alpes, нем. Alpen, итал. Alpi, романш. Alps, словен. Alpe) — самый высокий и
            протяжённый горный хребет среди систем, целиком лежащих в Европе. При этом Кавказские горы выше, а
            Уральские — протяжённей, но они лежат также и на территории Азии (в зависимости от выбранного определения
            границы между Европой и Азией).

            Альпы представляют собой сложную систему хребтов и массивов, протянувшуюся выпуклой к северо-западу дугой
            от Лигурийского моря до Среднедунайской низменности. Альпы располагаются на территории 8 стран: Франции,
            Монако, Италии, Швейцарии, Германии, Австрии, Лихтенштейна и Словении. Общая длина альпийской дуги
            составляет около 1200 км (по внутреннему краю дуги — около 750 км), ширина — до 260 км. Самой высокой
            вершиной Альп является гора Монблан высотой 4810 метров над уровнем моря, расположенная на границе Франции
            и Италии[1]. Всего в Альпах сосредоточено около 100 вершин-четырёхтысячников[2].</PostText>
        </PostContent>
        <ImageWrapper>
          <Image
            src="/static/post_1.png"
            alt="Picture of the author"
            width={540}
            height={340}
          />
        </ImageWrapper>
        <RemoveBtn>Удалить статью</RemoveBtn>
      </SinglePost>
    </MainContainer>
  );
};

export default Post;
