export type detailType = {
    icon: React.ReactNode;
    label: string;
};

export type Article = {
    id: number;
    title: string;
    type: string;
    image: string;
    description: string;
    detail: detailType[];
};
