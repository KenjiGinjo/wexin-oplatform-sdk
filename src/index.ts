import { TicketToken } from "@/clients/ticket-token";
import { MiniProgramManagement } from "@/clients/miniprogram-management";
import { createAuthUrl } from "./lib/createAuthUrl";

export class WeixinOplatformClient {
    constructor(
        public ticketToken = new TicketToken(),
        public miniProgramManagement = new MiniProgramManagement()
    ) { }

}

