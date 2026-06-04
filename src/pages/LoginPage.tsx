import { Button, VStack } from "@chakra-ui/react";
import AuthFormField from "../components/auth/AuthFormField";
import AuthLayout, { AuthLink } from "../components/auth/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your Kanban workspace."
      footer={
        <>
          Don&apos;t have an account? <AuthLink to="/signup">Sign up</AuthLink>
        </>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <VStack align="stretch" gap={4}>
          <AuthFormField
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <AuthFormField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
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
            Sign In
          </Button>
        </VStack>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
