import icon from "./icon1.svg";
import icon2 from "./delete.svg";
import {
  Attachment,
  Content,
  Delete,
  Div,
  Frame,
  Name,
  Size,
} from "./render.styled";
import GetContext from "../../Context/Author-Context/getContext";

function RenderFiles() {
  const { files, setFiles } = GetContext();
  const filesCoppy = [...files];

  const handleClick = (index: number) => {
    filesCoppy.splice(index, 1);
    setFiles(filesCoppy);
  };
  console.log(files);
  return (
    <Div>
      {files.map((value: any, index: number) => {
        return (
          <Frame key={index}>
            <Attachment src={icon} />
            <Content>
              <Name>{value.name}</Name>
              <Size>{value.size + " KB"}</Size>
            </Content>
            <Delete
              src={icon2}
              onClick={() => {
                handleClick(index);
              }}
            />
          </Frame>
        );
      })}
    </Div>
  );
}

export default RenderFiles;
