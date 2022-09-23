import React from "react";
import { Stock } from "../../Gadgets/GlobalComponents";
import { PromotionContent } from "../style";

const Promotion = () => {
    return (
        <PromotionContent>
            <Stock>Summer Sale!, $59.99 $47.99 + Free Shipping!</Stock>
            <Stock>Turn up the heat in your relationship</Stock>
        </PromotionContent>
    )
}

export default Promotion