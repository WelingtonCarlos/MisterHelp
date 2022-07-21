import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  loading?: boolean;
  title?: string;
};

export function Button({ title, loading, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="cyan.500"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "cyan.300" }}
      {...rest}
    >
      <Heading>{title}</Heading>
    </ButtonNativeBase>
  );
}
