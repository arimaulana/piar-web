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

export default async function MachineProductPage({
  params,
}: {
  params: { id: string };
}) {
  const machine = await getMachineById(params.id);

  // TODO: check is having active session? if any, redirect to products page

  return <section>Machine Product, {JSON.stringify(machine)}</section>;
}
