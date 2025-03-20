import { create } from "zustand";
import { iconArcade } from '@public/images';

interface Plan {
    title: string;
    description: string;
    priceMonthly: string;
    priceYearly: string;
    key: string;
    iconSrc: any;
}

interface SelectedAddOns {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
    [key: string]: boolean;
}

interface PlanState {
    selectedPlan: Plan | null;
    selectedAddOns: SelectedAddOns;
    setPlan: (plan: Plan) => void;
    setAddOns: (addOns: SelectedAddOns) => void;
}

export const usePlanStore = create<PlanState>((set) => ({
    selectedPlan: {
        title: "Arcade",
        description: "Basic plan for casual gamers",
        priceMonthly: "$9/mo",
        priceYearly: "$90/yr",
        key: "arcade",
        iconSrc: iconArcade
    },
    selectedAddOns: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
    },
    setPlan: (plan) => set({ selectedPlan: plan }),
    setAddOns: (addOns) => set({ selectedAddOns: addOns }),
}));
