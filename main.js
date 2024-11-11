import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio";
import { Transaction } from "./transaction";


const portfolioAllocation = getPortfolioAllocation();

console.log("Total Portfolio Value", calculatePortfolioValue());
console.log("Total Portfolio Allocation", portfolioAllocation);

try {
    const trans1 = new Transaction(1, "buy", 2);
    console.log("Trans 1:", transaction1);
    const trans2 = new Transaction(2, "sell", 1);
    console.log("Trans 2:", transaction2);
} catch (error) {
    console.error("Transaction Error");
}
console.log("New Portfolio Total Value", calculatePortfolioValue());