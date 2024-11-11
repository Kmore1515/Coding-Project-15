import {getAssetbyId, assetArray} from "./asset";

export class Transaction {
    constructor(type, assetId, quantity) {
        this.type = type
        this.assetId = assetId
        this.quantity = quantity
        this.runTransaction();
    }
    runTransaction() {
        const asset = getAssetbyId(this.assetId);
        if(!asset) {
            throw new Error("Asset not in database")
        }
        if (this.type === "buy") {
            asset.quantity += this.quantity;
            return `${asset.name} was purchased, quantity was ${this.quantity}`
        }
        else if (this.type === "sell") {
            if (asset.quantity < this.quantity) {
            throw new Error(`Insufficient quantity for purchase of ${asset.name}`)
        }
            asset.quantity -= this.quantity
            return `${asset.name} sold at a quantity of ${this.quantity}`
    } else {
        throw new Error(`Invalid Transaction type, please write buy or sell.`)
    }
}
