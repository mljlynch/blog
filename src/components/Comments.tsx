import * as React from "react";
import Giscus from "@giscus/react";
import { useColorMode, Box } from "theme-ui";

const Comments = () => {
  const [colorMode] = useColorMode();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Giscus
      id="comments"
      repo="mljlynch/blog-comments"
      repoId="R_kgDOPfILDg"
      category="General"
      categoryId="DIC_kwDOPfILDs4CuQJg"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode === "dark" ? "dark" : "light"}
      lang="en"
      loading="lazy"
    />
  ) : null;
};

export default Comments;
