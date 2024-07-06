import React from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css';

const TextEditor = () => {
    const { quill, quillRef } = useQuill();
  return (
    <div className='w-full'>
     <div className='w-full border h-auto'>
      <div  />
      <textarea name="" id="" className='w-full' rows={10} ref={quillRef}></textarea>
    </div>
    
    </div>
  )
}

export default TextEditor
