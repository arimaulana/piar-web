"use server";

import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { IMachineSession } from "@/types";

export async function createMachineSession(
  prevState: {
    message: string;
    machineSession?: IMachineSession;
  },
  formData: FormData
) {
  const schema = z.object({
    machineId: z.string().min(1),
    clientInfo: z.string().min(1), // -- uuid v4
  });

  const clientInfo = uuidv4();

  const parse = schema.safeParse({
    machineId: formData.get("machineId"),
    clientInfo: clientInfo,
  });

  if (!parse.success) {
    return {
      message: "Failed to create machine session",
    };
  }

  const data = parse.data;

  try {
    const res: IMachineSession = {
      machineSessionId: uuidv4(),
      machineId: data.machineId,
      clientInfo: data.clientInfo,
      sessionCode: Math.floor(Math.random() * (100000 - 1 + 1) + 1)
        .toString()
        .padStart(5, "0"),
      sessionKey: uuidv4(),
    };

    // TODO: add api create session here
    console.info("create session res: ", res);

    revalidatePath(`/machines/${data.machineId}`);

    return {
      message: `Session has been initialized`,
      machineSession: res,
    };
  } catch (e) {
    return {
      message: "Failed to create machine session",
    };
  }
}
