import {BackgroundImage,DirectoryItemContainer,Body}from './directory-item.styles.jsx'

import {useNavigate}from 'react-router-dom'

const DirectoryItem = ({category})=>{
    const{title,imageUrl,size,route}=category
    const navigate = useNavigate()

    const onNavigateHandler = ()=>navigate(route)

    return(
        <DirectoryItemContainer onClick={onNavigateHandler} >
        <BackgroundImage
        imageUrl={imageUrl}
          
        
        /> 

        <Body>
          <h2>{title.toUpperCase()} </h2>
          <p>SHOP NOW</p>
        </Body>
      </DirectoryItemContainer>
    )
}
export default DirectoryItem