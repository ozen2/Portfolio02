import Button from "./components/buttons/Button";

export default function page() {
  return (
    <main>
      <div className="flex gap-56">
        <h1 className="ClashDisplay-semibold text-[18.75rem]">YU</h1>
        <h1 className="ClashDisplay-semibold text-[18.75rem]">ME</h1>
      </div>
      <Button content="À propos de moi" href={"/about"} />
    </main>
  );
}
