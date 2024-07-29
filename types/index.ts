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

export type IMachineSessionHistory = {
  machineSessionId: string;
  machineId: string;
  machineCode: string;
  machineName: string;
  clientInfo: string;
  sessionDate: string;
  sessionDuration: number; // -- in seconds, session stop time - session date
  sessionCode: string; // -- generated session code, will be used to show on machine and user device
  isBuying: boolean;
  productId?: string;
  productName?: string;
  productPrice?: number;
  productQty?: number;
  paymentMethod?: string;
};

export type IMachineProduct = {
  machineProductId: string;
  machineId: string;
  productId: string;
  productCategoryId: string;
  machineCode: string;
  machineName: string;
  productName: string;
  productImageUrl: string;
  productCategoryName: string;
  productPrice: number;
  productStock: number;
  isActive: boolean;
};

export type IProductCategory = {
  productCategoryId: string;
  productCategoryName: string;
  note: string;
  isActive: boolean;
};

export type IProduct = {
  productId: string;
  productCategoryId: string;
  productCategoryName: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productStock: number;
  note: string;
  isActive: boolean;
  createdUserId: string;
  createdDate: string;
  modUserId: string;
  modDate: string;
};
