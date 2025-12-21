import type { TechStack } from "./techstack";

export type categoryPortfolioType = {
    id: number;
    name: string;
}
export type portfolioImageType = {
    id: number;
    portfolio_id: number;
    image_id: string;
    image_url: string;
}

type portfolio_stack = {
    techstack: TechStack;
}

export type portofolioType = {
    id: number;
    portfolio_images?: portfolioImageType[];
    category: categoryPortfolioType;
    created_at: string;
    name: string;
    link?: string;
    description: string;
    portfolio_techstack: portfolio_stack[];
    client_name: string;
    thumbnail_id: string;
    thumbnail_url: string;
}