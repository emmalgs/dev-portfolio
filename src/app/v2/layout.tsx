import Canvas from "./Canvas";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Canvas>{children}</Canvas>
      <Footer />
    </div>
  );
}
