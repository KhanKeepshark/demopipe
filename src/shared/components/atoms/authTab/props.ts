import { TypeSetState } from "@/shared/utils/types";

export interface AuthTabProps {
  tab1: string;
  tab2: string;
  active: boolean;
  setActive: TypeSetState<boolean>;
}
