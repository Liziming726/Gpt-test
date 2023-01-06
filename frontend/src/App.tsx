import React, { useState, useRef } from 'react'
import { apiGenerateImage } from './api'
import { Input, Spin } from 'antd';
const { Search } = Input;



function App() {
  const [imageLoading, setImageLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(false)
  const [contentValue, setContentValue] = useState('')



  function handleClick(){        
    setImageLoading(true)
    apiGenerateImage(contentValue).then(({ data })=> {
    setImageLoading(false)
    setImageUrl(data.data)
  })
}

function handleKeyPress(e){
  if(e.key === 'Enter'){
    handleClick()
  }
}

function reset(){
  if(contentValue === ''){
    setImageUrl('')
  }

}
  

  return (
    <div className='main'>
      <div className='content'>
        <h1>Image Generator</h1>
        <div className='toptop'>
          {imageLoading}
          <img src={imageUrl} alt="" srcSet=''/>
        </div>
        <div className='search'>
          <Search
            placeholder="Please enter the need to generate the image content"
            //如果加载成功，就显示图片，加载不成功则显示加载中
            enterButton="go"
            size='large'
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
            onSearch={handleClick}
            onKeyPress={handleKeyPress}
            loading={imageLoading}
            //当点击输入框为空时，清空图片
            onClick={reset}
          />
        </div>
      </div>
    </div>
  )
}

export default App
