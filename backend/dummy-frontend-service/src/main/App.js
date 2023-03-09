import React, { useState } from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import JsZip from 'jszip';
import FileSaver from 'file-saver';

function App() {
  const [file, setFile] = useState()

  const submit = async event => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    const res = await axios.post("/s3/upload", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    console.log(res);
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  const download = async url => {
    // const res = await axios.get(url,{headers:{}});
    // console.log(res.data);
    const res = (await fetch(url)).blob()
    return res;
  }

  const downloadByGroup = (urls, filesPerGroup = 5) => {
    return Promise.map(
      urls,
      async url => {
        return await download(url)
      },
      { concurrency: filesPerGroup }
    )
  }

  const buildZip = (blobs,names) => {
    const zip = JsZip();
    blobs.forEach((blob, i) => {
      zip.file(names[i], blob);
    });
    zip.generateAsync({ type: 'blob' }).then(zipFile => {
      const currentDate = new Date().getTime();
      const fileName = `combined-${currentDate}.zip`;
      return FileSaver.saveAs(zipFile, fileName);
    });
  }

  const downloadZip = async () => {
    const person = (await axios.get('/people/121212121')).data;
    const urls = person.files.map(file => file.s3Id);
    const names = person.files.map(file => file.type + '.' + file.s3Id.split('.')[1]) //constructs file name - file1.jpg
    const urlInfo = await axios.get('/s3/multi',{
      params:{
        s3Id:JSON.stringify(urls)
      }
    });
    const blobs = await downloadByGroup(urlInfo.data,10);
    buildZip(blobs,names);
  }

  return (
    <div>
      <form onSubmit={submit} style={{ width: 650 }} className="flex flex-col space-y-5 px-5 py-14">
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <button type="submit">Submit</button>
      </form>
      <button onClick={downloadZip}>lets goo</button>
    </div>
  );
}

export default App;