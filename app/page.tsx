import { Snippet } from "@nextui-org/snippet";

export default function Home() {
  // TODO: fetch machine data

  // TODO: check is having active session?

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="mt-8 text-center">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>PIAR</span>
        </Snippet>
        <p>You should open the link extracted</p>
        <p>on the vending machine`s qr code</p>
        <p>to start a session</p>
      </div>
    </section>
  );
}
