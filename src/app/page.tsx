import Background from "@/components/ui/background";

export default function HomePage() {
  //const { userId } = auth()
  //if (userId != null) redirect("/events")

  return (
    <Background>
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold text-black">Welcome to the Home Page</h1>
      </div>
    </Background>
  );
}