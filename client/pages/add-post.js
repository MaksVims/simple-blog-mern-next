import MainContainer from "../components/MainContainer";
import BtnBack from "../components/BtnBack";
import styled from "styled-components";
import Link from "next/link";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import {useState} from "react";
import PostService from "../API/PostService";
import {useRouter} from "next/router";

const FormWrapper = styled.section`
  margin-top: 200px;
  width: 500px;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${props => props.theme.radius.medium};
  background: ${props => props.theme.colors.white};
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const FormField = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  &:last-of-type {
    margin-bottom: 30px;
  }
`
const FieldText = styled.span`
  font-weight: 300;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.dark};
`
const FormTextArea = styled.textarea`
  width: 100%;
  padding: 7px 15px;
  height: 140px;
  resize: none;
  overflow-y: auto;
  border-radius: ${props => props.theme.radius.min};
  border: 1px solid ${props => props.theme.colors.lightgray};
`

const AddPost = () => {
  const [post, setPost] = useState({title: '', text: '', imgUrl: ''})
  const router = useRouter()

  const addPost = async (e) => {
    e.preventDefault()
    await PostService.addNewPost(post.title, post.text, post.imgUrl)
    await router.push('/')
  }

  return (
    <MainContainer title="Создание поста">
      <Link href={'/'}>
        <BtnBack>Назад</BtnBack>
      </Link>
      <FormWrapper>
        <Form>
          <FormField>
            <FieldText>Название статьи:</FieldText>
            <AppInput
              onChange={(e) => setPost(prev => ({...prev, title: e.target.value}))}
              value={post.title}
              type="text"
              required/>
          </FormField>
          <FormField>
            <FieldText>Текст статьи:</FieldText>
            <FormTextArea
              onChange={(e) => setPost(prev => ({...prev, text: e.target.value}))}
              value={post.text}
            />
          </FormField>
          <FormField>
            <FieldText>URL картинки:</FieldText>
            <AppInput
              onChange={(e) => setPost(prev => ({...prev, imgUrl: e.target.value}))}
              value={post.imgUrl}
              type="url"/>
          </FormField>
          <AppButton
            style={{alignSelf: 'center'}}
            onClick={addPost}
          >Добавить</AppButton>
        </Form>
      </FormWrapper>
    </MainContainer>
  );
};

export default AddPost;
