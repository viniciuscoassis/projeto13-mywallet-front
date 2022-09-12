import BlockedPage from "./blockedPage";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("mywallet"));

  if (auth) {
    const then = auth.timestamp;
    const now = +new Date();
    if (now - then < 1000 * 60 * 30) {
      return <>{children}</>;
    } else {
      localStorage.clear();
      return <BlockedPage></BlockedPage>;
    }
  } else {
    return <BlockedPage></BlockedPage>;
  }
}
