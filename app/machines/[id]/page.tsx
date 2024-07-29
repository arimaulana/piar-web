import { SyncMachine } from "./sync-machine";

import { subtitle, title } from "@/components/primitives";
import { IMachine } from "@/types";

const getMachineById = async (id: string) => {
  const mockedMachine: IMachine = {
    machineId: id,
    machineName: "Vending Machine 001",
    machineCode: "VEN-001",
    note: "",
    isActive: true,
  };

  return mockedMachine;
};

export default async function MachinePage({
  params,
}: {
  params: { id: string };
}) {
  const machine = await getMachineById(params.id);

  // TODO: check is having active session? if any, redirect to products page

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Machine&nbsp;</h1>
        <h1 className={title({ color: "green" })}>
          {machine.machineCode}&nbsp;
        </h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          Welcome to our vending machine
        </h2>
      </div>

      <div className="flex gap-3 text-center">
        <SyncMachine machineId={params.id} />
      </div>
    </section>
  );
}
