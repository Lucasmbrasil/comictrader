import { AuthProvider } from "./auth";
import { ComicsProvider } from "./comics";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ComicsProvider>
        <UserProvider>{children}</UserProvider>
      </ComicsProvider>
    </AuthProvider>
  );
};

export default Providers;
