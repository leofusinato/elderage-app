import { InviteSituation } from "../../utils/constants";

export type InviteProps = {
  id: string;
  situation: InviteSituation;
  aged: {
    id: string;
    name: string;
  };
  user: {
    id: string;
    name: string;
  };
};
