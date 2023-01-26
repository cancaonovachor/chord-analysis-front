import { ReactNode, useRef, useState } from "react";
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

type FileUploadProps = {
  register: UseFormRegisterReturn;
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
};

export const FileUpload = (props: FileUploadProps) => {
  const { register, accept, multiple, children } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filename, setFileName] = useState("");
  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void;
  };

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={"file"}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        onChange={(e) =>
          setFileName(e.target.files ? e.target.files[0].name : "")
        }
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
      />
      <>
        <Button leftIcon={<ArrowUpIcon />}>
          {!!filename ? filename : "Upload"}
        </Button>
      </>
    </InputGroup>
  );
};

type FormValues = {
  file_: FileList;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log("On Submit: ", data);
  });

  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return "Files is required";
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 1;
      if (fsMb > MAX_FILE_SIZE) {
        return "Max file size 10mb";
      }
    }
    return true;
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl isInvalid={!!errors.file_} isRequired>
          <FileUpload
            accept={"image/*"}
            register={register("file_", { validate: validateFiles })}
          />

          <FormErrorMessage>
            {errors.file_ && errors?.file_.message}
          </FormErrorMessage>
        </FormControl>

        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
