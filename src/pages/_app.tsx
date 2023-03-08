import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { ThirdwebProvider } from "@thirdweb-dev/react";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider
      authConfig={{
        // Set this to your domain to prevent signature malleability attacks.
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN as string,
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
};

export default api.withTRPC(MyApp);
