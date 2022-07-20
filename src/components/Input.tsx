import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg={"gray.700"}
      borderColor={"gray.500"}
      borderWidth={1}
      borderRadius={8}
      height={14}
      placeholderTextColor={"lightText"}
      _focus={{
        borderColor: "primary.500",
        borderWidth: 2,
        borderRadius: 8,
        bg: "gray.700",
      }}
      {...rest}
    />
  );
}
