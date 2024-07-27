import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type IMachine = {
  machineId: string;
  machineCode: string; // -- generated machine code. format: VEN-{5digit numeric}
  machineName: string;
  note: string;
  isActive: boolean;
};

export type IMachineSession = {
  machineSessionId: string;
  machineId: string;
  clientInfo: string;
  sessionCode: string;
  sessionKey: string; // will be used on each request
};
