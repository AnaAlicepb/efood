import { TagContainer, TextTag } from './styles'

type PropsTag = {
  children: string
}

export default function Tag({ children }: PropsTag) {
  return (
    <TagContainer>
      <TextTag>{children}</TextTag>
    </TagContainer>
  )
}
