type techStack = {
    id: number;
    name: string;
}

export type portofolioType = {
    id: number;
    image: string;
    type: string;
    year: number;
    title: string;
    description: string;
    techStack: techStack[];
    client: string;
}