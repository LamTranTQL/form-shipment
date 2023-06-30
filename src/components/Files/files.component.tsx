import Dropzone from "react-dropzone";
import {
  Descriptions,
  FileContainer,
  FlexCols,
  FlexCols2,
  FlexRow,
  Icon,
  LinkFile,
  Title,
} from "./files.styled";
import iconStorage from "./icon-storage.svg";
import GetContext from "../Context/Author-Context/getContext";
import { useRef } from "react";
import RenderFiles from "./Render/render.component";

function Files() {
  const { files, setFiles } = GetContext();

  const filesCoppy = [...files];

  const maxSizeRef = useRef<number>(24 * 1024 * 1024);

  const onDrop = (file: any) => {
    if (filesCoppy.length === 0) {
      file.forEach((value: any) => {
        if (value.size <= maxSizeRef.current) {
          filesCoppy.push(value);
        }
      });
    } else {
      file.forEach((value: any) => {
        if (value.size <= maxSizeRef.current) {
          let newFile = value;
          let i = 1;
          filesCoppy.forEach((item: any) => {
            if (newFile.path === item.path) {
              i++;
            }
          });
          if (i > 1) {
            let index = newFile.name.indexOf(".");
            let length = newFile.name.length;
            let str = newFile.name.substr(0, index);
            let str2 = newFile.name.substr(index, length);
            let newName = `${str}(${i})${str2}`;
            Object.defineProperty(newFile, "name", {
              value: newName,
            });
          }
          filesCoppy.push(newFile);
        }
      });
    }

    setFiles(filesCoppy);
  };

  return (
    <FileContainer>
      <FlexCols>
        {files.length === 0 ? <Icon src={iconStorage} /> : <RenderFiles />}
        <FlexCols2>
          <FlexRow>
            <Title>{"Drop file here or "}</Title>
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()}></input>
                  <LinkFile>{" choose a file "}</LinkFile>
                </div>
              )}
            </Dropzone>
            <Title>{" to upload"}</Title>
          </FlexRow>
          <Descriptions>Supports: JPG, PNG format (max 24MB)</Descriptions>
        </FlexCols2>
      </FlexCols>
    </FileContainer>
  );
}

export default Files;
