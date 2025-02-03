import Menu from "@/components/menu";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] flex flex-col">
        <Navbar />
      </div>
    </div>
  );
}
