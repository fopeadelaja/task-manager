import { Input, Text, VStack, type InputProps } from "@chakra-ui/react";

interface AuthFormFieldProps extends InputProps {
  label: string;
  errorMessage?: string;
}

const AuthFormField = ({
  label,
  errorMessage,
  ...inputProps
}: AuthFormFieldProps) => {
  return (
    <VStack align="stretch" gap={2}>
      <Text fontSize="xs" fontWeight="bold" color="textMain">
        {label}
      </Text>
      <Input
        bg="transparent"
        borderColor={
          errorMessage ? "red.500" : "rgba(130, 143, 163, 0.25)"
        }
        _hover={{ borderColor: "primary" }}
        _focus={{ borderColor: "primary" }}
        {...inputProps}
      />
      {errorMessage && (
        <Text fontSize="xs" color="red.500">
          {errorMessage}
        </Text>
      )}
    </VStack>
  );
};

export default AuthFormField;
