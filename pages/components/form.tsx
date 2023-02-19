import { Dispatch, ReactNode, SetStateAction, useRef, useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
} from "@chakra-ui/react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { ArrowUpIcon } from "@chakra-ui/icons";
import axios from "axios";

type Props = {
  filename: String;
  setFileName: Dispatch<SetStateAction<string>>;
  file: File | undefined;
  setFile: Dispatch<SetStateAction<File | undefined>>;
};

const Form = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = () => {
    console.log("On Submit: ", props.file?.name);
    const header = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Headers": "Authorization, X-XSRF-TOKEN",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data: any = new FormData();
    data.append("file", props.file);
    const postImageUri =
      "https://chord-analysis-backend-iq5232hggq-uc.a.run.app/upload";
    axios
      .post(postImageUri, data, header)
      .then((res) => {
        console.log("upload success");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(
          "ファイルのアップロード中にエラーが発生しました。管理者にお問い合わせください。"
        );
      });
  };
  const isError = props.filename === "";

  const validateFiles = (value: File) => {
    const fsMb = value.size / (1024 * 1024);
    const MAX_FILE_SIZE = 1;
    if (fsMb > MAX_FILE_SIZE) {
      setErrorMessage("ファイルサイズは10MB以下のものを選択ください");
      return false;
    }
    return true;
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      console.log("file upload");
      if (validateFiles(files[0])) {
        console.log("success");
        props.setFileName(files[0].name);
        props.setFile(files[0]);
      }
    }
  };

  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClickButton = () => inputRef.current?.click();

  return (
    <>
      <FormControl isInvalid={isError} isRequired>
        <InputGroup>
          <input
            type={"file"}
            multiple={false}
            hidden
            // accept={accept}
            ref={inputRef}
            onChange={onChangeFile}
          />
          <Button leftIcon={<ArrowUpIcon />} onClick={onClickButton}>
            {!!props.filename ? props.filename : "Upload"}
          </Button>
        </InputGroup>

        <FormErrorMessage>{errorMessage ? errorMessage : ""}</FormErrorMessage>
      </FormControl>

      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default Form;
