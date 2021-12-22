import {ImagePreview} from "@haulmont/jmix-react-antd";
import {useEffect, useState} from "react";
import {Button} from "antd";

export const ImageFieldDemo = () => {

  const [imageObjectUrl, setImageObjectUrl] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    fetch('/demo-image.jpg')
      .then((response)=>response.blob())
      .then((blob)=>{
        console.log(blob);
        setImageObjectUrl(URL.createObjectURL(blob))
      })
  },[])

  return (
    <div>
      <ImagePreview isVisible={isVisible}
                    isLoading={imageObjectUrl === ''}
                    onClose={() => setIsVisible(false)}
                    objectUrl={imageObjectUrl}
                    fileName={'demo-image.jpg'}
      />
      <Button onClick={() => setIsVisible(true)}>Preview Image</Button>
    </div>
  )
}
