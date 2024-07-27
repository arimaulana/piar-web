"use client";

import { button as buttonStyles } from "@nextui-org/theme";
import { useFormState, useFormStatus } from "react-dom";
import { Link } from "@nextui-org/link";

import { createMachineSession } from "./actions";

const initialState = {
  message: "",
  sessionCode: "",
  machineSessionId: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className={buttonStyles({
        color: "primary",
        radius: "full",
        variant: "shadow",
      })}
      type="submit"
    >
      {pending ? "Getting session code..." : "Generate Session Code"}
    </button>
  );
}

export function SyncMachine({ machineId }: { machineId: string }) {
  const [state, formAction] = useFormState(createMachineSession, initialState);

  return (
    <form action={formAction}>
      <input name="machineId" type="hidden" value={machineId} />
      <input
        name="clientInfo"
        type="hidden"
        value="12345678-1234-1234-1234-1234567890ab"
      />

      <SubmitButton />
      <p className="text-center m-2">{state?.machineSession?.sessionCode}</p>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
      {state?.machineSession?.sessionKey ? (
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={`/machines/${machineId}/products?session=${state?.machineSession?.sessionKey}`}
        >
          Sync Machine
        </Link>
      ) : null}
    </form>
  );
}
