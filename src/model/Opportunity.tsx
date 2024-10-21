class Opportunity {

    private name: string;
    private company: string;
    private status: OpportunityStatus;
  

    constructor(name: string, company: string, status: OpportunityStatus) {
      this.name = name;
      this.company = company;
      this.status = status;
    }
  

    public getName(): string {
      return this.name;
    }
  
    public getCompany(): string {
      return this.company;
    }
  
    public getStatus(): string {
      return this.status;
    }
  
    public setName(name: string): void {
      this.name = name;
    }
  
    public setCompany(company: string): void {
      this.company = company;
    }
  
    public setStatus(status: OpportunityStatus): void {
      this.status = status;
    }
  
    public displayDetails(): string {
      return `Opportunity Name: ${this.name}, Company: ${this.company}, Status: ${this.status}`;
    }
  }
  
  export default Opportunity;

  export enum OpportunityStatus {
    APPLIED = 'Applied',
    INTERVIEW = 'Interview',
    OFFER = 'Offer',
    HIRED = 'Hired',
  }