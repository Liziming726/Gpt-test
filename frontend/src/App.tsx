import React,{ useState,useRef} from 'react'
import { Spin } from 'antd';
import {apiGenerateImage} from './api'

function App() {
  //声明一个变量
  const [content, setContent] = useState('')
  const [analysisResult, setAnalysisResult] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const analysisBox = useRef(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [currentStatement, setCurrentStatement] = useState('');

  function reset() {
    setContent('');
    setAnalysisResult('');
    setImageUrl('');
  }

  function handleCheck() {
    const contentValue = content;
    setCurrentStatement(content);
    reset();

    setImageLoading(true);
    setAnalysisLoading(true);

    apiGenerateImage(contentValue).then(({ data }) => {
      setImageUrl(data.data);
      setImageLoading(false);
    });
    // apiConversation(contentValue, (data) => {
    //   setAnalysisResult(data);
    //   setAnalysisLoading(false);
    //   if (analysisBox.current) {
    //     analysisBox.current.scrollTop = analysisBox.current.scrollHeight;
    //   }
    // });
  }

  return (
    <div>
      <div className="">
        <h1 className="mb-9">{currentStatement}</h1>
        <div className="flex mb-9">
          <div className="w-96 h-96 border-solid border-2 border-purple-500 flex flex-col">
            <h2 className="text-xl">图片</h2>

            {imageLoading && <Spin/>}
            <div className="flex grow ">
              <img className="block m-auto" src={imageUrl} alt="" srcSet="" />
            </div>
          </div>
          <div className="whitespace-pre-line w-96 h-96 border-solid border-2 border-red-500 overflow-auto" ref={analysisBox}>
            <h2 className="text-xl">解析</h2>
            {/* {analysisLoading && <Spin/>} */}
            <div className="p-6">
              {analysisResult}
            </div>
          </div>
        </div>
        <div>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          <button onClick={handleCheck}>check</button>
        </div>
      </div>
    </div>
  )
}

export default App
