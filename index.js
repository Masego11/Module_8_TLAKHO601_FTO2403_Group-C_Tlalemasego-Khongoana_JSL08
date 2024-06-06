let bankBranchInstance = null; // variable to store the singleton instance of the bank branch
class BankBranch {  // defined class to manage branch information
    constructor(branchInfo) { //Contructor with branchInfo as it's parameter
        if(!bankBranchInstance) { //If statement to check if the bankBranchInstance variable is null
            this.branchInfo = branchInfo; //and if null to create a new instance with the provided branchInfo and assign it to bankBranchInstance.
            bankBranchInstance = this; 
        } 
            return bankBranchInstance; //return the bankBranchInstance
            
    //methods to the bankBranchclass for managing branch related info. 
    }
    getBranchInfo(){
        return this.branchInfo;
    }
    updateBranchInfo(newBranchInfo){
        this.branchInfo = newBranchInfo;
    }
    deletBranchInfo(){
        this.branchInfo = null;
    }
}
//Instances for the bankBranch class with different branch information
const branchA = new BankBranch (
    {name: 'National Branch', address: '126 tosselbessie road'});
console.log('Branch A details:', branchA.getBranchInfo());

const branchB = new BankBranch (
    {name: 'Provincial Branch', address: '8902 vander hof road'});
console.log('Branch B details', branchB.getBranchInfo());

console.log('Is branchA and branchB referring to the same instance?', branchA === branchB ); //Verying whether branchA & branchB are referring to the same instance
//Updated branch information using the updateBranch method 
branchA.updateBranchInfo(
    {name: 'New National Branch', address: '227 Beacon way'});
console.log('Branch A updated details:', branchA.getBranchInfo());
////deleted branch information using the deleteBranch method
branchB.deletBranchInfo();
console.log('Delete Branch B info:', branchB.deletBranchInfo());
//Verying whether branchA & branchB are referring to the same instance
console.log('Is branchA and branchB referring to the same instance?', branchA === branchB );
