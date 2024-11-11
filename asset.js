export const assetArray = [
    { id: 1, name: "Tesla", type: "stock", price: 320, quantity: 25
    }, 

    { id: 2, name: "Apple", type: "bond", price: 95, quantity: 50
    }
]

export function getAssetbyId(assetId) {
    const returnAsset = assetArray.find(asset => assetId === asset.id)

    if (assetWanted) {
        return returnAsset
    }   else {
        return null
    }
};

