import { Button, Spinner, VStack } from "@chakra-ui/react";
import AuthFormField from "../components/auth/AuthFormField";
import AuthLayout, { AuthLink } from "../components/auth/AuthLayout";
import { signUp, type SignUpPayload } from "../api/auth";
import { useForm } from "react-hook-form";
import { toaster } from "../components/ui/toaster";
interface SignUpFormValues extends SignUpPayload {
  confirmPassword: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<SignUpFormValues>();

  const onSubmit = async (data: SignUpFormValues) => {
    const { confirmPassword, ...payload } = data;
    try {
      const result = await signUp(payload);
      if (!result) {
        throw new Error("Failed to create account");
      }
      toaster.create({
        title: "Account created",
        description: "You can now sign in to your account",
        type: "success",
      });
    } catch (error) {
      toaster.create({
        title: "Error creating account",
        description: "Please try again",
        type: "error",
      });
    }
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
            type="password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
            errorMessage={errors.confirmPassword?.message}
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
