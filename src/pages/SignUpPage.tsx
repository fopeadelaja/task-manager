import { Button, Spinner, VStack } from "@chakra-ui/react";
import AuthFormField from "../components/auth/AuthFormField";
import AuthLayout, { AuthLink } from "../components/auth/AuthLayout";
import { signUp, type SignUpPayload } from "../api/auth";
import { useForm } from "react-hook-form";
interface SignUpFormValues extends SignUpPayload {
  confirmPassword: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>();

  const onSubmit = async (data: SignUpFormValues) => {
    const result = await signUp(data);
    console.log(result);
  };
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Get started with your personal Kanban workspace."
      footer={
        <>
          Already have an account? <AuthLink to="/login">Sign in</AuthLink>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack align="stretch" gap={4}>
          <AuthFormField
            label="First Name"
            type="text"
            placeholder="Jane"
            autoComplete="first-name"
            {...register("firstName", { required: "First name is required" })}
            errorMessage={errors.firstName?.message}
          />
          <AuthFormField
            label="Last Name"
            type="text"
            placeholder="Doe"
            autoComplete="last-name"
            {...register("lastName", { required: "Last name is required" })}
            errorMessage={errors.lastName?.message}
          />
          <AuthFormField
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            {...register("email", { required: "Email is required" })}
            errorMessage={errors.email?.message}
          />
          <AuthFormField
            label="Password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            {...register("password", { required: "Password is required" })}
            errorMessage={errors.password?.message}
          />
          <AuthFormField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            borderRadius="20px"
            w="100%"
            bg="primary"
            color="white"
            fontSize="sm"
            fontWeight="bold"
            mt={2}
            _hover={{ bg: "primaryHover" }}
          >
            {isSubmitting ? <Spinner /> : "Create Account"}
          </Button>
        </VStack>
      </form>
    </AuthLayout>
  );
};

export default SignUpPage;
