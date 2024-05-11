import { CodeManagement } from "./code-management";
import { BasicInfoManagement } from "./basic-info-management";
import { DomainManagement } from "./domain-management";
import { CategoryManagement } from "./category-management";

export class MiniProgramManagement {
    constructor(
        public codeManagement = new CodeManagement(),
        public basicInfoManagement = new BasicInfoManagement(),
        public domainManagement = new DomainManagement(),
        public categoryManagement = new CategoryManagement()
    ) { }
}
